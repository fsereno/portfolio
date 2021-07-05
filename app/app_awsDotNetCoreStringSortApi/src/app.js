"use strict;"

import '../../js/includes/jsDeps.js';
import '../../sass/includes/styleDeps.scss'
import '../sass/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { PuzzleModalComponent } from '../../js/modules/react/puzzleModalComponent.js';
import { SpinnerComponent } from '../../js/modules/react/spinnerComponent.js'
import { ErrorModalComponent } from '../../js/modules/react/errorModalComponent.js';
import { ConfigUtil } from "../../js/modules/utils/configUtil";
import { FormComponent } from "./formComponent";
import { jQueryAjaxUtil } from '../../js/modules/utils/jQueryAjaxUtil';

const PUZZLE = "4 x 4 - 5 =";
const APP_CONFIG = ConfigUtil.get("awsDotNetCoreStringSortApi");
const SORT_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.sort}`;

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
    this.handleIsPuzzleValid = this.handleIsPuzzleValid.bind(this);
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
    jQueryAjaxUtil.handleAjax(request, this.state.isPuzzleValid, this.handleBeforeAjax, this.handleFailedAjax, this.handlePuzzleModalShow);
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

  handleIsPuzzleValid() {
    this.setState({
      isPuzzleValid: true,
      showPuzzleModal: false
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
        <PuzzleModalComponent
          answer={11}
          puzzle={PUZZLE}
          show={this.state.showPuzzleModal}
          handleClose={this.handlePuzzleModalClose}
          handleShow={this.handlePuzzleModalShow}
          handleIsValid={this.handleIsPuzzleValid}
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

ReactDOM.render(
  <StringSort />,
  document.getElementById('result')
);