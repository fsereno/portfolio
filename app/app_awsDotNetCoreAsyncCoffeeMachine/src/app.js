"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { KeyGeneratorModule } from '../../typeScript/Modules/keyGeneratorModule/app.js';
import { PuzzleModalModule } from '../../js/modules/react/puzzleModalModule.js';
import { SpinnerModule } from '../../js/modules/react/spinnerModule.js'
import { ErrorModalModule } from '../../js/modules/react/errorModalModule.js';
import { ConfigUtilModule } from "../../js/modules/configUtilModule";

const PUZZLE = "3 + 1 + 1 =";
const APP_CONFIG = ConfigUtilModule.get("awsDotNetCoreAsyncCoffeeMachine");
const RUN_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.run}`;
const RUN_ASYNC_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.runAsync}`;

let _puzzleModalModule = PuzzleModalModule(5);
let _errorModalModule = new ErrorModalModule("errorModule");
let _keyGeneratorModule = new KeyGeneratorModule();

class CoffeeMakerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: [],
      processHeading: "",
      showSpinner: false,
      showPuzzleModal: true,
      showErrorModal: false,
    };
    this.handleRun = this.handleRun.bind(this);
    this.handleRunAsync = this.handleRunAsync.bind(this);
    this.handleAjax = this.handleAjax.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
    this.renderProcessHeading = this.renderProcessHeading.bind(this);
    this.handlePuzzleModalClose = this.handlePuzzleModalClose.bind(this);
    this.handlePuzzleModalShow = this.handlePuzzleModalShow.bind(this);
    this.handleErrorModalClose = this.handleErrorModalClose.bind(this);
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
    if (_puzzleModalModule.isSolved()) {
      this.setState({
        showSpinner: true,
        showPuzzleModal: false
      });
      $.ajax(request)
      .fail(() => {
        this.setState({
          showSpinner: false,
          showErrorModal: true
        });
      });
    } else {
      this.handlePuzzleModalShow();
    }
  }

  renderProcessHeading() {
    if (this.state.log.length > 0) {
      return <h3 className="mb-4">Log of tasks carried out</h3>
    }
    return null;
  }

  handlePuzzleModalClose() {
    this.setState({
      showPuzzleModal: false
    })
  }

  handlePuzzleModalShow() {
    this.setState({
      showPuzzleModal: true
    })
  }

  handleErrorModalClose() {
    this.setState({
      showErrorModal: false
    })
  }

  render() {
    return (
      <div>
        <_errorModalModule.render
          show={this.state.showErrorModal}
          handleClose={this.handleErrorModalClose}
        />
        <SpinnerModule
          show={this.state.showSpinner}
        />
        <_puzzleModalModule.render
          puzzle={PUZZLE}
          show={this.state.showPuzzleModal}
          handleClose={this.handlePuzzleModalClose}
          handleShow={this.handlePuzzleModalShow}
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
                let key = _keyGeneratorModule.generate(item.detail);
                return (
                  <li key={key} className="list-group-item d-flex align-items-center">
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