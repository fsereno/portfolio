"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { PuzzleModule } from '../../js/puzzleModule.js';
import { SpinnerModule } from '../../js/spinnerModule.js'
import { ErrorModule } from '../../js/errorModule.js';

const API_ENDPOINT = "https://ro5qqsplje.execute-api.eu-west-2.amazonaws.com/Prod/api/values";
const PUZZLE = "4 x 4 - 2 =";
const DISABLED_BTN_CLASS = "disabled";

let _puzzleModule = PuzzleModule(14, "puzzleModal");
let _spinnerModule = SpinnerModule( { hideByDefault : true } );
let _errorModule = ErrorModule("errorModule");

class CoffeeMakerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: [],//[{"detail":"Start boiling the kettle","thread":11},{"detail":"Get coffee from cupboard","thread":11},{"detail":"Pack coffee into cafetiere","thread":11},{"detail":"Get cup from cupboard","thread":11},{"detail":"Get milk from fridge","thread":11},{"detail":"Pour milk into cup","thread":11},{"detail":"Put cup in microwave","thread":11},{"detail":"Start microwaving cup","thread":11},{"detail":"Finished boiling the kettle","thread":11},{"detail":"Pour boiling water into cafetiere","thread":11},{"detail":"Brew the coffee","thread":11},{"detail":"Finished microwaving cup","thread":9},{"detail":"Get cup from microwave","thread":9},{"detail":"Plunge cafetiere","thread":9},{"detail":"Pour coffee into cup","thread":9},{"detail":"Stir coffee","thread":9},{"detail":"Drink coffee","thread":9}],
      disabledBtnClass: DISABLED_BTN_CLASS,
      run: `${API_ENDPOINT}/run`,
      runAsync: `${API_ENDPOINT}/runasync`,
      processHeading: ""
    };

    this.handlePuzzleSubmit = this.handlePuzzleSubmit.bind(this);
    this.handleRun = this.handleRun.bind(this);
    this.handleRunAsync = this.handleRunAsync.bind(this);
    this.handleAjax = this.handleAjax.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
    this.renderProcessHeading = this.renderProcessHeading.bind(this);
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

  handleRun() {
    _spinnerModule.show();
    this.handleRequest(this.state.run);
  }

  handleRunAsync() {
    _spinnerModule.show();
    this.handleRequest(this.state.runAsync);
  }

  handleRequest(endpoint) {
    let request = {
      url: endpoint,
      type: "GET",
      success: (response) => {
        this.setState({
          log: response,
          processHeading: "Log of tasks carried out"
        });
      }
    }
    this.handleAjax(request);
  }

  handleAjax(request) {
    if (_puzzleModule.getResult()) {
      $.ajax(request)
      .fail(() => {
        _errorModule.show();
        _spinnerModule.hide();
      });
    }
  }

  renderProcessHeading() {
    if (this.state.log.length > 0) {
      return <h3 class="mb-4">Log of tasks carried out</h3>
    }
    return null;
  }

  componentDidMount() {
    _puzzleModule.show();
  }

  render() {
    _spinnerModule.hide();
    return (
      <div>
        <_errorModule.Render/>
        <_spinnerModule.Render/>
        <_puzzleModule.Render
          event={this.handlePuzzleSubmit}
          label="First answer this question to unlock the API:"
          puzzle={PUZZLE}
          button="Submit"
          required={true}
          title="Are you a human?"
        />
        <div class="row mb-3">
          <div class="col-lg-6">
            <button type="button" class={`${this.state.disabledBtnClass} btn btn-dark mr-2`} onClick={this.handleRun}>Run Synchronously</button>
            <button type="button" class={`${this.state.disabledBtnClass} btn btn-dark mr-2`} onClick={this.handleRunAsync}>Run Asynchronously</button>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <p class="text-muted">
              (Processing is delayed for this demonstration)
            </p>
          <this.renderProcessHeading/>
            <ul class="list-group">
              {this.state.log.map((item, index) => {
                return (
                  <li class="list-group-item d-flex align-items-center">
                      <span class="badge badge-primary badge-pill mr-3 bg-dark">{index+1}</span>
                      {item.detail}
                  </li>
                );
              })}
            </ul>
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