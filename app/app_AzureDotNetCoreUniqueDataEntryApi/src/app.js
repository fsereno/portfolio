"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { KeyGeneratorModule } from '../../typeScript/Modules/keyGeneratorModule/app.js';
import { CharFilterModule } from '../../typeScript/Modules/charFilterModule/app.js';
import { PuzzleModalModule } from '../../js/modules/react/puzzleModalModule.js';
import { SpinnerModule } from '../../js/modules/react/spinnerModule.js'
import { ErrorModalModule } from '../../js/modules/react/errorModalModule.js';
import { ConfigUtilModule } from '../../js/modules/configUtilModule';

const PUZZLE = "4 x 4 - 2 =";
const APP_CONFIG = ConfigUtilModule.get("AzureDotNetCoreUniqueDataEntryApi");
const CAN_IT_BE_ADDED_ASYNC_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.canItemBeAddedAsync}`;
const FIRST_NAME_INPUT = "firstNameInput";
const SECOND_NAME_INPUT = "secondNameInput";
const CONTACT_INPUT = "contactInput";
const POSTCODE_INPUT = "postCodeInput";

let _puzzleModule = PuzzleModalModule(14, "puzzleModal");
let _errorModule = new ErrorModalModule("errorModule");
let _duplicateEntryErrorModule = new ErrorModalModule("duplicateEntryErrorModule");
let _keyGeneratorModule = new KeyGeneratorModule();
let _charFilterModule = new CharFilterModule();

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
      showSpinner: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete= this.handleDelete.bind(this);
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
        contact: _charFilterModule.filter(contact, /[0-9]/),
        postCode: _charFilterModule.filter(postCode, /\w/),
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
          _duplicateEntryErrorModule.show();
          this.setState({
            showSpinner: false
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

  componentDidMount() {
    _puzzleModule.show();
  }

  render() {
    return (
      <div>
        <_errorModule.render/>
        <_duplicateEntryErrorModule.render
          title="Duplicate entry detected!"
          body="You cannot add a duplicate item."
        />
        <SpinnerModule
          show={this.state.showSpinner}
        />
        <_puzzleModule.render
          puzzle={PUZZLE}
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
                    let key = _keyGeneratorModule.generate(`${item.secondName} ${item.contact} ${item.postCode}`);
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
            <form onSubmit={this.handleSubmit} autoComplete="off">
              <label>Add an Item</label>
              <div className="form-row align-items-center">
                <div className="col-lg-2">
                  <label className="sr-only" htmlFor={FIRST_NAME_INPUT}>First Name</label>
                  <input required type="text" className="form-control mb-2" id={FIRST_NAME_INPUT} name={FIRST_NAME_INPUT} placeholder="First name" />
                </div>
                <div className="col-lg-2">
                  <label className="sr-only" htmlFor={SECOND_NAME_INPUT}>Second Name</label>
                  <input required type="text" className="form-control mb-2" id={SECOND_NAME_INPUT}  name={SECOND_NAME_INPUT} placeholder="Second name" />
                </div>
                <div className="col-lg-2">
                  <label className="sr-only" htmlFor={CONTACT_INPUT}>Contact</label>
                  <input required type="text" className="form-control mb-2" id={CONTACT_INPUT} name={CONTACT_INPUT} placeholder="Contact number" />
                </div>
                <div className="col-lg-2">
                  <label className="sr-only" htmlFor={POSTCODE_INPUT}>PostCode</label>
                  <input required type="text" className="form-control mb-2" id={POSTCODE_INPUT} name={POSTCODE_INPUT} placeholder="Postcode" />
                </div>
                <div className="col-lg-2">
                  <button id="addItem_submit" type="submit" className="btn btn-dark mb-2 w-100">Add</button>
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
  <UniqueDataEntryApp />,
  document.getElementById('result')
);