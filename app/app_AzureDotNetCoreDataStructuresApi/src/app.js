"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { KeyGeneratorModule } from '../../typeScript/Modules/keyGeneratorModule/app.js';
import { PuzzleModalModule } from '../../js/modules/react/puzzleModalModule.js';
import { SpinnerModule } from '../../js/modules/react/spinnerModule.js'
import { ErrorModalModule } from '../../js/modules/react/errorModalModule.js';
import { ConfigUtilModule } from "../../js/modules/configUtilModule";
import { FormModule } from './formModule';

const PUZZLE = "3 x 2 - 1 =";
const APP_CONFIG = ConfigUtilModule.get("azureDotNetCoreDataStructuresApi");
const ADD_QUEUE_ITEM_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.addQueueItem}`;
const REMOVE_QUEUE_ITEM_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.removeQueueItem}`;

let _puzzleModalModule = PuzzleModalModule(5);
let _errorModalModule = new ErrorModalModule("errorModule");
let _keyGeneratorModule = new KeyGeneratorModule();
let _formModule = FormModule();

class DataStructuresApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queue: [],
      stack: [],
      showSpinner: false,
      showPuzzleModal: true,
      showErrorModal: false
    };

    this.handleQueueAdd = this.handleQueueAdd.bind(this);
    this.handleQueueRemove= this.handleQueueRemove.bind(this);

    this.handlePuzzleModalClose = this.handlePuzzleModalClose.bind(this);
    this.handlePuzzleModalShow = this.handlePuzzleModalShow.bind(this);
    this.handleErrorModalClose = this.handleErrorModalClose.bind(this);
  }

  handleAjax(request) {
    if (_puzzleModalModule.isSolved()) {
      this.setState({
        showSpinner: true,
        showPuzzleModal: false //TODO:  do this in the other apps
      });
      $.ajax(request)
        .fail(() => {
          this.setState({
            showErrorModal: true,
            showSpinner: false
          });
        });
    } else {
      this.handlePuzzleModalShow();
    }
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
      success: (response) => {
        if (response) {
          this.setState({
            queue: JSON.parse(response),
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
      success: (response) => {
        if (response) {
          this.setState({
            queue: JSON.parse(response),
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

  render() {
    return (
      <>
        <_puzzleModalModule.render
          puzzle={PUZZLE}
          show={this.state.showPuzzleModal}
          handleClose={this.handlePuzzleModalClose}
          handleShow={this.handlePuzzleModalShow}
        />
        <_errorModalModule.render
          show={this.state.showErrorModal}
          handleClose={this.handleErrorModalClose}
        />
        <SpinnerModule
          show={this.state.showSpinner}
        />
        <Row>
          <Col>
            <Row>
              <Col>
                <_formModule.render
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
                <_formModule.render
                  title="Stack (LIFO)"
                  listId="stackList"
                  id="stackInput"
                  handleAdd={this.handleQueueAdd}
                  handleRemove={this.handleQueueRemove}
                  items={this.state.queue}
                />
                <h3></h3>
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