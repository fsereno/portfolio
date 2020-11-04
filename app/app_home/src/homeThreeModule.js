"use strict;"

export const HomeThreeModule = (async () => {

    const THREE = await import("three");
    const CANNON = await import("cannon");
    const DAMPING = 0.9;
    const TIMESTEP = 1.0/60.0;

    let _containerId;
    let _container;
    let _scene;
    let _camera;
    let _renderer;
    let _world;

    let initPhysics = () => {
        _world = new CANNON.World();
        _world.gravity.set(0, -6, 0);
        _world.broadphase = new CANNON.NaiveBroadphase();
        _world.solver.iterations = 10;
    }

    let initScene = () => {
        _containerId = "canvasContainer";
        _container = document.getElementById(_containerId);
        _scene = new THREE.Scene();
        _camera = new THREE.PerspectiveCamera(75, _container.offsetWidth / _container.offsetHeight, 1, 500);
        _renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    }

    let setCameraPosition = () => {
        _camera.position.x = 0;
        _camera.position.y = 4;
        _camera.position.z = 10;
    }

    let setRenderer = () => {
        let container = document.getElementById(_containerId);
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

    let createObject = () => {
        const x = Math.random()*0.3 + 1;
        const y = Math.random()*1.0 + 1;
        const z = Math.random()*0.2 + 1;

        const scale = Math.random() + 0.4;

        let meshGeometry = new THREE.BoxGeometry(scale, scale, scale);
        let meshMaterial = new THREE.MeshLambertMaterial({color: 0x343a40});
        let mesh = new THREE.Mesh( meshGeometry, meshMaterial );
        mesh.position.set(x, y, z)
        mesh.updatePhysics = true;
        mesh.castShadow = true;

        let shape = new CANNON.Box( new CANNON.Vec3(scale/2, scale/2, scale/2));
        const bodyMaterial = new CANNON.Material();
        const body = new CANNON.Body( { mass: 5, material: bodyMaterial});
        body.addShape(shape);

        body.position.set(x, y, z);
        body.linearDamping = DAMPING;
        body.updatePhysics = true;

        return { mesh: mesh, body: body };
    }

    let addLight = (color = 0xFFFFFF, intensity = 1, distance = 1000, x = 0, y = 0, z = 0) => {
        var light = new THREE.SpotLight(color, intensity, distance);
        light.position.set(x,y,z);
        light.castShadow = true;
        light.frustumCulled
        light.shadow = new THREE.LightShadow( new THREE.PerspectiveCamera( 50, 1, 10, 2500 ) );
        light.shadow.bias = 0.0001;
        light.shadow.mapSize.width = 2048;
        light.shadow.mapSize.height = 1024;
        _scene.add( light );
    }

    let addObjects = (numberOfObjects = 1) => {
        for (let i = 0; i < numberOfObjects; i++) {
            let object = createObject();
            _world.addBody(object.body);
            _scene.add(object.mesh);
        }
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
            updatePhysics();
            _renderer.render(_scene, _camera);
        });
    }

    let addGround = () =>  {
        const ground = new THREE.Mesh(
            new THREE.PlaneBufferGeometry( 50, 10, 1, 1 ),
            new THREE.MeshPhongMaterial( { color: 0x2e3338, shininess: 150 } )
        );
        ground.rotation.x = - Math.PI / 2;
        ground.receiveShadow = true;
        _scene.add( ground );

        let groundShape = new CANNON.Plane();
        let groundMaterial = new CANNON.Material();
        let groundBody = new CANNON.Body({ mass: 0, material: groundMaterial });
        groundBody.quaternion.setFromAxisAngle( new CANNON.Vec3(1, 0, 0), - Math.PI/2);
        groundBody.addShape(groundShape)

        _world.add(groundBody)
    }

    let init = () => {
        initScene();
        initPhysics();
        addGround();
        setCameraPosition();
        setRenderer();
        setResizeEventHandler();
        addObjects(50);
        addLight(0xFFFFFF, 2, 1000, 10, 20, 10);
        setAnimationLoop();
    }

    return {
        init: init
    }
})();