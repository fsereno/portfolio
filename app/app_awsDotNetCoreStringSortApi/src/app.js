"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { PuzzleModalModule } from '../../js/modules/react/puzzleModalModule.js';
import { SpinnerModule } from '../../js/modules/react/spinnerModule.js'
import { ErrorModalModule } from '../../js/modules/react/errorModalModule.js';
import { ConfigUtilModule } from "../../js/modules/configUtilModule";
import { FormModule } from "./formModule";
import { jQueryAjaxModule } from '../../js/modules/jQueryAjaxModule';

const PUZZLE = "4 x 4 - 5 =";
const APP_CONFIG = ConfigUtilModule.get("awsDotNetCoreStringSortApi");
const SORT_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.sort}`;

let _puzzleModalModule = PuzzleModalModule(11);
let _errorModalModule = new ErrorModalModule("errorModule");
let _formModule = FormModule();

class StringSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: '',
      result: '',
      showSpinner: false,
      showPuzzleModal: true,
      showErrorModal: false,
    };
    this.handleValuesChange = this.handleValuesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePuzzleModalClose = this.handlePuzzleModalClose.bind(this);
    this.handlePuzzleModalShow = this.handlePuzzleModalShow.bind(this);
    this.handleErrorModalClose = this.handleErrorModalClose.bind(this);
    this.handleBeforeAjax = this.handleBeforeAjax.bind(this);
    this.handleFailedAjax = this.handleFailedAjax.bind(this);
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
    jQueryAjaxModule.handleAjax(request, _puzzleModalModule.isSolved(), this.handleBeforeAjax, this.handleFailedAjax, this.handlePuzzleModalShow);
  }

  handleValuesChange(event) {
    this.setState({values: event.target.value});
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
            <_formModule.render
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

ReactDOM.render(
  <StringSort />,
  document.getElementById('result')
);