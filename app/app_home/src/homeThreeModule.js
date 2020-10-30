"use strict;"

export const HomeThreeModule = (async () => {

    const THREE = await import("three");

    let _containerId;
    let _container;
    let _scene;
    let _camera;
    let _renderer;
    let _meshGeometry;
    let _texture;
    let _meshMaterial;
    let _mesh;
    let _loader;

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

    let addCube = () => {
        _mesh.position.x = 1;
        _mesh.position.y = 1
        _mesh.position.z = 1
        _scene.add(_mesh);
    }

    let setAnimationLoop = () => {
        _renderer.setAnimationLoop(function () {
            let time = 0.025;
            _mesh.rotation.x += time * 0.5;
            _mesh.rotation.y += time * 0.5;
            _renderer.render(_scene, _camera);
        });
    }

    let init = () => {

        _containerId = "canvasContainer";
        _container = document.getElementById(_containerId);
        _scene = new THREE.Scene();
        _camera = new THREE.PerspectiveCamera(75, _container.offsetWidth / _container.offsetHeight, 0.1, 1000);
        _renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        _meshGeometry = new THREE.BoxGeometry(3, 3, 3);
        _meshMaterial = new THREE.MeshBasicMaterial({ wireframe: true });
        _mesh = new THREE.Mesh(_meshGeometry, _meshMaterial);

        setCameraPosition();
        setRenderer();
        setResizeEventHandler();
        addCube();
        setAnimationLoop();
    }

    return {
        init: init
    }

})();