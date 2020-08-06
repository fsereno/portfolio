"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';

class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World!",
      color: "#4CC3D9"
    };
  }

  getRandomColour() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
  }

  handleColourChangeClick() {
    this.setState({
      color: this.getRandomColour()
    });
  }

  render() {
    let text = `value: ${this.state.message}; color: #ee1111; height: 13.53; lineHeight: 0.54; width: 2.71; wrapCount: 36.5; xOffset: 1.02; zOffset: 0.51`;
    return (
      <a-scene cursor="rayOrigin: mouse">
        <a-box onClick={() => this.handleColourChangeClick()} position="-1 0.5 -3" rotation="0 45 0" color={this.state.color} text={text}></a-box>
        <a-box onClick={() => this.handleColourChangeClick()} position="0 0.5 -5" rotation="0 45 0" color={this.state.color} text={text}></a-box>
        <a-box onClick={() => this.handleColourChangeClick()} position="1 0.5 -3" rotation="0 45 0" color={this.state.color} text={text}></a-box>
        <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
        <a-sky color="#ECECEC"></a-sky>
        <a-entity id="player" position="0.5 0.5 0">
          <a-entity camera="" look-controls="" position="" rotation="" data-aframe-inspector-original-camera="">
            <a-entity position="-1.2 -0.3 -2">
              <a-text id="score" position="0.60 0 0" value="0" color="green" width="3"></a-text>
              <a-text id="target" position="0.60  0.2 0 0" value="0" color="green" width="3"></a-text>
            </a-entity>
            <a-entity position="-0.1 -0.3 -2">
              <a-text id="timer" position="0.40 0 0" value="" color="green" width="3"></a-text>
            </a-entity>
            <a-entity
              position="0 0 -2"
              geometry="primitive: ring; radiusInner: 0.2; radiusOuter: 0.3;"
              material="color: green; shader: flat"
              cursor="fuse: true;"
              animation__click="startEvents:click; easing:easeInSine; property:scale; from:0.2 0.2 0.2; to:1 1 1; dur:250;"
              animation__fusing="startEvents:fusing; easing:easeOutSine; property:scale; from:1 1 1; to:0.2 0.2 0.2; dur:1500;">
            </a-entity>
            <a-text id="feedbackText" visible="false" position="0 0.5 -2" align="center" value="LEVEL COMPLETE" color="green" width="3"></a-text>
          </a-entity>
        </a-entity>
      </a-scene>
    );
  }
}

ReactDOM.render(
  <Scene />,
  document.getElementById('body')
);