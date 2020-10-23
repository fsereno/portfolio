"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { PuzzleModule } from '../../js/puzzleModule.js';

const PUZZLE = "4 x 4 - 2 =";
const DISABLED_BTN_CLASS = "disabled";

let _puzzleModule = PuzzleModule(14, "puzzleModal");

class CoffeeMakerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      disabledBtnClass: DISABLED_BTN_CLASS,
    };

    this.handlePuzzleSubmit = this.handlePuzzleSubmit.bind(this);
  }

  handlePuzzleSubmit(event) {
    event.preventDefault();
    if (_puzzleModule.getResult()) {
      this.setState({
        disabledBtnClass: ""
      });
      _puzzleModule.hide();
    }
  }

  componentDidMount() {
    _puzzleModule.show();
  }

  render() {
    return (
      <div>
        <_puzzleModule.Render
          event={this.handlePuzzleSubmit}
          label="First answer this question to unlock the API:"
          puzzle={PUZZLE}
          button="Submit"
          required={true}
          title="Are you a human?"
        />        
        <div class="row">
          <div class="col-lg-6">
            <button type="button" class={`${this.state.disabledBtnClass} btn btn-dark btn-lg mr-2`}>Run Synchronously</button>
            <button type="button" class={`${this.state.disabledBtnClass} btn btn-dark btn-lg mr-2`}>Run Asynchronously</button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <CoffeeMakerApp />,
  document.getElementById('result')
);