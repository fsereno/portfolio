"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { PuzzleModule } from '../../js/puzzleModule.js';
import { SpinnerModule } from '../../js/spinnerModule.js'
import { ErrorModule } from '../../js/errorModule.js';

const API_ENDPOINT = "https://ro5qqsplje.execute-api.eu-west-2.amazonaws.com/Prod/api/values";
const PUZZLE = "4 x 4 - 2 =";

let _puzzleModule = PuzzleModule(14, "puzzleModal");
let _spinnerModule = SpinnerModule( { hideByDefault : true } );
let _errorModule = ErrorModule("errorModule");

class CoffeeMakerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: [],
      run: `${API_ENDPOINT}/run`,
      runAsync: `${API_ENDPOINT}/runasync`,
      processHeading: ""
    };
    this.handleRun = this.handleRun.bind(this);
    this.handleRunAsync = this.handleRunAsync.bind(this);
    this.handleAjax = this.handleAjax.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
    this.renderProcessHeading = this.renderProcessHeading.bind(this);
  }

  handleRun() {
    this.handleRequest(this.state.run);
  }

  handleRunAsync() {
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
      _spinnerModule.show();
      $.ajax(request)
      .fail(() => {
        _errorModule.show();
        _spinnerModule.hide();
      });
    } else {
        _puzzleModule.show();
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
          puzzle={PUZZLE}
        />
        <div class="row mb-3">
          <div class="col-lg-6">
            <button type="button" class="btn btn-dark mr-2" onClick={this.handleRun}>Run Synchronously</button>
            <button type="button" class="btn btn-dark mr-2" onClick={this.handleRunAsync}>Run Asynchronously</button>
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