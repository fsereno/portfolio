"use strict;"

import '../sass/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { KeyGeneratorUtil } from '../../typeScript/Utils/keyGeneratorUtil/dist/index';
import { PuzzleModalComponent } from '../../js/modules/react/puzzleModalComponent.js';
import { SpinnerComponent } from '../../js/modules/react/spinnerComponent.js'
import { ErrorModalComponent } from '../../js/modules/react/errorModalComponent.js';
import { ConfigUtil } from "../../js/modules/utils/configUtil";
import { FormComponent } from "./formComponent";
import { jQueryAjaxUtil } from '../../js/modules/utils/jQueryAjaxUtil';
import { FilterUtil } from '../../typeScript/Utils/filterUtil/dist/index';

const PUZZLE = "7 x 2 + 1 =";
const APP_CONFIG = ConfigUtil.get("awsDotNetCoreEntitySortApi");
const SORT_SALARY_ASC_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.sortSalaryAsc}`;
const SORT_SALARY_DESC_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.sortSalaryDesc}`;

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
      showPuzzleModal: true,
      showErrorModal: false,
      isPuzzleValid: false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSalaryChange = this.handleSalaryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete= this.handleDelete.bind(this);
    this.handleSortSalaryAsc = this.handleSortSalaryAsc.bind(this);
    this.handleSortSalaryDesc = this.handleSortSalaryDesc.bind(this);
    this.handleIsPuzzleValid = this.handleIsPuzzleValid.bind(this);
    this.handlePuzzleModalClose = this.handlePuzzleModalClose.bind(this);
    this.handlePuzzleModalShow = this.handlePuzzleModalShow.bind(this);
    this.handleErrorModalClose = this.handleErrorModalClose.bind(this);
    this.handleBeforeAjax = this.handleBeforeAjax.bind(this);
    this.handleFailedAjax = this.handleFailedAjax.bind(this);
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

  handleGenerateKey(employee) {
    return KeyGeneratorUtil.generate(`${employee.name}_${employee.salary}`);
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
            <h3>Employees:</h3>
            <p className="lead">Add new employees to the table, sort using the column controls</p>
            <div className="table-responsive">
              <table className="table" id="employeeTable">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Name</th>
                    <th>
                        <span className="mr-2">Salary</span>
                        <button id="sortAsc" className="btn btn-sm btn-dark mr-1 px-0" type="button" onClick={this.handleSortSalaryAsc}><i className="fa fa-fw fa-sort-amount-asc"></i></button>
                        <button id="sortDesc" className="btn btn-sm btn-dark px-0" type="button" onClick={this.handleSortSalaryDesc}><i className="fa fa-fw fa-sort-amount-desc"></i></button>
                    </th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.employees.map((employee, index) => {
                    //let key = KeyGeneratorUtil.generate(`${employee.name} ${employee.salary}`);
                    return (
                      <tr key={employee.key} id={employee.key}>
                        <td>{employee.name}</td>
                        <td>{employee.displaySalary}</td>
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
            <p>No. of Employees: {this.state.counter}</p>
            <p>Employee to add: {this.state.name} {this.formatCurrency(this.state.salary)}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
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

ReactDOM.render(
  <EntitySort />,
  document.getElementById('result')
);