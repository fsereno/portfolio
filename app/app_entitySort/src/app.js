"use strict;"

import '../../sass/includes/styleDeps.scss';
import '../sass/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { KeyGeneratorUtil } from '../../typeScript/Utils/keyGeneratorUtil/dist/index';
import { SpinnerComponent } from '../../js/modules/react/spinnerComponent.js'
import { ErrorModalComponent } from '../../js/modules/react/errorModalComponent.js';
import { ConfigUtil } from "../../js/modules/utils/configUtil";
import { FormComponent } from "./formComponent";
import { jQueryAjaxUtil } from '../../js/modules/utils/jQueryAjaxUtil';
import { FilterUtil } from '../../typeScript/Utils/filterUtil/dist/index';
import { EmployeeTableComponent } from './employeeTableComponent';
import { DeploymentModalComponent } from '../../js/modules/react/deploymentModalComponent.js';
import { DeploymentUtil } from '../../js/modules/utils/deploymentUtil';

const CONFIG = ConfigUtil.get();
const APP_CONFIG = ConfigUtil.get("entitySort");
const SORT_SALARY_ASC_ENDPOINT = `${CONFIG.apiRoot}${APP_CONFIG.endpoints.sortSalaryAsc}`;
const SORT_SALARY_DESC_ENDPOINT = `${CONFIG.apiRoot}${APP_CONFIG.endpoints.sortSalaryDesc}`;

class EntitySort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
      employees: [],
      counterLimit: 10,
      counter: 1,
      showSpinner: false,
      showErrorModal: false,
      showDeploymentModal: DeploymentUtil.isNotCloud()
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSalaryChange = this.handleSalaryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete= this.handleDelete.bind(this);
    this.handleSortSalaryAsc = this.handleSortSalaryAsc.bind(this);
    this.handleSortSalaryDesc = this.handleSortSalaryDesc.bind(this);
    this.handleErrorModalClose = this.handleErrorModalClose.bind(this);
    this.handleBeforeAjax = this.handleBeforeAjax.bind(this);
    this.handleFailedAjax = this.handleFailedAjax.bind(this);
    this.handleDeploymentModalClose = this.handleDeploymentModalClose.bind(this);
    this.handleDeploymentModalShow = this.handleDeploymentModalShow.bind(this);
  }

  formatCurrency(value) {
    return new Intl.NumberFormat('GBP', { style: 'currency', currency: 'GBP' }).format(value);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleSalaryChange(event) {
    this.setState({salary: event.target.value});
  }

  handleBeforeAjax() {
    this.setState({
      showSpinner: true
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

  handleSortSalaryAsc() {
    let request = {
      url: SORT_SALARY_ASC_ENDPOINT,
      type: "POST",
      contentType: 'application/json;',
      data: JSON.stringify({
        "employees":this.state.employees
      }),
      success: (response) => {
        this.setState({
          employees: response,
          showSpinner: false
        });
      }
    }
    this.handleAjax(request);
  }

  handleSortSalaryDesc() {
    let request = {
      url: SORT_SALARY_DESC_ENDPOINT,
      type: "POST",
      contentType: 'application/json;',
      data: JSON.stringify({
        "employees":this.state.employees
      }),
      success: (response) => {
        this.setState({
          employees: response,
          showSpinner: false
        });
      }
    }
    this.handleAjax(request);
  }

  handleSubmit(event) {
    event.preventDefault();

    let employee = {
      key: "",
      name: this.state.name,
      salary: Number(this.state.salary),
      displaySalary: this.formatCurrency(this.state.salary)
    }

    employee.key = this.handleGenerateKey(employee);

    let keys = this.state.employees.map(x => x.key);
    let isUniqueEntry = FilterUtil.isUniqueInArray(keys, employee.key);

    if (isUniqueEntry && this.state.counter < this.state.counterLimit) {

      let employees = [...this.state.employees];

      employees.push(employee);

      this.setState({
        name: "",
        salary: "",
        employees: employees,
        counter: this.state.counter + 1
      });
    }
  }

  handleDelete(event) {
    event.preventDefault();
    let index = Number(event.target.dataset.index);
    this.state.employees.splice(index, 1);
    this.setState({
      employees: this.state.employees,
      counter: this.state.counter - 1
    });
  }

  handleErrorModalClose() {
    this.setState({
      showErrorModal: false
    })
  }

  handleGenerateKey(employee) {
    return KeyGeneratorUtil.generate(`${employee.name}_${employee.salary}`);
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

  componentDidMount() {

    let employee = {
      key: "",
      name: "John Doe",
      salary: 10000,
      displaySalary: "£10,000.00"
    }

    employee.key = this.handleGenerateKey(employee);

    let employees = [...this.state.employees];
    employees.push(employee);

    this.setState({
      employees: employees
    });
  }

  render() {
    return (
      <div>
        <ErrorModalComponent
          id="errorModal"
          show={this.state.showErrorModal}
          handleClose={this.handleErrorModalClose}
        />
        <DeploymentModalComponent
          show={this.state.showDeploymentModal}
          handleClose={this.handleDeploymentModalClose}
        />
        <SpinnerComponent
          show={this.state.showSpinner}
        />
        <EmployeeTableComponent
          employees={this.state.employees}
          handleDelete={this.handleDelete}
          handleSortSalaryDesc={this.handleSortSalaryDesc}
          handleSortSalaryAsc={this.handleSortSalaryAsc}
        />
        <div className="row splitter">
          <div className="col-lg-12">
            <p>No. of Employees: {this.state.counter}</p>
            <p>Employee to add: {this.state.name} {this.formatCurrency(this.state.salary)}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <FormComponent
              handleSubmit={this.handleSubmit}
              handleNameChange={this.handleNameChange}
              handleSalaryChange={this.handleSalaryChange}
              name={this.state.name}
              salary={this.state.salary}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('result')).render(<EntitySort />);