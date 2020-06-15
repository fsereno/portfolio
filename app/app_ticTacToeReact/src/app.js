"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';

//https://reactjs.org/tutorial/tutorial.html

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

      // here

    )
  }


}

ReactDOM.render(
  <ToDoListForm />,
  document.getElementById('root')
);