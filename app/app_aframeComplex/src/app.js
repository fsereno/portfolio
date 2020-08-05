"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import colorChange from "./colourChangeComponent"

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

  handleClick() {
    this.setState({
      color: this.getRandomColour()
    });
  }

  render() {
    let text = `value: ${this.state.message}; color: #ee1111; height: 13.53; lineHeight: 0.54; width: 2.71; wrapCount: 36.5; xOffset: 1.02; zOffset: 0.51`;
    return (
      <a-scene cursor="rayOrigin: mouse">
        <a-box onClick={() => this.handleClick()} position="-1 0.5 -3" rotation="0 45 0" color={this.state.color} text={text}></a-box>
        <a-sphere color-change position="0 1.25 -5" radius="1.25" color={this.state.color}></a-sphere>
        <a-cylinder color-change position="1 0.75 -3" radius="0.5" height="1.5" color={this.state.color}></a-cylinder>
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