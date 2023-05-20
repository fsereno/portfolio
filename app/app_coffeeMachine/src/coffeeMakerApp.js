"use strict;"

import React from 'react';
import { DeploymentModalComponent } from '../../js/modules/react/deploymentModalComponent.js';
import { SpinnerComponent } from '../../js/modules/react/spinnerComponent.js'
import { ErrorModalComponent } from '../../js/modules/react/errorModalComponent.js';
import CoffeeMakerComponent from './coffeeMakerComponent';
import { ConfigUtil } from "../../js/modules/utils/configUtil";
import { jQueryAjaxUtil } from '../../js/modules/utils/jQueryAjaxUtil';
import { DeploymentUtil } from '../../js/modules/utils/deploymentUtil';

const CONFIG = ConfigUtil.get();
const APP_CONFIG = ConfigUtil.get("coffeeMachine");
const RUN_ENDPOINT = `${CONFIG.apiRoot}${APP_CONFIG.endpoints.run}`;
const RUN_ASYNC_ENDPOINT = `${CONFIG.apiRoot}${APP_CONFIG.endpoints.runAsync}`;

export default class CoffeeMakerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: [],
      showSpinner: false,
      showDeploymentModal: DeploymentUtil.isNotCloud(),
      showErrorModal: false
    };
    this.handleErrorModalClose = this.handleErrorModalClose.bind(this);
    this.handleBeforeAjax = this.handleBeforeAjax.bind(this);
    this.handleFailedAjax = this.handleFailedAjax.bind(this);
    this.handleRun = this.handleRun.bind(this);
    this.handleRunAsync = this.handleRunAsync.bind(this);
    this.handleAjax = this.handleAjax.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
    this.handleDeploymentModalClose = this.handleDeploymentModalClose.bind(this);
    this.handleDeploymentModalShow = this.handleDeploymentModalShow.bind(this);
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
      DeploymentUtil.isCloud(),
      this.handleBeforeAjax,
      this.handleFailedAjax,
      this.handleDeploymentModalShow);
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

  handleDeploymentModalClose() {
    this.setState({
      showDeploymentModal: false
    })
  }

  handleDeploymentModalShow() {
    this.setState({
      showDeploymentModal: true
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
        <DeploymentModalComponent
          show={this.state.showDeploymentModal}
          handleClose={this.handleDeploymentModalClose}
        >
        </DeploymentModalComponent>
        <CoffeeMakerComponent
          log={this.state.log}
          handleRun={this.handleRun}
          handleRunAsync={this.handleRunAsync}
        />
      </div>
    );
  }
}