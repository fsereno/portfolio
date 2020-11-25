"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { PuzzleModalModule } from '../../js/modules/react/puzzleModalModule.js';
import { SpinnerModule } from '../../js/modules/react/spinnerModule.js'
import { ErrorModalModule } from '../../js/modules/react/errorModalModule.js';
import { ConfigUtilModule } from "../../js/modules/configUtilModule";

const APP_CONFIG = ConfigUtilModule.get("awsDotNetCoreShoppingCart");
const GET_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.get}`;
const ADD_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.add}`;
const DELETE_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.delete}`;
const UPDATE_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.update}`;

const PUZZLE = "4 x 4 - 1 =";
const DEFAULT_COLLECTION = [
  { name: "Apple" },
  { name: "Banana" }
]

let _puzzleModule = PuzzleModalModule(15, "puzzleModal");
let _errorModule = new ErrorModalModule("errorModule");

function InputTemplate(props){
  return (
    <form id={`${props.id}_form`} onSubmit={props.event} autoComplete="off">
        <label>{props.label}</label>
        <div className="input-group mb-3">
          <input required={props.required ? "required" : ""} type="text" className="form-control" placeholder={props.placeholder} aria-label={props.placeholder} />
          <div className="input-group-append">
          <button id={`${props.id}_submit`} className="btn btn-dark api-submit" type="submit">{props.button}</button>
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
      answer: '',
      isValid: false,
      puzzle: PUZZLE,
      showSpinner: false
    };
    this.handleGetSubmit = this.handleGetSubmit.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
  }

  handleAjax(request) {
    if (_puzzleModule.isSolved()) {
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

  handleGetSubmit(event) {
    event.preventDefault();
    let input = event.target.elements[0].value;
    let index = Number(input);
    let isValid = response => typeof response !== "undefined" && response.length > 0;
    let request = {
        url: GET_ENDPOINT,
        type: "POST",
        contentType: 'application/json;',
        data: JSON.stringify({
          "index": index,
          "items":this.state.items
        }),
        success: (response) => {
          if (isValid(response)) {
            this.setState({
              resultSet: response,
              showSpinner: false
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
      url: ADD_ENDPOINT,
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
          items: response,
          showSpinner: false
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
      url: UPDATE_ENDPOINT,
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
          items: response,
          showSpinner: false
        });
      }
    }
    this.handleAjax(request);
  }

  handleDeleteSubmit(event) {
    event.preventDefault();
    let index = Number(event.target.elements[0].value);
    let request = {
      url: DELETE_ENDPOINT,
      type: "POST",
      contentType: 'application/json;',
      data: JSON.stringify({
        "index":index,
        "items":this.state.items
      }),
      success: (response) => {
        this.setState({
          resultSet: response,
          items: response,
          showSpinner: false
        });
      }
    }
    this.handleAjax(request);
  }

  componentDidMount() {
    _puzzleModule.show();
  }

  render() {
    return (
      <div>
        <_errorModule.render/>
        <SpinnerModule
          show={this.state.showSpinner}
        />
        <_puzzleModule.render
          puzzle={PUZZLE}
        />
        <div className="row splitter">
          <div className="col-lg-12">
            <h3>
              Basket:
            </h3>
            <ul id="basketItems">
              {this.state.resultSet.map((item) => {
                return <li>{item.name}</li>
              })}
            </ul>
            <p className="lead">
              User the below interface to alter the baskets contents:
            </p>
          </div>
        </div>
       <div className="row splitter">
          <div className="col-lg-4">
            <InputTemplate
              id="get"
              event={this.handleGetSubmit}
              label="Get items (eg. 1 or 2 to get singular)"
              placeholder="Item position or leave empty"
              button="Get"
              disabledBtnClass={this.state.disabledBtnClass}
            />
            <InputTemplate
              id="add"
              event={this.handleAddSubmit}
              label="Add an item"
              placeholder="Name of item to add"
              button="Add"
              disabledBtnClass={this.state.disabledBtnClass}
              required={true}
            />
            <InputTemplate
              id="delete"
              event={this.handleDeleteSubmit}
              label="Delete an item"
              placeholder="Item position to remove (eg. 1 or 2)"
              button="Delete"
              disabledBtnClass={this.state.disabledBtnClass}
              required={true}
            />
            <form id="update_form" onSubmit={this.handleUpdateSubmit} autoComplete="off">
                <label>Update an item (eg. 1 or 2)</label>
                <div className="input-group mb-3">
                  <input id="update_position" required type="text" className="form-control" placeholder="Position to update (eg. 1, or 2)" aria-label="Position to update (eg. 1, or 2)" />
                  <input id="update_value" required type="text" className="form-control" placeholder="Update with value" aria-label="Update with value" />
                  <div className="input-group-append">
                    <button id="update_submit" className="btn btn-dark api-submit" type="submit">Update</button>
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