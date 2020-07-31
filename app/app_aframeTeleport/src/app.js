"use strict;"

//Looking at now including the below components to allow teleportation on multiple devices
//https://www.npmjs.com/package/aframe-teleport-controls
//https://www.npmjs.com/package/aframe-cursor-teleport-component

import React from 'react';
import ReactDOM from 'react-dom';

class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World!"
    };
  }

  render() {
    let text = `value: ${this.state.message}; color: #ee1111; height: 13.53; lineHeight: 0.54; width: 2.71; wrapCount: 36.5; xOffset: 1.02; zOffset: 0.51`;
    return (
    <a-scene cursor="rayOrigin: mouse" raycaster="objects: .clickable" renderer="colorManagement: true;">
      <a-entity id="cameraRig" position="0 0 0" cursor-teleport="cameraRig: #cameraRig; cameraHead: #head; collisionEntities: .collision; ignoreEntities: .clickable">
        <a-entity id="head" position="0 1.52 0" camera look-controls="reverseMouseDrag: true"></a-entity>
        <a-entity
          laser-controls="hand: left"
          raycaster="objects: .clickable; far: 100"
          line="color: red; opacity: 0.75"
          teleport-controls="
            collisionEntities: .collision;
            cameraRig: #cameraRig;
            teleportOrigin: #head;
            button: thumbstick;
            curveShootingSpeed: 8">
        </a-entity>
        <a-entity
          laser-controls="hand: right"
          raycaster="objects: .clickable"
          line="color: red; opacity: 0.75"
          teleport-controls="
            collisionEntities: .collision;
            cameraRig: #cameraRig;
            teleportOrigin: #head;
            button: thumbstick;
            curveShootingSpeed: 8">
        </a-entity>
      </a-entity>
      <a-entity class="collision" position="0 -.05 0" geometry="primitive: box; width: 8; height: .1; depth: 8" material="color: #ffcc80"></a-entity>
      <a-entity class="collision" position="2 .75 2" geometry="primitive: box; width: 2; height: .1; depth: 2" material="color: #ff1744"></a-entity>
      <a-entity class="collision" position="2 1.5 -2" geometry="primitive: box; width: 2; height: .1; depth: 2" material="color: #80cbc4"></a-entity>
      <a-entity class="collision" position="-2 2.25 -2" geometry="primitive: box; width: 2; height: .1; depth: 2" material="color: #9ccc65"></a-entity>
      <a-entity class="collision" position="-2 3 2" geometry="primitive: box; width: 2; height: .1; depth: 2" material="color: #3f51b5"></a-entity>
      <a-entity class="collision" position="-2 -1 2" geometry="primitive: sphere; radius: 2;" material="color: #f55d42"></a-entity>
      <a-entity class="clickable" geometry="primitive: octahedron" scale=".2 .2 .2" position="-.8 1 -1.5" material="color: #3f51b5"></a-entity>
      <a-entity class="clickable" geometry="primitive: octahedron" scale=".2 .2 .2" position="0 1.2 -1.5" material="color: #3f51b5"></a-entity>
      <a-entity class="clickable" geometry="primitive: octahedron" scale=".2 .2 .2" position=".8 1 -1.5" material="color: #3f51b5"></a-entity>
      <a-sky color="#e1f5fe"></a-sky>
    </a-scene>
    );
  }
}

ReactDOM.render(
  <Scene />,
  document.getElementById('body')
);