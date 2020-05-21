"use strict;"
//https://www.google.com/search?q=three+js+tutorial&oq=three+js+tut&aqs=chrome.0.0j69i57j0l6.3160j0j4&sourceid=chrome&ie=UTF-8#kpvalbx=_StDGXrC-EvCl1fAPj8q38Aw35
import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

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
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render( scene, camera );
});

console.log("test updated again");