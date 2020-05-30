"use strict;"
//https://www.youtube.com/watch?v=6oFvqLfRnsU
import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import {TimelineMax, TweenMax, CSSPlugin, ScrollToPlugin, Draggable, Elastic, Expo} from "gsap/all";

// Scene
var scene = new THREE.Scene();

// Camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

// Renderer
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e5e5e5");
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.xr.enabled = true;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild( renderer.domElement );

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();

// VR Button
//document.body.appendChild( VRButton.createButton( renderer ))

// cube
var cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xFFCC00 });
var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );

// light
var light = new THREE.PointLight(0xFFFFFF, 1, 500);
light.position.set(10, 0, 25);

scene.add( cube );
scene.add( light );

renderer.setAnimationLoop( function() {
  //cube.rotation.x += 0.01;
  //cube.rotation.y += 0.01;
  renderer.render( scene, camera );
});

let onMouseMove = (event) => {
  event.preventDefault();

  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  let intersects = raycaster.intersectObjects(scene.children, true);

  for (let i = 0; i < intersects.length; i++) {
    //intersects[i].object.material.color.set(0xff0000);
    let tl = new TimelineMax();
    tl.to(intersects[i].object.scale, 1, {x: 2, ease: Expo.easeOut});
    tl.to(intersects[i].object.scale, .5, {x: .5, ease: Expo.easeOut});
    tl.to(intersects[i].object.position, .5, {x: 2, ease: Expo.easeOut});
    tl.to(intersects[i].object.position, .5, {y: Math.PI*.5, ease: Expo.easeOut}, "=-1.5");
  }
}

window.addEventListener("mousemove", onMouseMove);


console.log("test updated again");