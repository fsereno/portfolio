"use strict;"

import '../sass/styles.scss';
import '../../sass/includes/styleDeps.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { SpinnerComponent } from '../../js/modules/react/spinnerComponent.js'
import { ErrorModalComponent } from '../../js/modules/react/errorModalComponent.js';
import { ConfigUtil } from "../../js/modules/utils/configUtil";
import { FormComponent } from "./formComponent";
import { jQueryAjaxUtil } from '../../js/modules/utils/jQueryAjaxUtil';
import { DeploymentModalComponent } from '../../js/modules/react/deploymentModalComponent.js';
import { DeploymentUtil } from '../../js/modules/utils/deploymentUtil';

const CONFIG = ConfigUtil.get();
const APP_CONFIG = ConfigUtil.get("stringSort");
const SORT_ENDPOINT = `${CONFIG.apiRoot}${APP_CONFIG.endpoints.sort}`;

class StringSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: '',
      result: '',
      showSpinner: false,
      showErrorModal: false,
      showDeploymentModal: DeploymentUtil.isNotCloud()
    };
    this.handleValuesChange = this.handleValuesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrorModalClose = this.handleErrorModalClose.bind(this);
    this.handleBeforeAjax = this.handleBeforeAjax.bind(this);
    this.handleFailedAjax = this.handleFailedAjax.bind(this);
    this.handleDeploymentModalClose = this.handleDeploymentModalClose.bind(this);
    this.handleDeploymentModalShow = this.handleDeploymentModalShow.bind(this);
  }

  handleBeforeAjax() {
    this.setState({
      showSpinner: true,
      showPuzzleModal: false
    });
  }

  handleFailedAjax() {
    this.setState({
      showErrorModal: true,
      showSpinner: false
    });
  }

  handleAjax(request) {
    jQueryAjaxUtil.handleAjax(request, DeploymentUtil.isCloud(), this.handleBeforeAjax, this.handleFailedAjax, this.handleDeploymentModalShow);
  }

  handleValuesChange(event) {
    this.setState({values: event.target.value});
  }

  handleSort() {
    let request = {
      url: SORT_ENDPOINT,
      type: "POST",
      contentType: 'application/json;',
      data: JSON.stringify({
        "CommaSeperatedString":this.state.values
      }),
      success: (response) => {
        this.setState({
          values: "",
          result: response.result,
          showSpinner: false
        });
      }
    }
    this.handleAjax(request);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.values.length > 0) {
      this.handleSort();
    }
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
        <DeploymentModalComponent
          show={this.state.showDeploymentModal}
          handleClose={this.handleDeploymentModalClose}
        />
        <div className="row splitter">
          <div className="col-lg-12">
          <h3>Sorted values:</h3>
          <p id="resultOutput" className="lead">{this.state.result}</p>
          </div>
        </div>
        <div className="row splitter">
          <div className="col-lg-12">
            <p>Values to sort: {this.state.values}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <FormComponent
              value={this.state.values}
              onChange={this.handleValuesChange}
              handleSubmit={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('result')).render(<StringSort />);