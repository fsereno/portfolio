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
    let _meshGroup;
    let _world;

    let initPhysics = () => {
        _world = new CANNON.World();
        _world.gravity.set(0, -5, 0);
        _world.broadphase = new CANNON.NaiveBroadphase();
        _world.solver.iterations = 10;

        let groundShape = new CANNON.Plane();
        let groundMaterial = new CANNON.Material();
        let groundBody = new CANNON.Body({ mass: 0, material: groundMaterial });
        groundBody.quaternion.setFromAxisAngle( new CANNON.Vec3(1, 0, 0), - Math.PI/2);
        groundBody.addShape(groundShape)

        _world.add(groundBody)
    }

    let setCameraPosition = () => {
        _camera.position.x = 0;
        _camera.position.y = 5;
        _camera.position.z = 10;
    }

    let setRenderer = () => {
        let container = document.getElementById(_containerId);
        _renderer.setSize(container.offsetWidth, container.offsetHeight);
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
        const y = 10;
        const z = 0//Math.random()*0.2;
        
        let meshGeometry = new THREE.BoxGeometry(1, 1, 1);
        let meshMaterial = new THREE.MeshBasicMaterial({ wireframe: true, color: 0x74828b});
        let mesh = new THREE.Mesh( meshGeometry, meshMaterial );
        mesh.position.set(x, y, z)

        let shape = new CANNON.Box( new CANNON.Vec3(0.5, 0.5, 0.5));
        const bodyMaterial = new CANNON.Material();
        const body = new CANNON.Body( { mass: 5, material: bodyMaterial});
        body.addShape(shape);

        body.position.set(x, y, z);
        body.linearDamping = DAMPING;

        return { mesh: mesh, body: body };
    }

    let addObjects = (numberOfObjects = 1) => {
        for (let i = 0; i < numberOfObjects; i++) {
            let object = createObject();
            _world.addBody(object.body);
            _meshGroup.add(object.mesh);
        }
        _scene.add(_meshGroup);
    }

    let updatePhysics = () => {
        _world.step(TIMESTEP);

        let bodies = _world.bodies.filter(x => x.mass > 0);
        let meshes = _meshGroup.children;

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

    let init = () => {

        _containerId = "canvasContainer";
        _container = document.getElementById(_containerId);
        _scene = new THREE.Scene();
        _camera = new THREE.PerspectiveCamera(75, _container.offsetWidth / _container.offsetHeight, 1, 500);
        _renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        _meshGroup = new THREE.Object3D();

        initPhysics();
        setCameraPosition();
        setRenderer();
        setResizeEventHandler();
        addObjects(50);
        setAnimationLoop();
    }

    return {
        init: init
    }
})();