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
    let _meshGroup;
    let _particularGroup;
    let _sceneGroup;

    let _raycaster;
    let _normal;
    let _relativeVelocity;
    let _clock;

    let setCameraPosition = () => {
        _camera.position.x = 1;
        _camera.position.y = 1.1;
        _camera.position.z = 5;
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

    let getRandom = (num = 1) => {
        return - Math.random() * num + Math.random() * num;
    }

    function generateParticle(num, amp = 2) {
        var gmaterial = new THREE.MeshBasicMaterial({color:0xFFFFFF});
        var gparticular = new THREE.CircleGeometry(0.2,5);
      
        for (var i = 1; i < num; i++) {
          var pscale = 0.001+Math.abs(getRandom(0.03));
          var particular = new THREE.Mesh(gparticular, gmaterial);
          particular.position.set(getRandom(amp),getRandom(amp),getRandom(amp));
          particular.rotation.set(getRandom(),getRandom(),getRandom());
          particular.scale.set(pscale,pscale,pscale);
          particular.speedValue = getRandom(1);
      
          _particularGroup.add(particular);
        }

        _sceneGroup.add(_particularGroup);
        _scene.add(_sceneGroup);
    }

    let createMesh = () => {
        let mesh = new THREE.Mesh( _meshGeometry, _meshMaterial );

        mesh.positionX = getRandom()
        mesh.positionY = getRandom();
        mesh.positionZ = getRandom();

        mesh.userData.velocity = new THREE.Vector3();
        mesh.userData.velocity.x = Math.random() * 0.01 - 0.005;
        mesh.userData.velocity.y = Math.random() * 0.01 - 0.005;
        mesh.userData.velocity.z = Math.random() * 0.01 - 0.005;

        var newScaleValue = getRandom(0.3);

        mesh.scale.set(newScaleValue,newScaleValue,newScaleValue);
        mesh.rotation.x = getRandom(180 * Math.PI / 180);
        mesh.rotation.y = getRandom(180 * Math.PI / 180);
        mesh.rotation.z = getRandom(180 * Math.PI / 180);
        mesh.position.set(mesh.positionX, mesh.positionY, mesh.positionZ);

        return mesh;
    }

    let addMeshes = (numberOfMeshes = 1) => {
        for (let i = 0; i < numberOfMeshes; i++) {
            let mesh = createMesh();
            _meshGroup.add(mesh);
        }
        _scene.add(_meshGroup);
    }

    let setAnimationLoop = () => {
        _renderer.setAnimationLoop(function () {
            let time = performance.now() * 0.0003;

            for (var i = 0, l = _particularGroup.children.length; i<l; i++) {
                var newObject = _particularGroup.children[i];
                newObject.rotation.x += newObject.speedValue/10;
                newObject.rotation.y += newObject.speedValue/10;
                newObject.rotation.z += newObject.speedValue/10;
                //---
                //newObject.position.y = Math.sin(time) * 3;
            };
            
            
            for (var i = 0, l = _meshGroup.children.length; i<l; i++) {
                var mesh = _meshGroup.children[i];

                mesh.rotation.x += 0.008;
                mesh.rotation.y += 0.005;
                mesh.rotation.z += 0.003;

                mesh.position.x = Math.sin(time * mesh.positionZ) * mesh.positionY;
                mesh.position.y = Math.cos(time * mesh.positionX) * mesh.positionZ;
                mesh.position.z = Math.sin(time * mesh.positionY) * mesh.positionX;

            }

            /*let intersects = _raycaster.intersectObjects(_meshGroup.children)
        
            if (intersects.length > 0) {
                console.log(intersects[0])
                for (let i = 0; i < intersects.length; i++) {


                    //intersects[ i ].object.material.color.set( 0xff0000 );

                    
                    //intersects[i].position.y = - Math.cos(time * intersects[i].positionX) * mesh.positionZ;
                    //intersects[i].position.z = - Math.sin(time * intersects[i].positionY) * mesh.positionX;

                }
            }*/
            
            _renderer.render(_scene, _camera);
        });
    }

    let addLight = (color = 0xFFFFFF, intensity = 1, distance = 1000, x = 0, y = 0, z = 0) => {
        let light = new THREE.PointLight(color, intensity, distance);
        light.position.set(x, y, z);
        _scene.add( light );
    }

    let init = () => {

        _containerId = "canvasContainer";
        _container = document.getElementById(_containerId);
        _scene = new THREE.Scene();
        _camera = new THREE.PerspectiveCamera(75, _container.offsetWidth / _container.offsetHeight, 1, 500);
        _renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        _meshGeometry = new THREE.BoxGeometry(1, 1, 1);
        _meshMaterial = new THREE.MeshBasicMaterial({ wireframe: true, color: 0x828f97});
        _meshGroup = new THREE.Object3D();
        _meshGroup.scale.set(5,5,2)
        _particularGroup = new THREE.Object3D();
        _sceneGroup = new THREE.Object3D();


        _raycaster = new THREE.Raycaster();
        _normal = new THREE.Vector3();
        _relativeVelocity = new THREE.Vector3();
        _clock = new THREE.Clock();

        setCameraPosition();
        setRenderer();
        setResizeEventHandler();
        addMeshes(1);
        generateParticle(200, 2);
        //addLight();
        setAnimationLoop();
    }

    return {
        init: init
    }
})();