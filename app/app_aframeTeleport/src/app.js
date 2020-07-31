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
      <a-scene>
        <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" text={text}></a-box>
        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
        <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
        <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
        <a-sky color="#ECECEC"></a-sky>
      </a-scene>
    );
  }
}

ReactDOM.render(
  <Scene />,
  document.getElementById('body')
);