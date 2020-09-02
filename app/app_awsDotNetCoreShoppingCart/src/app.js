"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';

const API_ENDPOINT_GET = "https://6pzl3f4421.execute-api.eu-west-2.amazonaws.com/Prod/api/values";
const API_SUBMIT_CLASSES_VALID = "btn btn-outline-dark api-submit"
const API_SUBMIT_CLASSES_NOT_VALID = "btn btn-dark disabled api-submit"
const ANSWER  = 15;


class ShoppingListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      get: API_ENDPOINT_GET,
      add: '',
      delete: '',
      answer: '',
      isValidBtnClasses: API_SUBMIT_CLASSES_NOT_VALID,
      isValid: false
    };
    this.handleGetSubmit = this.handleGetSubmit.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
    this.handlePuzzleSubmit = this.handlePuzzleSubmit.bind(this);
  }

  open(url) {
    if (this.state.isValid) {
      window.open(url, '_blank');
    }
  }

  isValidHandler(event) {
    let isValid = Number(event.target.elements[0].value) === ANSWER;
    if(isValid) {
      this.setState({
        isValid: true,
        isValidBtnClasses: API_SUBMIT_CLASSES_VALID
      })
    }
  }

  handleGetSubmit(event) {
    event.preventDefault();
    let input = event.target.elements[0].value;
    let endpoint =  input.length > 0 ? `${this.state.get}/${input}` : this.state.get;
    this.open(endpoint)
  }

  handleAddSubmit(event) {
    event.preventDefault();
    this.open('https://google.com');
  }

  handleDeleteSubmit(event) {
    event.preventDefault();
    this.open('https://bbc.co.uk');
  }

  handlePuzzleSubmit(event) {
    event.preventDefault();
    this.isValidHandler(event);
  }

  render() {
    return (
      <div>
       <div class="row splitter">
          <div class="col-lg-4">
            <form onSubmit={this.handlePuzzleSubmit} autoComplete="off">
                <label for="basic-url">Anser this to unlock the API</label>
                <div class="input-group mb-3">
                  <input required type="text" class="form-control" placeholder="4 x 4 - 1 = ?" aria-label="4 x 4 - 1 = ?" />
                  <div class="input-group-append">
                    <button class="btn btn-outline-dark api-submit" type="submit" id="button-addon2">Submit</button>
                  </div>
                </div>
            </form>
            <form onSubmit={this.handleGetSubmit} autoComplete="off">
                <label for="basic-url">Leave empty to get all items, or pass an index</label>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Input" aria-label="4 x 4 - 1 = ?" />
                  <div class="input-group-append">
                    <button class={this.state.isValidBtnClasses} type="submit" id="button-addon2">Get</button>
                  </div>
                </div>
            </form>
            <form onSubmit={this.handleAddSubmit} autoComplete="off">
                <label for="basic-url">label text</label>
                <div class="input-group mb-3">
                  <input required type="text" class="form-control" placeholder="input" aria-label="input" />
                  <div class="input-group-append">
                    <button class={this.state.isValidBtnClasses} type="submit" id="button-addon2">Add</button>
                  </div>
                </div>
            </form>
            <form onSubmit={this.handleDeleteSubmit} autoComplete="off">
                <label for="basic-url">label text</label>
                <div class="input-group mb-3">
                  <input required type="text" class="form-control" placeholder="input" aria-label="input" />
                  <div class="input-group-append">
                    <button class={this.state.isValidBtnClasses} type="submit" id="button-addon2">Delete</button>
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
  <ShoppingListApp />,
  document.getElementById('result')
);