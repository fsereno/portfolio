"use strict;"

export const HomeThreeModule = (async () => {

    const THREE = await import("three");
    const CANNON = await import("cannon");
    const DAMPING = 0.9;
    const TIMESTEP = 1.0/60.0;
    const XROTATION = -Math.PI / 2;
    const ANGULAR_VELOCITY = 2;
    const OBJECT_LIMIT = 20;

    let _containerId;
    let _container;
    let _scene;
    let _camera;
    let _renderer;
    let _world;
    let _raycaster;
    let _mouse;
    let _particleGroup;
    let _mouseXPositions = [];
    let _mouseYPositions = [];

    let initPhysics = () => {
        _world = new CANNON.World();
        _world.gravity.set(0, -10, 0);
        _world.broadphase = new CANNON.NaiveBroadphase();
        _world.solver.iterations = 10;
    }

    let initScene = () => {
        _containerId = "canvasContainer";
        _container = document.getElementById(_containerId);
        _scene = new THREE.Scene();
        _camera = new THREE.PerspectiveCamera(75, _container.offsetWidth / _container.offsetHeight, 1, 500);
        _mouse = new THREE.Vector3();
        _raycaster = new THREE.Raycaster();
        _particleGroup = new THREE.Object3D();
    }

    let setCameraPosition = () => {
        _camera.position.x = 0;
        _camera.position.y = 4;
        _camera.position.z = 10;
    }

    let setRenderer = () => {
        let container = document.getElementById(_containerId);
        _renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        _renderer.setSize(container.offsetWidth, container.offsetHeight);
        _renderer.shadowMap.enabled = true;
        _renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(_renderer.domElement);
    }

    let setResizeEventHandler = () => {
        window.addEventListener("resize", () => {
            let container = document.getElementById(_containerId);
            _renderer.setSize(container.offsetWidth, container.offsetHeight);
            _camera.aspect = container.offsetWidth / container.offsetHeight;
            _camera.updateProjectionMatrix();
        });
    }

    let animateParticles = () => {
        _particleGroup.rotation.x += 0.01/50;
        _particleGroup.rotation.y += 0.01/50;
        _particleGroup.rotation.z += 0.01/100;
    }

    let createParticles = () => {

        let verticies = [];
        const particles = 15000;

        for (let i = 0; i < particles; i++) {
            const x = THREE.MathUtils.randFloatSpread( 2000 );
            const y = THREE.MathUtils.randFloatSpread( 2000 );
            const z = THREE.MathUtils.randFloatSpread( 3000 );

            verticies.push( x, y, z);
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute( "position", new THREE.Float32BufferAttribute( verticies, 3));

        const material = new THREE.PointsMaterial( { color: 0xffffff } );
        const points = new THREE.Points( geometry, material);

        _particleGroup.add(points);
        _scene.add(_particleGroup);
    }

    let createObject = () => {
        const x = Math.random() * 0.3 + 1;
        const y = 15;
        const z = 0;
        const scale = Math.random() - Math.random() * 0.5 + 1;

        let meshGeometry = new THREE.BoxGeometry(scale, scale, scale);
        let meshMaterial = new THREE.MeshLambertMaterial({color: 0x5c6670});
        let mesh = new THREE.Mesh( meshGeometry, meshMaterial );
        mesh.position.set(x, y, z)
        mesh.updatePhysics = true;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        let shape = new CANNON.Box( new CANNON.Vec3(scale/2, scale/2, scale/2));
        const bodyMaterial = new CANNON.Material();
        const body = new CANNON.Body( { mass: 5, material: bodyMaterial});
        body.addShape(shape);

        body.position.set(x, y, z);
        body.linearDamping = DAMPING;
        body.updatePhysics = true;
        body.angularVelocity.set(1, 0.5, 1);

        return { mesh: mesh, body: body };
    }

    let addObjects = () => {
        if (_world.bodies.length <=  OBJECT_LIMIT) {
            let object = createObject();
            _world.addBody(object.body);
            _scene.add(object.mesh);
        }
    }

    let addLight = (color = 0xFFFFFF, intensity = 1, distance = 1000, x = 0, y = 0, z = 0) => {
        var light = new THREE.SpotLight(color, intensity, distance);
        light.position.set(x,y,z);
        light.castShadow = true;
        light.shadow = new THREE.LightShadow( new THREE.PerspectiveCamera( 100, 1, 10, 2500 ) );
        light.shadow.bias = 0.0001;
        light.shadow.mapSize.width = 2560;
        light.shadow.mapSize.height = 2560;
        _scene.add( light );
    }

    let updatePhysics = () => {
        _world.step(TIMESTEP);

        let bodies = _world.bodies.filter(x => x.updatePhysics);
        let meshes = _scene.children.filter(x => x.updatePhysics);

        for (let i = 0, j = 0; i < meshes.length, j < bodies.length; i++, j++) {
            let mesh = meshes[i];
            let body = bodies[i];

            mesh.position.copy(body.position);
            mesh.quaternion.copy(body.quaternion);
        }
    }

    let setAnimationLoop = () => {
        _renderer.setAnimationLoop(function () {
            animateParticles();
            updatePhysics();
            _renderer.render(_scene, _camera);
        });
    }

    let addGround = () =>  {
        const ground = new THREE.Mesh(
            new THREE.PlaneBufferGeometry( 50, 50, 1, 1 ),
            new THREE.MeshPhongMaterial( { color: 0x2e3338, shininess: 150 } )
        );
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

    let objectsReact = (event) => {
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
                    let x = 0;
                    let y = 0;

                    _mouseXPositions.push(_mouse.x);
                    _mouseYPositions.push(_mouse.y);

                    if (_mouseXPositions.length === 2) {
                        if (_mouseXPositions[1] > _mouseXPositions[0]) {
                            
                            x = ANGULAR_VELOCITY;
                        } else if (_mouseXPositions[1] < _mouseXPositions[0]) {
                            
                            x = -ANGULAR_VELOCITY;
                        }
                        _mouseXPositions = [];
                    }

                    if (_mouseYPositions.length === 2) {
                        if (_mouseYPositions[1] > _mouseYPositions[0]) {
                            y = ANGULAR_VELOCITY;
                        } else if (_mouseYPositions[1] < _mouseYPositions[0]) {
                            y = -ANGULAR_VELOCITY;
                        }
                        _mouseYPositions = [];
                    }
                    body.angularVelocity.set(x, y, 0);
                }
            }
        }
    }

    let setMouseMoved = () => {
        window.addEventListener("mousemove", objectsReact);
    }

    let init = () => {
        initScene();
        initPhysics();
        addGround();
        setCameraPosition();
        setRenderer();
        setResizeEventHandler();
        setInterval(addObjects, 1000);
        createParticles();
        addLight(0xFFFFFF, 2, 1000, 10, 20, 10);
        setMouseMoved();
        setAnimationLoop();
    }

    return {
        init: init
    }
})();