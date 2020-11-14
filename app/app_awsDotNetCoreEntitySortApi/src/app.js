"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { PuzzleModule } from '../../js/puzzleModule.js';
import { SpinnerModule } from '../../js/spinnerModule.js'
import { ErrorModule } from '../../js/errorModule.js';
import { ConfigUtilModule } from "../../js/configUtilModule";

const PUZZLE = "4 x 4 - 2 =";
const APP_CONFIG = ConfigUtilModule.get("awsDotNetCoreEntitySortApi");
const SORT_SALARY_ASC_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.sortSalaryAsc}`;
const SORT_SALARY_DESC_ENDPOINT = `${APP_CONFIG.endpoints.api}/${APP_CONFIG.endpoints.sortSalaryDesc}`;

let _puzzleModule = PuzzleModule(14, "puzzleModal");
let _errorModule = ErrorModule("errorModule");

class EntitySort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
      employees: [{
        name: "John Doe",
        salary: 10000,
        displaySalary: "£10,000.00"
      }],
      counterLimit: 10,
      counter: 1,
      showSpinner: false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSalaryChange = this.handleSalaryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete= this.handleDelete.bind(this);
    this.handleSortSalaryAsc = this.handleSortSalaryAsc.bind(this);
    this.handleSortSalaryDesc = this.handleSortSalaryDesc.bind(this);
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
    if (this.state.name.length > 0 && this.state.salary.length > 0 && this.state.counter < this.state.counterLimit) {
      this.state.employees.push({
          name: this.state.name,
          salary: Number(this.state.salary),
          displaySalary: this.formatCurrency(this.state.salary)
        });
      this.setState({
        employees: this.state.employees,
        name: "",
        salary: "",
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

  componentDidMount() {
    _puzzleModule.show();
  }

  render() {
    return (
      <div>
        <_errorModule.Render/>
        <SpinnerModule
          show={this.state.showSpinner}
        />
        <_puzzleModule.Render
          puzzle={PUZZLE}
        />
        <div className="row splitter">
          <div className="col-lg-12">
            <h3>Employees:</h3>
            <p className="lead">Add new employees to the table, sort using the column controls</p>
            <div class="table-responsive">
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
                    return (
                      <tr key={`${index}-${employee.name}`}>
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
            <form onSubmit={this.handleSubmit} autoComplete="off">
              <label>Add an Employee</label>
              <div className="form-row align-items-center">
                <div className="col-lg-2">
                  <label className="sr-only" for="nameInput">Name</label>
                  <input required type="text" className="form-control mb-2" id="nameInput" placeholder="John Doe" value={this.state.name} onChange={this.handleNameChange}/>
                </div>
                <div className="col-lg-2">
                  <label className="sr-only" for="salaryInput">Salary</label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">£</div>
                    </div>
                    <input required type="number" min="0" className="form-control" id="salaryInput" placeholder="0.00" value={this.state.salary} onChange={this.handleSalaryChange}/>
                  </div>
                </div>
                <div className="col-lg-2">
                  <button id="addEmployee_submit" type="submit" className="btn btn-dark mb-2 w-100">Add</button>
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
  <EntitySort />,
  document.getElementById('result')
);