"use strict;"
//https://www.youtube.com/watch?v=6oFvqLfRnsU
import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import {TimelineMax, TweenMax, CSSPlugin, ScrollToPlugin, Draggable, Elastic, Expo} from "gsap/all";

const helper = function() {

  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  let renderer = new THREE.WebGLRenderer({antialias: true});
  let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
  let cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xF7F7F7 });
  let raycaster = new THREE.Raycaster();
  let mouse = new THREE.Vector2();

  let setCameraPosition = (x = 0, y = 0, z = 0) => {
    camera.position.x = x;
    camera.position.y = y;
    camera.position.z = z;
  }

  let setRenderer = () => {
    renderer.setClearColor("#e5e5e5");
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.xr.enabled = true;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild( renderer.domElement );
  }

  let setResizeEventHandler = () => {
    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });
  }

  let createCubes = (numberOfCubes = 1) => {
    for(var i = 0; i < numberOfCubes; i++) {
      var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
      cube.position.x = (Math.random() - 0.5) * 10;
      cube.position.y = (Math.random() - 0.5) * 10;
      cube.position.z = (Math.random() - 0.5) * 10;
      scene.add(cube);
    }
  }

  let addLight = (color = 0xFFFFFF, intensity = 1, distance = 1000, x = 0, y = 0, z = 0) => {
    var light = new THREE.PointLight(color, intensity, distance);
    light.position.set(x, y, z);
    scene.add( light );
  }

  let cubeReact = (event) => {
    event.preventDefault();

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    let intersects = raycaster.intersectObjects(scene.children, true);

    for (let i = 0; i < intersects.length; i++) {
      let tl = new TimelineMax();
      tl.to(intersects[i].object.scale, 1, {x: 2, ease: Expo.easeOut});
      tl.to(intersects[i].object.scale, .5, {y: .5, ease: Expo.easeOut});
      tl.to(intersects[i].object.position, .5, {x: 2, ease: Expo.easeOut});
      tl.to(intersects[i].object.position, .5, {y: Math.PI*.5, ease: Expo.easeOut}, "=-1.5");
    }
  }

  let setAnimationLoop = () => {
    renderer.setAnimationLoop( function() {
      renderer.render( scene, camera );
    });
  }

  let setCubeReactEventListener = () => {
    window.addEventListener("mousemove", cubeReact);
  }

  let init = () => {
    setCameraPosition(0, 0, 5);
    setRenderer();
    setResizeEventHandler();
    createCubes(15);
    addLight();
    addLight(0xFFFFFF, 2, 1000, 0, 0, 25);
    setAnimationLoop();
    setCubeReactEventListener();
  }

  return {
    init: init
  }
};

let app = helper();
app.init();