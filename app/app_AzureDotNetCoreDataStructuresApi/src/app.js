"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { KeyGeneratorModule } from '../../typeScript/Modules/keyGeneratorModule/app.js';
import { PuzzleModalModule } from '../../js/modules/react/puzzleModalModule.js';
import { SpinnerModule } from '../../js/modules/react/spinnerModule.js'
import { ErrorModalModule } from '../../js/modules/react/errorModalModule.js';
import { ConfigUtilModule } from "../../js/modules/configUtilModule";
import { FormModule } from './formModule';

const PUZZLE = "3 x 2 - 1 =";
const APP_CONFIG = ConfigUtilModule.get("azureDotNetCoreDataStructuresApi");
const ADD_QUEUE_ITEM = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.addQueueItem}`;

let _puzzleModalModule = PuzzleModalModule(5);
let _errorModalModule = new ErrorModalModule("errorModule");
let _keyGeneratorModule = new KeyGeneratorModule();
let _formModule = FormModule();

class ToDoListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      queue: [],
      stack: [],
      showSpinner: false,
      showPuzzleModal: true,
      showErrorModal: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete= this.handleDelete.bind(this);

    this.handlePuzzleModalClose = this.handlePuzzleModalClose.bind(this);
    this.handlePuzzleModalShow = this.handlePuzzleModalShow.bind(this);
    this.handleErrorModalClose = this.handleErrorModalClose.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
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

  handleSubmit(event) {
    event.preventDefault();
    let data = {
      collection: this.state.queue,
      item: this.state.value
    }
    let request = {
      url: ADD_QUEUE_ITEM,
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

  handleDelete(event) {
    event.preventDefault();
    this.setState({
      queue: this.state.queue
    });
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
      <div>
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
        <div className="row splitter">
          <div className="col-lg-4">
            <h3>Result:</h3>
            <ul id="toDoList" className="list-group">
              {this.state.queue.map((item, index) => {
                let key = _keyGeneratorModule.generate(item);
                return <li key={key} className="list-group-item d-flex justify-content-between align-items-center">{item}</li>
              })}
          </ul>
          </div>
        </div>
        <div className="row splitter">
          <div className="col-lg-12">
            <p>Item to add: {this.state.value}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <_formModule.render
              value={this.state.value}
              onChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              items={this.state.queue}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <ToDoListForm />,
  document.getElementById('result')
);