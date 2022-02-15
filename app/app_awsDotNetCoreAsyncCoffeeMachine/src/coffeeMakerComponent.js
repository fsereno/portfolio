"use strict;"

import React from 'react';
import { KeyGeneratorUtil } from '../../typeScript/Utils/keyGeneratorUtil/dist/index';
import { ConfigUtil } from "../../js/modules/utils/configUtil";
import { jQueryAjaxUtil } from '../../js/modules/utils/jQueryAjaxUtil';

const APP_CONFIG = ConfigUtil.get("awsDotNetCoreAsyncCoffeeMachine");
const RUN_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.run}`;
const RUN_ASYNC_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.runAsync}`;

export default class CoffeeMakerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: [],
      processHeading: "",
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
        });
        this.props.setShowSpinner(false);
      }
    }
    this.handleAjax(request);
  }

  handleAjax(request) {
    jQueryAjaxUtil.handleAjax(
      request,
      this.props.isPuzzleValid,
      this.props.handleBeforeAjax,
      this.props.handleFailedAjax,
      this.props.handlePuzzleModalShow);
  }

  renderProcessHeading() {
    if (this.state.log.length > 0) {
      return <h3 className="mb-4">Log of tasks carried out</h3>
    }
    return null;
  }

  render() {
    return (
      <>
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
                let key = KeyGeneratorUtil.generate(item.detail);
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
      </>
    );
  }
}