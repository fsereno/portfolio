"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { PuzzleModule } from '../../js/puzzleModule.js';

const API_ENDPOINT = "https://6pzl3f4421.execute-api.eu-west-2.amazonaws.com/Prod/api/basket";
const API_SUBMIT_CLASSES = "btn btn-dark api-submit";
const DISABLED_BTN_CLASS = "disabled";
const PUZZLE = "4 x 4 - 1 =";
const DEFAULT_COLLECTION = [
  { name: "Apple" },
  { name: "Banana" }
]

let _puzzleModule = PuzzleModule(15, "puzzleModal");

function InputTemplate(props){
  return (
    <form onSubmit={props.event} autoComplete="off">
        <label>{props.label}</label>
        <div class="input-group mb-3">
          <input required={props.required ? "required" : ""} type="text" class="form-control" placeholder={props.placeholder} aria-label={props.placeholder} />
          <div class="input-group-append">
          <button class={`${API_SUBMIT_CLASSES} ${props.disabledBtnClass}`} type="submit">{props.button}</button>
          </div>
        </div>
    </form>
  )
}

class ShoppingListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: DEFAULT_COLLECTION,
      resultSet: DEFAULT_COLLECTION,
      get: `${API_ENDPOINT}/get`,
      add: `${API_ENDPOINT}/add`,
      delete: `${API_ENDPOINT}/delete`,
      update: `${API_ENDPOINT}/update`,
      answer: '',
      disabledBtnClass: DISABLED_BTN_CLASS,
      isValid: false,
      puzzle: PUZZLE
    };
    this.handleGetSubmit = this.handleGetSubmit.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
    this.handlePuzzleSubmit = this.handlePuzzleSubmit.bind(this);
  }

  handleAjax(request) {
    if (_puzzleModule.getResult()) {
      $.ajax(request);
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
    this.handleAjax(request);
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
    this.handleAjax(request);
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
    this.handleAjax(request);
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
    this.handleAjax(request);
  }

  handlePuzzleSubmit(event) {
    event.preventDefault();
    if (_puzzleModule.getResult()) {
      this.setState({
        disabledBtnClass: ""
      });
      _puzzleModule.hide();
    }
  }

  componentDidMount() {
    _puzzleModule.show();
  }

  render() {
    return (
      <div>
        <_puzzleModule.RenderTemplate
          event={this.handlePuzzleSubmit}
          label="First answer this question to unlock the API:"
          puzzle={PUZZLE}
          button="Submit"
          required={true}
          title="Are you a human?"
        />
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
              User the below interface to alter the baskets contents:
            </p>
          </div>
        </div>
       <div class="row splitter">
          <div class="col-lg-4">
            <InputTemplate
              event={this.handleGetSubmit}
              label="Get items (eg. 1 or 2 to get singular)"
              placeholder="Item position or leave empty"
              button="Get"
              disabledBtnClass={this.state.disabledBtnClass}
            />
            <InputTemplate
              event={this.handleAddSubmit}
              label="Add an item"
              placeholder="Name of item to add"
              button="Add"
              disabledBtnClass={this.state.disabledBtnClass}
              required={true}
            />
            <InputTemplate
              event={this.handleDeleteSubmit}
              label="Delete an item"
              placeholder="Item position to remove (eg. 1 or 2)"
              button="Delete"
              disabledBtnClass={this.state.disabledBtnClass}
              required={true}
            />
            <form onSubmit={this.handleUpdateSubmit} autoComplete="off">
                <label>Update an item (eg. 1 or 2)</label>
                <div class="input-group mb-3">
                  <input required type="text" class="form-control" placeholder="Position to update (eg. 1, or 2)" aria-label="Position to update (eg. 1, or 2)" />
                  <input required type="text" class="form-control" placeholder="Update with value" aria-label="Update with value" />
                  <div class="input-group-append">
                    <button class={`${API_SUBMIT_CLASSES} ${this.state.disabledBtnClass}`} type="submit">Update</button>
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