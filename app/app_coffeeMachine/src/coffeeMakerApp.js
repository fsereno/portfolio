"use strict;"

import React from 'react';
import { HealthCheckModalComponent } from '../../js/modules/react/healthCheckModalComponent.js';
import { SpinnerComponent } from '../../js/modules/react/spinnerComponent.js'
import { ErrorModalComponent } from '../../js/modules/react/errorModalComponent.js';
import CoffeeMakerComponent from './coffeeMakerComponent';
import { ConfigUtil } from "../../js/modules/utils/configUtil";
import { jQueryAjaxUtil } from '../../js/modules/utils/jQueryAjaxUtil';

const CONFIG = ConfigUtil.get();
const APP_CONFIG = ConfigUtil.get("coffeeMachine");
const RUN_ENDPOINT = `${CONFIG.apiRoot}${APP_CONFIG.endpoints.base}${APP_CONFIG.endpoints.run}`;
const RUN_ASYNC_ENDPOINT = `${CONFIG.apiRoot}${APP_CONFIG.endpoints.base}${APP_CONFIG.endpoints.runAsync}`;
const HEALTH_CHECK = `${CONFIG.apiRoot}${APP_CONFIG.endpoints.base}${CONFIG.apiHealthCheck}`;

export default class CoffeeMakerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: [],
      showSpinner: false,
      showHealthCheckModal: true,
      showErrorModal: false
    };
    this.handleErrorModalClose = this.handleErrorModalClose.bind(this);
    this.handleBeforeAjax = this.handleBeforeAjax.bind(this);
    this.handleFailedAjax = this.handleFailedAjax.bind(this);
    this.handleRun = this.handleRun.bind(this);
    this.handleRunAsync = this.handleRunAsync.bind(this);
    this.handleAjax = this.handleAjax.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
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
    jQueryAjaxUtil.handleAjax(
      request,
      true,
      this.handleBeforeAjax,
      this.handleFailedAjax);
  }

  handleBeforeAjax() {
    this.setState({
      showSpinner: true
    });
  }

  handleFailedAjax() {
    this.setState({
      showErrorModal: true,
      showSpinner: false
    });
  }

  handleErrorModalClose() {
    this.setState({
      showErrorModal: false
    })
  }

  render() {
    return (
      <div>
        <ErrorModalComponent
          id="errorModal"
          show={this.state.showErrorModal}
          handleClose={this.handleErrorModalClose}
        />
        <SpinnerComponent
          show={this.state.showSpinner}
        />
        <HealthCheckModalComponent
          endpoint={HEALTH_CHECK}
        >
        </HealthCheckModalComponent>
        <CoffeeMakerComponent
          log={this.state.log}
          handleRun={this.handleRun}
          handleRunAsync={this.handleRunAsync}
        />
      </div>
    );
  }
}