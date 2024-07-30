"use strict;"

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export const homeThreeModule = (async () => {

    const THREE = await import("three");
    const CANNON = await import("cannon");

    const DAMPING = 0.9;
    const TIMESTEP = 1.0/60.0;
    const XROTATION = -Math.PI / 2;
    const OBJECTLIMIT = 20;
    const CONTAINERID = "canvasContainer";

    let container;
    let scene;
    let camera;
    let renderer;
    let world;
    let raycaster;
    let mouse;
    let controls;
    let stats;
    let planeTexture;
    let cubeTexture;

    const initPhysics = () => {
        world = new CANNON.World();
        world.gravity.set(0, -10, 0);
        world.broadphase = new CANNON.NaiveBroadphase();
        world.solver.iterations = 10;
    }

    const initScene = () => {
        container = document.getElementById(CONTAINERID);
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 1, 500);
        mouse = new THREE.Vector3();
        raycaster = new THREE.Raycaster();
    }

    const initControls = () => {
        controls = new OrbitControls( camera, renderer.domElement );
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;
        controls.enableDamping = true;
        controls.maxDistance = 30.0;
        controls.minDistance = 7.0;
        controls.maxPolarAngle = 1.4
        controls.update();
    }

    const setCameraPosition = () => {
        camera.position.x = 0;
        camera.position.y = 3;
        camera.position.z = 12;
    }

    const setRenderer = () => {
        let container = document.getElementById(CONTAINERID);
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(renderer.domElement);
    }

    const setResizeEventHandler = () => {
        window.addEventListener("resize", () => {
            let container = document.getElementById(CONTAINERID);
            renderer.setSize(container.offsetWidth, container.offsetHeight);
            camera.aspect = container.offsetWidth / container.offsetHeight;
            camera.updateProjectionMatrix();
        });
    }

    const animateParticles = () => {

        const time = Date.now() * 0.000001;

        for ( let i = 0; i < scene.children.length; i ++ ) {
            const object = scene.children[ i ];
            if ( object instanceof THREE.Points ) {
                object.rotation.y = time * ( i < 4 ? i + 1 : - ( i + 1 ) );
            }
        }
    }

    const createParticles = (numberOfParticles = 10000, numberOfparticleGroups = 5) => {

        const verticies = [];

        for ( let i = 0; i < numberOfParticles; i++ ) {
            const x = THREE.MathUtils.randFloatSpread( 2000 );
            const y = THREE.MathUtils.randFloatSpread( 2000 );
            const z = THREE.MathUtils.randFloatSpread( 3000 );
            verticies.push( x, y, z);
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute( "position", new THREE.Float32BufferAttribute( verticies, 3));

        const material = new THREE.PointsMaterial( { size: 0.5 } );

        for ( let i = 0; i < numberOfparticleGroups; i++ ) {
            const particles = new THREE.Points( geometry, material);
            particles.rotation.x = Math.random() * 6;
            particles.rotation.y = Math.random() * 6;
            particles.rotation.z = Math.random() * 6;
            scene.add(particles);
        }
    }

    const createCube = (texture) => {
        const x = Math.random() * 0.3 + 1;
        const y = 15;
        const z = 0;
        const scale = Math.random() - Math.random() * 0.5 + 1;
        const meshGeometry = new THREE.BoxGeometry(scale, scale, scale);
        const meshMaterial = new THREE.MeshLambertMaterial({
            color: 0x999999,
            map: texture
        });
        const mesh = new THREE.Mesh( meshGeometry, meshMaterial );
        mesh.position.set(x, y, z)
        mesh.updatePhysics = true;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        const shape = new CANNON.Box( new CANNON.Vec3(scale/2, scale/2, scale/2));
        const bodyMaterial = new CANNON.Material();
        const body = new CANNON.Body( { mass: 5, material: bodyMaterial});
        body.addShape(shape);
        body.position.set(x, y, z);
        body.linearDamping = DAMPING;
        body.updatePhysics = true;
        body.isCube = true;
        body.angularVelocity.set(1, 0.5, 1);

        return { mesh: mesh, body: body };
    }

    const createCubes = () => {
        setInterval(() => {
            if (world.bodies.filter(x => x.isCube).length <=  OBJECTLIMIT) {
                const object = createCube(cubeTexture);
                world.addBody(object.body);
                scene.add(object.mesh);
            }
        }, 1000);
    }

    const addLight = (color = 0xFFFFFF, intensity = 1, distance = 1000, x = 0, y = 0, z = 0) => {
        const light = new THREE.SpotLight(color, intensity, distance);
        light.position.set(x,y,z);
        light.penumbra = 1;
        light.castShadow = true;
        light.shadow.mapSize.width = 2560;
        light.shadow.mapSize.height = 2560;
        light.shadow.camera.near = 0.5;
        light.shadow.camera.far = 500;
        light.shadow.focus = 1;
        scene.add( light );
    }

    const updatePhysics = () => {
        world.step(TIMESTEP);
        const bodies = world.bodies.filter(x => x.updatePhysics);
        const meshes = scene.children.filter(x => x.updatePhysics);
        if ( bodies.length === meshes.length) {
            for ( let i = 0; i < meshes.length; i++) {
                const mesh = meshes[i];
                const body = bodies[i];
                mesh.position.copy(body.position);
                mesh.quaternion.copy(body.quaternion);
            }
        }
    }

    const setAnimationLoop = () => {
        renderer.setAnimationLoop(function () {
            animateParticles();
            updatePhysics();
            controls.update();
            renderer.render(scene, camera);
        });
    }

    const createPlane = () =>  {
        const planeGeometry = new THREE.PlaneGeometry(50, 50, 1, 1 ); 
        const planeMaterial = new THREE.MeshPhongMaterial( {
            color: 0x999999,
            shininess: 150,
            map: planeTexture
        } );
        const ground = new THREE.Mesh( planeGeometry, planeMaterial );
        ground.rotation.x = XROTATION;
        ground.receiveShadow = true;

        scene.add( ground );

        const groundShape = new CANNON.Plane();
        const groundMaterial = new CANNON.Material();
        const groundBody = new CANNON.Body({ mass: 0, material: groundMaterial });
        groundBody.quaternion.setFromAxisAngle( new CANNON.Vec3(1, 0, 0), XROTATION);
        groundBody.addShape(groundShape);
        world.add(groundBody);
    }

    const objectsReact = (event) => {
        event.preventDefault();
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        mouse.z = 0.5;
        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects(scene.children, true);

        if (intersects.length > 0) {

            const object = intersects[0].object;

            if (object.updatePhysics) {

                const matchingBody = world.bodies.filter( x =>
                        x.position.x === object.position.x
                        && x.position.y === object.position.y
                        && x.position.z === object.position.z);
                if (matchingBody.length > 0) {
                    const body = matchingBody[0];
                    const x = mouse.x * 10;
                    const y = mouse.y * 10;
                    body.angularVelocity.set(x, y, 0);
                }
            }
        }
    }

    const setMouseMoved = () => {
        window.addEventListener("mousemove", objectsReact);
    }

    const init = async () => {
        const loader = new THREE.TextureLoader();
        planeTexture = await loader.loadAsync('images/PaintedWood005_2K_Displacement.jpg');
        cubeTexture = await loader.loadAsync('images/Asphalt011_1K_Roughness.jpg');
        planeTexture.wrapS = THREE.RepeatWrapping;
        planeTexture.wrapT = THREE.RepeatWrapping;
        planeTexture.repeat.set(3, 2);
        initScene();
        initPhysics();
        createPlane();
        setCameraPosition();
        setRenderer();
        setResizeEventHandler();
        createCubes();
        createParticles(20000, 10);
        addLight(0xFFFFFF, 500, 1000, 0, 10, 10);
        setMouseMoved();
        initControls();
        setAnimationLoop();
    }

    return {
        init: init
    }
})();