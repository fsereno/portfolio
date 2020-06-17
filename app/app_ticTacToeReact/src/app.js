"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';

//https://reactjs.org/tutorial/tutorial.html
//https://codepen.io/gaearon/pen/oWWQNa?editors=0010

class Square extends React.Component {
  render() {
    return (
    <button className="square">
      {/*TO DO */}
    </button>
    );
  }
}

class Board extends React.Component {
  renderSquare() {
    return <Square/>;
  }

  render() {
    const status = "Next Player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <ToDoListForm />,
  document.getElementById('root')
);