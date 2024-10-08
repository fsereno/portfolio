"use strict;"

import '../../sass/includes/styleDeps.scss';
import '../sass/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { KeyGeneratorUtil } from '../../typeScript/Utils/keyGeneratorUtil/dist/index';
import { SpinnerComponent } from '../../js/modules/react/spinnerComponent.js'
import { ErrorModalComponent } from '../../js/modules/react/errorModalComponent.js';
import { ConfigUtil } from '../../js/modules/utils/configUtil';
import { FormComponent } from './formComponent';
import { jQueryAjaxUtil } from '../../js/modules/utils/jQueryAjaxUtil';
import { DeploymentModalComponent } from '../../js/modules/react/deploymentModalComponent.js';
import { DeploymentUtil } from '../../js/modules/utils/deploymentUtil';

const CONFIG = ConfigUtil.get();
const APP_CONFIG = ConfigUtil.get("uniqueDataEntry");
const CAN_IT_BE_ADDED_ASYNC_ENDPOINT = `${CONFIG.apiRoot}${APP_CONFIG.endpoints.canItemBeAddedAsync}`;
const FIRST_NAME_INPUT = "firstNameInput";
const SECOND_NAME_INPUT = "secondNameInput";
const CONTACT_INPUT = "contactInput";
const POSTCODE_INPUT = "postCodeInput";

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
      showDuplicateErrorModal: false,
      showDeploymentModal: DeploymentUtil.isNotCloud()
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleErrorModalClose = this.handleErrorModalClose.bind(this);
    this.handleDuplicateErrorModalClose = this.handleDuplicateErrorModalClose.bind(this);
    this.handleBeforeAjax = this.handleBeforeAjax.bind(this);
    this.handleFailedAjax = this.handleFailedAjax.bind(this);
    this.handleDeploymentModalClose = this.handleDeploymentModalClose.bind(this);
    this.handleDeploymentModalShow = this.handleDeploymentModalShow.bind(this);
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
    jQueryAjaxUtil.handleAjax(request, DeploymentUtil.isCloud(), this.handleBeforeAjax, this.handleFailedAjax, this.handleDeploymentModalShow);
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
        contact: contact,
        postCode: postCode,
      }
    }

    let request = {
      url: CAN_IT_BE_ADDED_ASYNC_ENDPOINT,
      data: JSON.stringify(data),
      type: "POST",
      contentType: "application/json",
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

  handleDeploymentModalClose() {
    this.setState({
      showDeploymentModal: false
    })
  }

  handleDeploymentModalShow() {
    this.setState({
      showDeploymentModal: true
    })
  }

  render() {
    return (
      <div>
        <DeploymentModalComponent
          show={this.state.showDeploymentModal}
          handleClose={this.handleDeploymentModalClose}
        />
        <ErrorModalComponent
          id="errorModule"
          show={this.state.showErrorModal}
          handleClose={this.handleErrorModalClose}
        />
        <ErrorModalComponent
          id="duplicateEntryErrorModule"
          show={this.state.showDuplicateErrorModal}
          title="Duplicate entry detected!"
          body="You cannot add a duplicate item."
          handleClose={this.handleDuplicateErrorModalClose}
        />
        <SpinnerComponent
          show={this.state.showSpinner}
        />
        <div className="row splitter">
          <div className="col-lg-12">
            <p>Add new items to the table. Only unique entries are allowed.</p>
            <div className="table-responsive">
              <table className="table" id="itemTable">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>First name</th>
                    <th>Second name</th>
                    <th>Contact</th>
                    <th>Postcode</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.items.map((item, index) => {
                    let key = KeyGeneratorUtil.generate(`${item.secondName} ${item.contact} ${item.postCode}`);
                    return (
                      <tr key={key}>
                        <td>{item.firstName}</td>
                        <td>{item.secondName}</td>
                        <td>{item.contact}</td>
                        <td>{item.postCode}</td>
                        <td><a href="#" className="badge bg-danger delete" data-index={index} onClick={this.handleDelete}>Delete</a></td>
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
            <FormComponent handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('result')).render(<UniqueDataEntryApp />);