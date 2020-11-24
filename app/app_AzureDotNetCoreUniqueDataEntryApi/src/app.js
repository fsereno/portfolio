"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { KeyGeneratorModule } from '../../typeScript/Modules/keyGeneratorModule/app.js';
import { CharFilterModule } from '../../typeScript/Modules/charFilterModule/app.js';
import { PuzzleModule } from '../../js/puzzleModule.js';
import { SpinnerModule } from '../../js/spinnerModule.js'
import { ErrorModule } from '../../js/errorModule.js';
import { ConfigUtilModule } from "../../js/configUtilModule";

const PUZZLE = "4 x 4 - 2 =";
const APP_CONFIG = ConfigUtilModule.get("AzureDotNetCoreUniqueDataEntryApi");
const CAN_IT_BE_ADDED_ASYNC_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.canItemBeAddedAsync}`;

let _puzzleModule = PuzzleModule(14, "puzzleModal");
let _errorModule = ErrorModule("errorModule");
let _duplicateEntryErrorModule = ErrorModule("duplicateEntryErrorModule");
let _keyGeneratorModule = new KeyGeneratorModule();
let _charFilterModule = new CharFilterModule();

class UniqueDataEntryApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      secondName: '',
      contact: '',
      postCode: '',
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

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleSecondNameChange = this.handleSecondNameChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handlePostCodeChange = this.handlePostCodeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete= this.handleDelete.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value});
  }

  handleSecondNameChange(event) {
    this.setState({secondName: event.target.value});
  }

  handleContactChange(event) {
    this.setState({contact: event.target.value});
  }

  handlePostCodeChange(event) {
    this.setState({postCode: event.target.value});
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

  handleSubmit(event) {
    event.preventDefault();
    let data = {
      items: this.state.items,
      item: {
        firstName: this.state.firstName,
        secondName: this.state.secondName,
        contact: _charFilterModule.filter(this.state.contact, /[0-9]/),
        postCode: _charFilterModule.filter(this.state.postCode, /\w/),
      }
    }

    let request = {
      url: CAN_IT_BE_ADDED_ASYNC_ENDPOINT,
      data: JSON.stringify(data),
      type: "POST",
      success: (response) => {
        if (response === true) {
          let array = [...this.state.items];

          array.push({
            firstName: data.item.firstName,
            secondName: data.item.secondName,
            contact: data.item.contact,
            postCode: data.item.postCode
          });

          this.setState({
            items: array,
            firstName: "",
            secondName: "",
            contact: "",
            postCode: "",
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
        <_errorModule.Render/>
        <_duplicateEntryErrorModule.Render
          title="Duplicate entry detected!"
          body="You cannot add a duplicate item."
        />
        <SpinnerModule
          show={this.state.showSpinner}
        />
        <_puzzleModule.Render
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
                  <label className="sr-only" htmlFor="firstNameInput">First Name</label>
                  <input required type="text" className="form-control mb-2" id="firstNameInput" placeholder="First name" value={this.state.firstName} onChange={this.handleFirstNameChange}/>
                </div>
                <div className="col-lg-2">
                  <label className="sr-only" htmlFor="secondNameInput">Second Name</label>
                  <input required type="text" className="form-control mb-2" id="secondNameInput" placeholder="Second name" value={this.state.secondName} onChange={this.handleSecondNameChange}/>
                </div>
                <div className="col-lg-2">
                  <label className="sr-only" htmlFor="contactInput">Contact</label>
                  <input required type="text" className="form-control mb-2" id="contactInput" placeholder="Contact number" value={this.state.contact} onChange={this.handleContactChange}/>
                </div>
                <div className="col-lg-2">
                  <label className="sr-only" htmlFor="postCodeInput">PostCode</label>
                  <input required type="text" className="form-control mb-2" id="postCodeInput" placeholder="Postcode" value={this.state.postCode} onChange={this.handlePostCodeChange}/>
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