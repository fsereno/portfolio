"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { PuzzleModalModule } from '../../js/modules/react/puzzleModalModule.js';
import { SpinnerModule } from '../../js/modules/react/spinnerModule.js'
import { ErrorModalModule } from '../../js/modules/react/errorModalModule.js';
import { ConfigUtilModule } from "../../js/modules/configUtilModule";

const PUZZLE = "4 x 4 - 5 =";
const APP_CONFIG = ConfigUtilModule.get("awsDotNetCoreStringSortApi");
const SORT_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.sort}`;

let _puzzleModalModule = PuzzleModalModule(11);
let _errorModule = new ErrorModalModule("errorModule");

class StringSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: '',
      result: '',
      showSpinner: false,
      showPuzzleModal: true
    };
    this.handleValuesChange = this.handleValuesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePuzzleModalClose = this.handlePuzzleModalClose.bind(this);
    this.handlePuzzleModalShow = this.handlePuzzleModalShow.bind(this);
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
        _errorModule.show();
        this.setState({
          showSpinner: false
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

  render() {
    return (
      <div>
        <_errorModule.render/>
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
            <form onSubmit={this.handleSubmit} autoComplete="off">
              <label>Enter comma seperated values to sort</label>
              <div className="form-row align-items-center">
                <div className="col-lg-10">
                  <label className="sr-only" htmlFor="valuesInput">To Sort</label>
                  <input required type="text" className="form-control mb-2" id="valuesInput" placeholder="B,C,A" value={this.state.values} onChange={this.handleValuesChange}/>
                </div>
                <div className="col-lg-2">
                  <button id="sort_submit" type="submit" className="btn btn-dark mb-2 w-100">Sort</button>
                </div>
              </div>
            </form>
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