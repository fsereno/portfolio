"use strict;"

export const HomeThreeModule = (async () => {

    const THREE = await import("three");
    const CANNON = await import("cannon");

    let _containerId;
    let _container;
    let _scene;
    let _camera;
    let _renderer;
    let _meshGeometry;
    let _meshMaterial;
    let _meshGroup;
    let _particularGroup;
    let _sceneGroup;
    let _raycaster;

    var world, mass, body, shape,
         camera, scene, renderer, geometry, material, mesh;

    const _timeStep = 1.0/60.0;
    const _damping = 0.5;

    let initCannon = () => {
        world = new CANNON.World();
        world.gravity.set(0, -5, 0);
        world.broadphase = new CANNON.NaiveBroadphase();
        world.solver.iterations = 10;

        let groundShape = new CANNON.Plane();
        let groundMaterial = new CANNON.Material();
        let groundBody = new CANNON.Body({ mass: 0, material: groundMaterial });
        groundBody.quaternion.setFromAxisAngle( new CANNON.Vec3(1, 0, 0), - Math.PI/2);

        groundBody.addShape(groundShape)

        world.add(groundBody)

    }

    let setCameraPosition = () => {
        _camera.position.x = 0;
        _camera.position.y = 6;
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

    let getRandom = (num = 1) => {
        return - Math.random() * num + Math.random() * num;
    }

    function generateParticle(num, amp = 2) {
        let material = new THREE.MeshBasicMaterial({color:0x74828b});
        let geometry = new THREE.CircleGeometry(0.2,5);

        for (let i = 1; i < num; i++) {
          let scale = 0.001+Math.abs(getRandom(0.03));
          let particular = new THREE.Mesh(geometry, material);

          particular.positionX = getRandom(1);
          particular.positionY = getRandom();
          particular.positionZ = getRandom();

          particular.position.set(particular.positionX,particular.positionY,particular.positionZ);
          particular.rotation.set(getRandom(),getRandom(),getRandom());

          particular.scale.set(scale,scale,scale);
          particular.speedValue = getRandom(1);

          _particularGroup.add(particular);
        }
        _sceneGroup.add(_particularGroup);
        _scene.add(_sceneGroup);
    }

    let createMesh = () => {

        const x = Math.random()*0.3 + 1;
        let mesh = new THREE.Mesh( _meshGeometry, _meshMaterial );
        mesh.position.set(x, 5, 0)

        let shape = new CANNON.Box( new CANNON.Vec3(0.5, 0.5, 0.5));
        const material = new CANNON.Material();
        const body = new CANNON.Body( { mass: 5, material: material});
        body.addShape(shape);

        body.position.set(x, 5, 0);
        body.linearDamping = _damping;

        return { mesh: mesh, body: body };
    }

    let addMeshes = (numberOfMeshes = 1) => {
        for (let i = 0; i < numberOfMeshes; i++) {
            let object = createMesh();
            world.addBody(object.body);
            _meshGroup.add(object.mesh);
        }
        _scene.add(_meshGroup);
    }


    function updatePhysics() {

        world.step(_timeStep);

        let bodies = world.bodies.filter(x => x.mass > 0);
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

            let time = performance.now() * 0.0003;

            for (let i = 0, l = _particularGroup.children.length; i<l; i++) {
                let particle = _particularGroup.children[i];
                particle.rotation.x += particle.speedValue/10;
                particle.rotation.y += particle.speedValue/10;
                particle.rotation.z += particle.speedValue/10;
                particle.position.y = Math.sin(time * particle.positionZ) * particle.positionY;
                particle.position.z = Math.sin(time * particle.positionY) * particle.positionX;
            };

            /*for (let i = 0, l = _meshGroup.children.length; i<l; i++) {
                let mesh = _meshGroup.children[i];

                mesh.rotation.x += 0.008;
                mesh.rotation.y += 0.005;
                mesh.rotation.z += 0.003;

                mesh.position.x = Math.sin(time * mesh.positionZ) * mesh.positionY;
                mesh.position.y = Math.cos(time * mesh.positionX) * mesh.positionZ;
                mesh.position.z = Math.sin(time * mesh.positionY) * mesh.positionX;
            }*/

            _renderer.render(_scene, _camera);
        });
    }

    let init = () => {

        _containerId = "canvasContainer";
        _container = document.getElementById(_containerId);
        _scene = new THREE.Scene();
        _camera = new THREE.PerspectiveCamera(75, _container.offsetWidth / _container.offsetHeight, 1, 500);
        _renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        _meshGeometry = new THREE.BoxGeometry(1, 1, 1);
        _meshMaterial = new THREE.MeshBasicMaterial({ wireframe: true, color: 0x74828b});
        _meshGroup = new THREE.Object3D();
        _particularGroup = new THREE.Object3D();
        _particularGroup.scale.set(7,7,1);
        _sceneGroup = new THREE.Object3D();
        _raycaster = new THREE.Raycaster();

        initCannon();

        setCameraPosition();
        setRenderer();
        setResizeEventHandler();
        addMeshes(50);
        //generateParticle(1000, 1);
        setAnimationLoop();
    }

    return {
        init: init
    }
})();