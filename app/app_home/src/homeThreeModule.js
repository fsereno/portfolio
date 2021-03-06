"use strict;"

export const HomeThreeModule = (async () => {

    const THREE = await import("three");
    const CANNON = await import("cannon");
    const DAMPING = 0.9;
    const TIMESTEP = 1.0/60.0;
    const XROTATION = -Math.PI / 2;
    const OBJECT_LIMIT = 20;
    const CONTAINER_ID = "canvasContainer";

    let _container;
    let _scene;
    let _camera;
    let _renderer;
    let _world;
    let _raycaster;
    let _mouse;
    let _fragmentGroup;

    const initPhysics = () => {
        _world = new CANNON.World();
        _world.gravity.set(0, -10, 0);
        _world.broadphase = new CANNON.NaiveBroadphase();
        _world.solver.iterations = 10;
    }

    const initScene = () => {
        _container = document.getElementById(CONTAINER_ID);
        _scene = new THREE.Scene();
        _camera = new THREE.PerspectiveCamera(75, _container.offsetWidth / _container.offsetHeight, 1, 500);
        _mouse = new THREE.Vector3();
        _raycaster = new THREE.Raycaster();
        _fragmentGroup = new THREE.Object3D();
    }

    const setCameraPosition = () => {
        _camera.position.x = 0;
        _camera.position.y = 4;
        _camera.position.z = 10;
    }

    const setRenderer = () => {
        let container = document.getElementById(CONTAINER_ID);
        _renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        _renderer.setSize(container.offsetWidth, container.offsetHeight);
        _renderer.shadowMap.enabled = true;
        _renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(_renderer.domElement);
    }

    const setResizeEventHandler = () => {
        window.addEventListener("resize", () => {
            let container = document.getElementById(CONTAINER_ID);
            _renderer.setSize(container.offsetWidth, container.offsetHeight);
            _camera.aspect = container.offsetWidth / container.offsetHeight;
            _camera.updateProjectionMatrix();
        });
    }

    const animateParticles = () => {

        const time = Date.now() * 0.000001;

        for ( let i = 0; i < _scene.children.length; i ++ ) {

            const object = _scene.children[ i ];

            if ( object instanceof THREE.Points ) {
                object.rotation.y = time * ( i < 4 ? i + 1 : - ( i + 1 ) );
            }
        }
    }

    const createParticles = (numberOfParticles = 10000, numberOfparticleGroups = 5) => {

        let verticies = [];

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
            _scene.add(particles);
        }
    }

    const createFragments = (numberOfFragments) => {
        let geometry = new THREE.CircleGeometry(5, 10);
        let material = new THREE.MeshPhysicalMaterial({color:0xFFFFFF, side:THREE.DoubleSide});

        for ( let i = 0; i < numberOfFragments; i++ ) {

            let scale = THREE.MathUtils.randFloat(0.01, 0.02)
            let fragment = new THREE.Mesh(geometry, material);

            fragment.position.set( THREE.MathUtils.randFloat(-300, 200), THREE.MathUtils.randFloat(5, 50), THREE.MathUtils.randFloat(5, 50));
            fragment.rotation.set( THREE.MathUtils.randFloat(0, 0.05), THREE.MathUtils.randFloat(0, 0.05), THREE.MathUtils.randFloat(0, 0.05));
            fragment.scale.set(scale, scale, scale);
            fragment.speedValue = THREE.MathUtils.randFloat(-0.25, 0.70)
            _fragmentGroup.add(fragment);
        }
        _scene.add(_fragmentGroup)
    }

    const animateFragments = () => {

        for( let i = 0; i < _fragmentGroup.children.length; i++ ) {
            let fragment = _fragmentGroup.children[i];
            fragment.rotation.x += fragment.speedValue/10;
            fragment.rotation.y += fragment.speedValue/10;
            fragment.rotation.z += fragment.speedValue/10;
        };

        _fragmentGroup.rotation.y += 0.004;
    }

    const createCube = () => {
        const x = Math.random() * 0.3 + 1;
        const y = 15;
        const z = 0;
        const scale = Math.random() - Math.random() * 0.5 + 1;
        const meshGeometry = new THREE.BoxGeometry(scale, scale, scale);
        const meshMaterial = new THREE.MeshLambertMaterial({ color: 0x5c6670 });

        let mesh = new THREE.Mesh( meshGeometry, meshMaterial );
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
        if (_world.bodies.filter(x => x.isCube).length <=  OBJECT_LIMIT) {
            let object = createCube();
            _world.addBody(object.body);
            _scene.add(object.mesh);
        }
    }

    const addLight = (color = 0xFFFFFF, intensity = 1, distance = 1000, x = 0, y = 0, z = 0) => {
        let light = new THREE.SpotLight(color, intensity, distance);
        light.position.set(x,y,z);
        light.penumbra = 1;
        light.castShadow = true;
        light.shadow.mapSize.width = 2560;
        light.shadow.mapSize.height = 2560;
        light.shadow.camera.near = 0.5;
        light.shadow.camera.far = 500;
        light.shadow.focus = 1;
        _scene.add( light );
    }

    const updatePhysics = () => {
        _world.step(TIMESTEP);

        let bodies = _world.bodies.filter(x => x.updatePhysics);
        let meshes = _scene.children.filter(x => x.updatePhysics);

        if ( bodies.length === meshes.length) {
            for ( let i = 0; i < meshes.length; i++) {
                let mesh = meshes[i];
                let body = bodies[i];

                mesh.position.copy(body.position);
                mesh.quaternion.copy(body.quaternion);
            }
        }
    }

    const setAnimationLoop = () => {
        _renderer.setAnimationLoop(function () {
            animateParticles();
            updatePhysics();
            animateFragments();
            _renderer.render(_scene, _camera);
        });
    }

    const createPlane = () =>  {
        const planeGeometry = new THREE.PlaneBufferGeometry( 50, 50, 1, 1 );
        const planeMaterial = new THREE.MeshPhongMaterial( { color: 0x2e3338, shininess: 150 } );
        const ground = new THREE.Mesh( planeGeometry, planeMaterial );
        ground.rotation.x = XROTATION;
        ground.receiveShadow = true;

        _scene.add( ground );

        let groundShape = new CANNON.Plane();
        let groundMaterial = new CANNON.Material();
        let groundBody = new CANNON.Body({ mass: 0, material: groundMaterial });
        groundBody.quaternion.setFromAxisAngle( new CANNON.Vec3(1, 0, 0), XROTATION);
        groundBody.addShape(groundShape)

        _world.add(groundBody)
    }

    const objectsReact = (event) => {
        event.preventDefault();

        _mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        _mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        _mouse.z = 0.5;

        _raycaster.setFromCamera(_mouse, _camera);

        let intersects = _raycaster.intersectObjects(_scene.children, true);

        if (intersects.length > 0) {

            let object = intersects[0].object;

            if (object.updatePhysics) {

                let matchingBody = _world.bodies.filter( x =>
                        x.position.x === object.position.x
                        && x.position.y === object.position.y
                        && x.position.z === object.position.z);

                if (matchingBody.length > 0) {

                    let body = matchingBody[0];
                    let x = _mouse.x * 10;
                    let y = _mouse.y * 10;

                    body.angularVelocity.set(x, y, 0);
                }
            }
        }
    }

    const setMouseMoved = () => {
        window.addEventListener("mousemove", objectsReact);
    }

    const init = () => {
        initScene();
        initPhysics();
        createPlane();
        setCameraPosition();
        setRenderer();
        setResizeEventHandler();
        setInterval(createCubes, 1000);
        createParticles(20000, 10);
        createFragments(25);
        addLight(0xFFFFFF, 2, 500, 0, 10, 5);
        setMouseMoved();
        setAnimationLoop();
    }

    return {
        init: init
    }
})();