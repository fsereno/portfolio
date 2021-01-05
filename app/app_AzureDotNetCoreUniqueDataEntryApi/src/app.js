"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { KeyGeneratorModule } from '../../typeScript/Modules/keyGeneratorModule/dist/app.js';
import { FilterModule } from '../../typeScript/Modules/filterModule/dist/app.js';
import { PuzzleModalModule } from '../../js/modules/react/puzzleModalModule.js';
import { SpinnerModule } from '../../js/modules/react/spinnerModule.js'
import { ErrorModalModule } from '../../js/modules/react/errorModalModule.js';
import { ConfigUtilModule } from '../../js/modules/configUtilModule';
import { FormModule } from './formModule';
import { jQueryAjaxModule } from '../../js/modules/jQueryAjaxModule';

const PUZZLE = "4 x 4 - 2 =";
const APP_CONFIG = ConfigUtilModule.get("AzureDotNetCoreUniqueDataEntryApi");
const CAN_IT_BE_ADDED_ASYNC_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.canItemBeAddedAsync}`;
const FIRST_NAME_INPUT = "firstNameInput";
const SECOND_NAME_INPUT = "secondNameInput";
const CONTACT_INPUT = "contactInput";
const POSTCODE_INPUT = "postCodeInput";

let _puzzleModalModule = PuzzleModalModule(14);
class UniqueDataEntryApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        firstName: "John",
        secondName: "Doe",
        contact: "000000000",
        postCode: "AB101CD"
      }],
      counterLimit: 10,
      counter: 1,
      showSpinner: false,
      showPuzzleModal: true,
      showErrorModal: false,
      showDuplicateErrorModal: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePuzzleModalClose = this.handlePuzzleModalClose.bind(this);
    this.handlePuzzleModalShow = this.handlePuzzleModalShow.bind(this);
    this.handleErrorModalClose = this.handleErrorModalClose.bind(this);
    this.handleDuplicateErrorModalClose = this.handleDuplicateErrorModalClose.bind(this);
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
    jQueryAjaxModule.handleAjax(request, _puzzleModalModule.isSolved(), this.handleBeforeAjax, this.handleFailedAjax, this.handlePuzzleModalShow);
  }

  handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let firstName = formData.get(FIRST_NAME_INPUT)
    let secondName = formData.get(SECOND_NAME_INPUT)
    let contact = formData.get(CONTACT_INPUT)
    let postCode = formData.get(POSTCODE_INPUT)

    let data = {
      items: this.state.items,
      item: {
        firstName: firstName,
        secondName: secondName,
        contact: FilterModule.filterInputOnRegex(contact, /[0-9]/),
        postCode: FilterModule.filterInputOnRegex(postCode, /\w/),
      }
    }

    let request = {
      url: CAN_IT_BE_ADDED_ASYNC_ENDPOINT,
      data: JSON.stringify(data),
      type: "POST",
      success: (response) => {
        if (response === true) {
          let items = [...this.state.items];

          items.push({
            firstName: data.item.firstName,
            secondName: data.item.secondName,
            contact: data.item.contact,
            postCode: data.item.postCode
          });

          this.setState({
            items: items,
            counter: this.state.counter + 1,
            showSpinner: false
          });
        } else {
          this.setState({
            showSpinner: false,
            showDuplicateErrorModal: true
          })
        }
      }
    }
    this.handleAjax(request);
  }

  handleDelete(event) {
    event.preventDefault();
    let index = Number(event.target.dataset.index);
    this.state.items.splice(index, 1);
    this.setState({
      items: this.state.items,
      counter: this.state.counter - 1
    });
  }

  handleErrorModalClose() {
    this.setState({
      showErrorModal: false
    })
  }

  handleDuplicateErrorModalClose() {
    this.setState({
      showDuplicateErrorModal: false
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

  render() {
    return (
      <div>
        <_puzzleModalModule.render
          puzzle={PUZZLE}
          show={this.state.showPuzzleModal}
          handleClose={this.handlePuzzleModalClose}
          handleShow={this.handlePuzzleModalShow}
        />
        <ErrorModalModule
          id="errorModule"
          show={this.state.showErrorModal}
          handleClose={this.handleErrorModalClose}
        />
        <ErrorModalModule
          id="duplicateEntryErrorModule"
          show={this.state.showDuplicateErrorModal}
          title="Duplicate entry detected!"
          body="You cannot add a duplicate item."
          handleClose={this.handleDuplicateErrorModalClose}
        />
        <SpinnerModule
          show={this.state.showSpinner}
        />
        <div className="row splitter">
          <div className="col-lg-12">
            <h3>Items:</h3>
            <p className="lead">Add new items to the table. Only unique entries are allowed.</p>
            <div className="table-responsive">
              <table className="table" id="itemTable">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>First Name</th>
                    <th>Second Name</th>
                    <th>Contact</th>
                    <th>PostCode</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.items.map((item, index) => {
                    let key = KeyGeneratorModule.generate(`${item.secondName} ${item.contact} ${item.postCode}`);
                    return (
                      <tr key={key}>
                        <td>{item.firstName}</td>
                        <td>{item.secondName}</td>
                        <td>{item.contact}</td>
                        <td>{item.postCode}</td>
                        <td><a href="#" className="badge badge-danger delete" data-index={index} onClick={this.handleDelete}>Delete</a></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row splitter">
          <div className="col-lg-12">
            <p>No. of Items: {this.state.counter}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <FormModule handleSubmit={this.handleSubmit}/>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <UniqueDataEntryApp />,
  document.getElementById('result')
);