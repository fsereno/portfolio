"use strict;"

export const HomeThreeModule = (async () => {

    const { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshLambertMaterial, MeshBasicMaterial, PointLight, Mesh, PCFSoftShadowMap, TextureLoader } = await import("three");

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
        //_renderer.shadowMap.enabled = true;
        //_renderer.shadowMap.type = PCFSoftShadowMap;
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

    let addLight = (color = 0xFFFFFF, intensity = 1, distance = 1000, x = 0, y = 0, z = 0) => {
        var light = new PointLight(color, intensity, distance);
        light.position.set(x, y, z);
        _scene.add(light);
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
        _scene = new Scene();
        _camera = new PerspectiveCamera(75, _container.offsetWidth / _container.offsetHeight, 0.1, 1000);
        _renderer = new WebGLRenderer({ antialias: true, alpha: true });
        _meshGeometry = new BoxGeometry(3, 3, 3);
        _meshMaterial = new MeshBasicMaterial({ wireframe: true });
        _mesh = new Mesh(_meshGeometry, _meshMaterial);
        
        
        //_loader = new TextureLoader();

        /*_loader.load("images/FSLogo.png", (texture) => {
            //_texture = texture;
            //_texture.anisotropy = _renderer.capabilities.getMaxAnisotropy();
            _meshMaterial = new MeshLambertMaterial({ map: _texture });
            _mesh = new Mesh(_meshGeometry, _meshMaterial);

            setCameraPosition();
            setRenderer();
            setResizeEventHandler();
            addCube();
            addLight(0xFFFFFF, 2);
            addLight(0xFFFFFF, 1, 1000, 0, 0, 25);
            setAnimationLoop();
        });*/

        setCameraPosition();
        setRenderer();
        setResizeEventHandler();
        addCube();
        //addLight(0xFFFFFF, 2);
        //addLight(0xFFFFFF, 1, 1000, 0, 0, 25);
        setAnimationLoop();
    }

    return {
        init: init
    }

})();