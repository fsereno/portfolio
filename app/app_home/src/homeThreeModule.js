"use strict;"

export const HomeThreeModule = (async () => {

    const THREE = await import("three");

    let _containerId;
    let _container;
    let _scene;
    let _camera;
    let _renderer;
    let _meshGeometry;
    let _meshMaterial;
    let _mesh;

    let setCameraPosition = () => {
        _camera.position.x = 1;
        _camera.position.y = 1.1;
        _camera.position.z = 5;
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

    let createMesh = (x, y, z) => {
        let geometry = Math.random() + 2;
        let meshGeometry = new THREE.BoxGeometry(1, 1, 1);
        let mesh = new THREE.Mesh( meshGeometry, _meshMaterial );
        mesh.position.x = x || (Math.random() - 0.5) * 10;
        mesh.position.y = y || (Math.random() - 0.5) * 10;
        mesh.position.z = z || (Math.random() - 0.5) * 10;
        return mesh;
    }

    let addMeshes = (numberOfMeshes = 1) => {
        for (let i = 0; i < numberOfMeshes; i++) {
            if (_scene.children.length === 0) {
                let mesh = createMesh();
                _scene.add(mesh);
            } else {

                
                _scene.traverse(node => {
                    if (node instanceof THREE.Mesh) {

                        let mesh = createMesh();
                        
                        if ( mesh.position.x !== node.position.x
                            && mesh.position.y !== node.position.y
                            && mesh.position.z !== node.position.z) {

                             _scene.add(mesh);
                        }
                    }
                });
            }
        }
    }

    let setAnimationLoop = () => {
        _renderer.setAnimationLoop(function () {
            let time = 0.025;

            _scene.traverse(node => {
                if (node instanceof THREE.Mesh ) {
                    node.rotation.x += time * 0.5;
                    node.rotation.y += time * 0.5;
                }
            });
            _renderer.render(_scene, _camera);
        });
    }

    let init = () => {

        _containerId = "canvasContainer";
        _container = document.getElementById(_containerId);
        _scene = new THREE.Scene();
        _camera = new THREE.PerspectiveCamera(75, _container.offsetWidth / _container.offsetHeight, 0.1, 1000);
        _renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        //_meshGeometry = new THREE.BoxGeometry(1, 1, 1);
        _meshMaterial = new THREE.MeshBasicMaterial({ wireframe: true, color: 0x000000});
        //_mesh = new THREE.Mesh(_meshGeometry, _meshMaterial);

        setCameraPosition();
        setRenderer();
        setResizeEventHandler();
        addMeshes(3);
        setAnimationLoop();

    }

    return {
        init: init
    }

})();