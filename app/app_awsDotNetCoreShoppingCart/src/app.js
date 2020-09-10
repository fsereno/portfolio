"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';

const API_ENDPOINT = "https://6pzl3f4421.execute-api.eu-west-2.amazonaws.com/Prod/api/basket";
const API_SUBMIT_CLASSES_VALID = "btn btn-outline-dark api-submit"
const API_SUBMIT_CLASSES_NOT_VALID = "btn btn-dark disabled api-submit"
const ANSWER  = 15;
const PUZZLE = "4 x 4 - 1 = ?";


class ShoppingListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      get: `${API_ENDPOINT}/get`,
      add: `${API_ENDPOINT}/add`,
      delete: `${API_ENDPOINT}/delete`,
      update: `${API_ENDPOINT}/update`,
      answer: '',
      isValidBtnClasses: API_SUBMIT_CLASSES_NOT_VALID,
      isValid: false,
      puzzle: PUZZLE
    };
    this.handleGetSubmit = this.handleGetSubmit.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
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
    //let endpoint =  input.length > 0 ? `${this.state.get}/${input}` : this.state.get;
    $.ajax({
      url: this.state.get,
      type: "GET"
    }).done((response) => {
      this.setState({
        items: response
      });
    });
    //this.open(endpoint)
  }

  handleAddSubmit(event) {
    event.preventDefault();
    let input = event.target.elements[0].value;
    let endpoint =  `${this.state.add}/${input}`;
    this.open(endpoint)
  }

  handleUpdateSubmit(event) {
    event.preventDefault();
    let index = event.target.elements[0].value;
    let value = event.target.elements[1].value;
    let endpoint = `${this.state.update}/${index}/with/${value}`;
    this.open(endpoint);
  }

  handleDeleteSubmit(event) {
    event.preventDefault();
    let input = event.target.elements[0].value;
    let endpoint =  `${this.state.delete}/${input}`;
    this.open(endpoint)
  }

  handlePuzzleSubmit(event) {
    event.preventDefault();
    this.isValidHandler(event);
  }

  render() {
    return (
      <div>
        <div class="row splitter">
          <div class="col-lg-12">
            <p class="lead">
              The shopping basket initially has the following structure:
            </p>
            <ul>
              {this.state.items.map((item) => {
                return <li>{item.name}</li>
              })}
            </ul>
            <pre>
              <code class="ng-binding">
                [
                  "Item 1",
                  "Item 2"
                ]
              </code>
            </pre>
          </div>
        </div>
       <div class="row splitter">
          <div class="col-lg-4">
            <form onSubmit={this.handlePuzzleSubmit} autoComplete="off">
                <label for="basic-url">First answer this question to unlock the API</label>
                <div class="input-group mb-3">
                  <input required type="text" class="form-control" placeholder={this.state.puzzle} aria-label={this.state.puzzle} />
                  <div class="input-group-append">
                    <button class="btn btn-outline-dark api-submit" type="submit" id="button-addon2">Submit</button>
                  </div>
                </div>
            </form>
            <hr/>
            <form onSubmit={this.handleGetSubmit} autoComplete="off">
                <p class="lead">Leave the Get field empty to retrieve all items</p>
                <label for="basic-url">Get items (eg. 1 or 2 to get singular)</label>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Item position or leave empty" aria-label="Item number (eg. 1, or 2)" />
                  <div class="input-group-append">
                    <button class={this.state.isValidBtnClasses} type="submit" id="button-addon2">Get</button>
                  </div>
                </div>
            </form>
            <form onSubmit={this.handleAddSubmit} autoComplete="off">
                <label for="basic-url">Add an item</label>
                <div class="input-group mb-3">
                  <input required type="text" class="form-control" placeholder="Name of item to add" aria-label="Name of item to add" />
                  <div class="input-group-append">
                    <button class={this.state.isValidBtnClasses} type="submit" id="button-addon2">Add</button>
                  </div>
                </div>
            </form>
            <form onSubmit={this.handleUpdateSubmit} autoComplete="off">
                <label for="basic-url">Update an item (eg. 1 or 2)</label>
                <div class="input-group mb-3">
                  <input required type="text" class="form-control" placeholder="Position to update (eg. 1, or 2)" aria-label="Position to update (eg. 1, or 2)" />
                  <input required type="text" class="form-control" placeholder="Update with value" aria-label="Update with value" />
                  <div class="input-group-append">
                    <button class={this.state.isValidBtnClasses} type="submit" id="button-addon2">Update</button>
                  </div>
                </div>
            </form>
            <form onSubmit={this.handleDeleteSubmit} autoComplete="off">
                <label for="basic-url">Delete an item</label>
                <div class="input-group mb-3">
                  <input required type="text" class="form-control" placeholder="Item position to remove (eg. 1 or 2)" aria-label="Item position to remove (eg. 1 or 2)" />
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