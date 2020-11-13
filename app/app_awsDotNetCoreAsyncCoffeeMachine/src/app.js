"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { PuzzleModule } from '../../js/puzzleModule.js';
import { SpinnerModule } from '../../js/spinnerModule.js'
import { ErrorModule } from '../../js/errorModule.js';
import { ConfigUtilModule } from "../../js/configUtilModule";

const PUZZLE = "4 x 4 - 2 =";
const APP_CONFIG = ConfigUtilModule.get("awsDotNetCoreAsyncCoffeeMachine");
const RUN_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.run}`;
const RUN_ASYNC_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.runAsync}`;

let _puzzleModule = PuzzleModule(14, "puzzleModal");
let _errorModule = ErrorModule("errorModule");

class CoffeeMakerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: [],
      processHeading: "",
      showSpinner: false
    };
    this.handleRun = this.handleRun.bind(this);
    this.handleRunAsync = this.handleRunAsync.bind(this);
    this.handleAjax = this.handleAjax.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
    this.renderProcessHeading = this.renderProcessHeading.bind(this);
  }

  handleRun() {
    this.handleRequest(RUN_ENDPOINT);
  }

  handleRunAsync() {
    this.handleRequest(RUN_ASYNC_ENDPOINT);
  }

  handleRequest(endpoint) {
    let request = {
      url: endpoint,
      type: "GET",
      success: (response) => {
        this.setState({
          log: response,
          processHeading: "Log of tasks carried out",
          showSpinner: false
        });
      }
    }
    this.handleAjax(request);
  }

  handleAjax(request) {
    if (_puzzleModule.getResult()) {
      this.setState({
        showSpinner: true
      });
      $.ajax(request)
      .fail(() => {
        _errorModule.show();
        this.setState({
          showSpinner: false
        });
      });
    } else {
        _puzzleModule.show();
    }
  }

  renderProcessHeading() {
    if (this.state.log.length > 0) {
      return <h3 className="mb-4">Log of tasks carried out</h3>
    }
    return null;
  }

  componentDidMount() {
    _puzzleModule.show();
  }

  render() {
    return (
      <div>
        <_errorModule.Render/>
        <SpinnerModule
          show={this.state.showSpinner}
        />
        <_puzzleModule.Render
          puzzle={PUZZLE}
        />
        <div className="row mb-3">
          <div className="col-lg-6">
            <button id="runSync" type="button" className="btn btn-dark mr-2" onClick={this.handleRun}>Run Sync</button>
            <button id="runAsync" type="button" className="btn btn-dark mr-2" onClick={this.handleRunAsync}>Run Async</button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <p className="text-muted">
              (Processing is delayed for this demonstration)
            </p>
          <this.renderProcessHeading/>
            <ul id="resultOutput" className="list-group">
              {this.state.log.map((item, index) => {
                return (
                  <li className="list-group-item d-flex align-items-center">
                      <span className="badge badge-primary badge-pill mr-3 bg-dark">{index+1}</span>
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