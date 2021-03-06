"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { PuzzleModalComponent } from '../../js/modules/react/puzzleModalComponent.js';
import { SpinnerComponent } from '../../js/modules/react/spinnerComponent.js'
import { ErrorModalComponent } from '../../js/modules/react/errorModalComponent.js';
import { ConfigUtil } from '../../js/modules/utils/configUtil';
import { FormComponent } from './formComponent';
import { jQueryAjaxUtil } from '../../js/modules/utils/jQueryAjaxUtil';

const APP_CONFIG = ConfigUtil.get("awsDotNetCoreShoppingCart");
const GET_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.get}`;
const ADD_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.add}`;
const DELETE_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.delete}`;
const UPDATE_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.update}`;
const PUZZLE = "4 x 4 - 1 =";
const DEFAULT_COLLECTION = [
  { name: "Apple" },
  { name: "Banana" }
]
class ShoppingListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: DEFAULT_COLLECTION,
      resultSet: DEFAULT_COLLECTION,
      isValid: false,
      showSpinner: false,
      showPuzzleModal: true,
      showErrorModal: false,
      isPuzzleValid: false
    };
    this.handleGetSubmit = this.handleGetSubmit.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
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
          answer={15}
          puzzle={PUZZLE}
          show={this.state.showPuzzleModal}
          handleClose={this.handlePuzzleModalClose}
          handleShow={this.handlePuzzleModalShow}
          handleIsValid={this.handleIsPuzzleValid}
        />
        <div className="row splitter">
          <div className="col-lg-12">
            <h3>
              Basket:
            </h3>
            <ul id="basketItems">
              {this.state.resultSet.map((item) => {
                return <li key={item.name}>{item.name}</li>
              })}
            </ul>
            <p className="lead">
              Use the below interface to alter the basket's contents:
            </p>
          </div>
        </div>
       <div className="row splitter">
          <div className="col-lg-4">
            <FormComponent
              handleSubmit={this.handleGetSubmit}
              button="Get"
              id="get"
              label="Get items (eg. 1 or 2 to get singular)"
              children={[
                { "id": "get",
                  "placeholder": "Item position or leave empty",
                  "type": "number"
                }]}
            />
            <FormComponent
              handleSubmit={this.handleAddSubmit}
              button="Add"
              id="add"
              label="Add an item"
              children={[
                { "id": "add",
                  "placeholder": "Name of item to add",
                  "required": true
                }]}
            />
            <FormComponent
              handleSubmit={this.handleDeleteSubmit}
              button="Delete"
              id="delete"
              label="Delete an item"
              children={[
                { "id": "delete",
                  "placeholder": "Item position to remove (eg. 1 or 2)",
                  "required": true,
                  "type": "number"
                }]}
            />
            <FormComponent
              handleSubmit={this.handleUpdateSubmit}
              button="Update"
              id="update"
              label="Update an item (eg. 1 or 2)"
              children={[
                { "id": "update_position",
                  "placeholder": "Position...",
                  "required": true,
                  "type": "number"
                },
                { "id": "update_value",
                  "placeholder": "Value...",
                  "required": true
                }]}
            />
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