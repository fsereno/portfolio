"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';

const API_ENDPOINT = "https://6pzl3f4421.execute-api.eu-west-2.amazonaws.com/Prod/api/basket";
const API_SUBMIT_CLASSES_VALID = "btn btn-outline-dark api-submit"
const API_SUBMIT_CLASSES_NOT_VALID = "btn btn-dark disabled api-submit"
const ANSWER  = 15;
const PUZZLE = "4 x 4 - 1 = ?";

function InputTemplate(props){
  return (
    <form onSubmit={props.event} autoComplete="off">
        <label>{props.label}</label>
        <div class="input-group mb-3">
          <input required={props.required ? "required" : ""} type="text" class="form-control" placeholder={props.placeholder} aria-label={props.placeholder} />
          <div class="input-group-append">
          <button class={props.isValidBtnClasses} type="submit">{props.button}</button>
          </div>
        </div>
    </form>
  )
}

class ShoppingListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      resultSet: [],
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

  ajax(request) {
    if (this.state.isValid) {
      $.ajax(request);
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
    let index = Number(input);
    let isValid = response => typeof response !== "undefined" && response.length > 0;
    let request = {
        url: this.state.get,
        type: "POST",
        contentType: 'application/json;',
        data: JSON.stringify({
          "index": index,
          "items":this.state.items
        }),
        success: (response) => {
          if (isValid(response)) {
            this.setState({
              resultSet: response
            });
          }
        }
      }
    this.ajax(request);
  }

  handleAddSubmit(event) {
    event.preventDefault();
    let input = event.target.elements[0].value;
    let request = {
      url: this.state.add,
      type: "POST",
      contentType: 'application/json;',
      data: JSON.stringify({
        "item":{
          "name":input
        },
        "items":this.state.items
      }),
      success: (response) => {
        this.setState({
          resultSet: response,
          items: response
        });
      }
    }
    this.ajax(request);
  }

  handleUpdateSubmit(event) {
    event.preventDefault();
    let index = Number(event.target.elements[0].value);
    let value = event.target.elements[1].value;
    let request = {
      url: this.state.update,
      type: "POST",
      contentType: 'application/json;',
      data: JSON.stringify({
        "index":index,
        "item":{
          "name":value
        },
        "items":this.state.items
      }),
      success: (response) => {
        this.setState({
          resultSet: response,
          items: response
        });
      }
    }
    this.ajax(request);
  }

  handleDeleteSubmit(event) {
    event.preventDefault();
    let index = Number(event.target.elements[0].value);
    let request = {
      url: this.state.delete,
      type: "POST",
      contentType: 'application/json;',
      data: JSON.stringify({
        "index":index,
        "items":this.state.items
      }),
      success: (response) => {
        this.setState({
          resultSet: response,
          items: response
        });
      }
    }
    this.ajax(request);
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
            <h3>
              Basket:
            </h3>
            <ul>
              {this.state.resultSet.map((item) => {
                return <li>{item.name}</li>
              })}
            </ul>
            <p class="lead">
              The shopping basket initially has the following structure:
            </p>
            <pre>
              <code class="ng-binding">
                [
                  "Apple",
                  "Banana"
                ]
              </code>
            </pre>
          </div>
        </div>
       <div class="row splitter">
          <div class="col-lg-4">
            <InputTemplate
              event={this.handlePuzzleSubmit}
              label="First answer this question to unlock the API"
              placeholder={this.state.puzzle}
              button="Submit"
              isValidBtnClasses={this.state.isValidBtnClasses}
              required={true}
            />
            <hr/>
            <InputTemplate
              event={this.handleGetSubmit}
              label="Get items (eg. 1 or 2 to get singular)"
              placeholder="Item position or leave empty"
              button="Get"
              isValidBtnClasses={this.state.isValidBtnClasses}
            />
            <InputTemplate
              event={this.handleAddSubmit}
              label="Add an item"
              placeholder="Name of item to add"
              button="Add"
              isValidBtnClasses={this.state.isValidBtnClasses}
              required={true}
            />
            <InputTemplate
              event={this.handleDeleteSubmit}
              label="Delete an item"
              placeholder="Item position to remove (eg. 1 or 2)"
              button="Delete"
              isValidBtnClasses={this.state.isValidBtnClasses}
              required={true}
            />
            <form onSubmit={this.handleUpdateSubmit} autoComplete="off">
                <label>Update an item (eg. 1 or 2)</label>
                <div class="input-group mb-3">
                  <input required type="text" class="form-control" placeholder="Position to update (eg. 1, or 2)" aria-label="Position to update (eg. 1, or 2)" />
                  <input required type="text" class="form-control" placeholder="Update with value" aria-label="Update with value" />
                  <div class="input-group-append">
                    <button class={this.state.isValidBtnClasses} type="submit">Update</button>
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