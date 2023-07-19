"use strict;"

import '../sass/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { SpinnerComponent } from '../../js/modules/react/spinnerComponent.js'
import { ErrorModalComponent } from '../../js/modules/react/errorModalComponent.js';
import { ConfigUtil } from "../../js/modules/utils/configUtil";
import { FormComponent } from './formComponent';
import { jQueryAjaxUtil } from '../../js/modules/utils/jQueryAjaxUtil';
import { DeploymentModalComponent } from '../../js/modules/react/deploymentModalComponent.js';
import { DeploymentUtil } from '../../js/modules/utils/deploymentUtil';

const CONFIG = ConfigUtil.get();
const APP_CONFIG = ConfigUtil.get("dataStructures");
const ADD_QUEUE_ITEM_ENDPOINT = `${CONFIG.apiRoot}${APP_CONFIG.endpoints.addQueueItem}`;
const REMOVE_QUEUE_ITEM_ENDPOINT = `${CONFIG.apiRoot}${APP_CONFIG.endpoints.removeQueueItem}`;
const ADD_STACK_ITEM_ENDPOINT = `${CONFIG.apiRoot}${APP_CONFIG.endpoints.addStackItem}`;
const REMOVE_STACK_ITEM_ENDPOINT = `${CONFIG.apiRoot}${APP_CONFIG.endpoints.removeStackItem}`;

console.log(DeploymentUtil.isNotCloud());

class DataStructuresApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queue: [],
      stack: [],
      showSpinner: false,
      showDeploymentModal: DeploymentUtil.isNotCloud(),
      showErrorModal: false
    };

    this.handleQueueAdd = this.handleQueueAdd.bind(this);
    this.handleQueueRemove= this.handleQueueRemove.bind(this);
    this.handleStackAdd = this.handleStackAdd.bind(this);
    this.handleStackRemove = this.handleStackRemove.bind(this);
    this.handleDeploymentModalClose = this.handleDeploymentModalClose.bind(this);
    this.handleDeploymentModalShow = this.handleDeploymentModalShow.bind(this);
    this.handleErrorModalClose = this.handleErrorModalClose.bind(this);
    this.handleBeforeAjax = this.handleBeforeAjax.bind(this);
    this.handleFailedAjax = this.handleFailedAjax.bind(this);
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

  handleAjax(request) {
    jQueryAjaxUtil.handleAjax(request, DeploymentUtil.isCloud(), this.handleBeforeAjax, this.handleFailedAjax, this.handleDeploymentModalShow);
  }

  handleQueueAdd(event, item) {
    event.preventDefault();
    let data = {
      collection: this.state.queue,
      item: item
    }
    let request = {
      url: ADD_QUEUE_ITEM_ENDPOINT,
      data: JSON.stringify(data),
      type: "POST",
      contentType: "application/json",
      success: (response) => {
        if (response) {
          this.setState({
            queue: response,
            showSpinner: false
          });
        } else {
          this.setState({
            showSpinner: false,
            showErrorModal: true
          })
        }
      }
    }
    this.handleAjax(request);
  }

  handleStackAdd(event, item) {
    event.preventDefault();
    let data = {
      collection: this.state.stack,
      item: item
    }
    let request = {
      url: ADD_STACK_ITEM_ENDPOINT,
      data: JSON.stringify(data),
      type: "POST",
      contentType: "application/json",
      success: (response) => {
        if (response) {
          this.setState({
            stack: response,
            showSpinner: false
          });
        } else {
          this.setState({
            showSpinner: false,
            showErrorModal: true
          })
        }
      }
    }
    this.handleAjax(request);
  }

  handleQueueRemove(event) {
    event.preventDefault();
    let data = {
      collection: this.state.queue
    }
    let request = {
      url: REMOVE_QUEUE_ITEM_ENDPOINT,
      data: JSON.stringify(data),
      type: "POST",
      contentType: "application/json",
      success: (response) => {
        if (response) {
          this.setState({
            queue: response,
            showSpinner: false
          });
        } else {
          this.setState({
            showSpinner: false,
            showErrorModal: true
          })
        }
      }
    }
    this.handleAjax(request);
  }

  handleStackRemove(event) {
    event.preventDefault();
    let data = {
      collection: this.state.stack
    }
    let request = {
      url: REMOVE_STACK_ITEM_ENDPOINT,
      data: JSON.stringify(data),
      type: "POST",
      contentType: "application/json",
      success: (response) => {
        if (response) {
          this.setState({
            stack: response,
            showSpinner: false
          });
        } else {
          this.setState({
            showSpinner: false,
            showErrorModal: true
          })
        }
      }
    }
    this.handleAjax(request);
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
      <>
        <DeploymentModalComponent
          show={this.state.showDeploymentModal}
          handleClose={this.handleDeploymentModalClose}
        />
        <ErrorModalComponent
          id="errorModal"
          show={this.state.showErrorModal}
          handleClose={this.handleErrorModalClose}
        />
        <SpinnerComponent
          show={this.state.showSpinner}
        />
        <Row>
          <Col>
            <Row>
              <Col>
                <FormComponent
                  title="Queue (FIFO)"
                  listId="queueList"
                  id="queueInput"
                  handleAdd={this.handleQueueAdd}
                  handleRemove={this.handleQueueRemove}
                  items={this.state.queue}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <FormComponent
                  title="Stack (LIFO)"
                  listId="stackList"
                  id="stackInput"
                  handleAdd={this.handleStackAdd}
                  handleRemove={this.handleStackRemove}
                  items={this.state.stack}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

ReactDOM.render(
  <DataStructuresApp />,
  document.getElementById('result')
);