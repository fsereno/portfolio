"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { PuzzleModule } from '../../js/puzzleModule.js';
import { SpinnerModule } from '../../js/spinnerModule.js'
import { ErrorModule } from '../../js/errorModule.js';

const API_ENDPOINT = "https://t8txttdaee.execute-api.eu-west-2.amazonaws.com/Prod/api/values";
const PUZZLE = "4 x 4 - 5 =";

let _puzzleModule = PuzzleModule(11, "puzzleModal");
let _spinnerModule = SpinnerModule();
let _errorModule = ErrorModule("errorModule");

class StringSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: '',
      result: '',
      sort: `${API_ENDPOINT}/sort`,
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
      url: this.state.sort,
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
        <_spinnerModule.Render
          show={this.state.showSpinner}
        />
        <_puzzleModule.Render
          puzzle={PUZZLE}
        />
        <div class="row splitter">
          <div class="col-lg-12">
          <h3>Sorted values:</h3>
          <p class="lead">{this.state.result}</p>
          </div>
        </div>
        <div class="row splitter">
          <div class="col-lg-12">
            <p>Values to sort: {this.state.values}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <form onSubmit={this.handleSubmit} autoComplete="off">
              <label>Enter comma seperated values to sort</label>
              <div class="form-row align-items-center">
                <div class="col-lg-10">
                  <label class="sr-only" for="valuesInput">To Sort</label>
                  <input required type="text" class="form-control mb-2" id="valuesInput" placeholder="B,C,A" value={this.state.values} onChange={this.handleValuesChange}/>
                </div>
                <div class="col-lg-2">
                  <button id="sort_submit" type="submit" class="btn btn-dark mb-2 w-100">Sort</button>
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