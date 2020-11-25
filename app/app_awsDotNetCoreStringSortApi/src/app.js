"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { PuzzleModule } from '../../js/modules/react/puzzleModule.js';
import { SpinnerModule } from '../../js/modules/react/spinnerModule.js'
import { ErrorModule } from '../../js/modules/react/errorModule.js';
import { ConfigUtilModule } from "../../js/modules/configUtilModule";

const PUZZLE = "4 x 4 - 5 =";
const APP_CONFIG = ConfigUtilModule.get("awsDotNetCoreStringSortApi");
const SORT_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.sort}`;

let _puzzleModule = PuzzleModule(11, "puzzleModal");
let _errorModule = ErrorModule("errorModule");

class StringSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: '',
      result: '',
      showSpinner: false
    };
    this.handleValuesChange = this.handleValuesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValuesChange(event) {
    this.setState({values: event.target.value});
  }

  handleAjax(request) {
    if (_puzzleModule.getResult()) {
      this.setState({
        showSpinner: true
      });
      $.ajax(request)
      .fail(() => {
        _errorModule.show();
        this.setState({
          showSpinner: false
        });
      });
    } else {
      _puzzleModule.show();
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

  componentDidMount() {
    _puzzleModule.show();
  }

  render() {
    return (
      <div>
        <_errorModule.Render/>
        <SpinnerModule
          show={this.state.showSpinner}
        />
        <_puzzleModule.Render
          puzzle={PUZZLE}
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
                  <label className="sr-only" for="valuesInput">To Sort</label>
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