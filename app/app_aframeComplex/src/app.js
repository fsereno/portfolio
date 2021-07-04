"use strict;"

import 'aframe';

import '../../js/includes/jsDeps.js';
import "../../sass/includes/styleDeps.scss";
import "../sass/styles.scss";

import React from 'react';
import ReactDOM from 'react-dom';

class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cubes: [
        {
          id: "1",
          position: "-1 0.5 -3",
          color: "#4CC3D9"
        },{
          id: "2",
          position: "0 0.5 -5",
          color: "#4CC3D9"
        },{
          id: "3",
          position: "1 0.5 -3",
          color: "#4CC3D9"
        }
      ]
    };
  }

  getRandomColour() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
  }

  handleColourChangeClick(i) {
    let cubes = this.state.cubes;
    let color = this.getRandomColour();
    if (i <= cubes.length) {
      cubes[i].color = color;
    }
    this.setState({
      cubes: cubes
    });
  }

  render() {
    return (
      <a-scene cursor="rayOrigin: mouse">
        {this.state.cubes.map((cube, i) => {
          return(
            <a-box key={cube.id} onClick={() => this.handleColourChangeClick(i)} position={cube.position} rotation="0 45 0" color={cube.color}></a-box>
          );
        })}
        <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
        <a-sky color="#ECECEC"></a-sky>
        <a-entity id="player" position="0.5 0.5 0">
          <a-entity camera="" look-controls="" position="" rotation="" data-aframe-inspector-original-camera="">
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

ReactDOM.render(<Scene />,document.getElementById('result'));