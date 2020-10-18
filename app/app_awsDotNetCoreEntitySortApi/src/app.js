"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { PuzzleModule } from '../../js/puzzleModule.js';
import { SpinnerModule } from '../../js/spinnerModule.js'
import { ErrorModule } from '../../js/errorModule.js';

const API_ENDPOINT = "https://lni2f3xvgc.execute-api.eu-west-2.amazonaws.com/Prod/api/employees";
const DISABLED_BTN_CLASS = "disabled";
const PUZZLE = "4 x 4 - 2 =";

let _puzzleModule = PuzzleModule(14, "puzzleModal");
let _spinnerModule = SpinnerModule( { hideByDefault : true } );
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
      selectedIndex: 0,
      disabledBtnClass: DISABLED_BTN_CLASS,
      sortSalaryAsc: `${API_ENDPOINT}/sort/salary/asc`,
      sortSalaryDesc: `${API_ENDPOINT}/sort/salary/desc`
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSalaryChange = this.handleSalaryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete= this.handleDelete.bind(this);
    this.handlePuzzleSubmit = this.handlePuzzleSubmit.bind(this);
    this.handleSortSalaryAsc = this.handleSortSalaryAsc.bind(this);
    this.handleSortSalaryDesc = this.handleSortSalaryDesc.bind(this);
  }

  formatCurrency(value) {
    return new Intl.NumberFormat('GBP', { style: 'currency', currency: 'GBP' }).format(value);
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

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleSalaryChange(event) {
    this.setState({salary: event.target.value});
  }

  handleAjax(request) {
    if (_puzzleModule.getResult()) {
      $.ajax(request)
      .fail(() => {
        _errorModule.show();
        _spinnerModule.hide();
      });
    }
  }

  handleSortSalaryAsc() {
    _spinnerModule.show();
    let request = {
      url: this.state.sortSalaryAsc,
      type: "POST",
      contentType: 'application/json;',
      data: JSON.stringify({
        "employees":this.state.employees
      }),
      success: (response) => {
        this.setState({
          employees: response
        });
      }
    }
    this.handleAjax(request);
  }

  handleSortSalaryDesc() {
    _spinnerModule.show();
    let request = {
      url: this.state.sortSalaryDesc,
      type: "POST",
      contentType: 'application/json;',
      data: JSON.stringify({
        "employees":this.state.employees
      }),
      success: (response) => {
        this.setState({
          employees: response
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
    _spinnerModule.hide();
    return (
      <div>
        <_errorModule.Render/>
        <_spinnerModule.Render/>
        <_puzzleModule.Render
          event={this.handlePuzzleSubmit}
          label="First answer this question to unlock the API:"
          puzzle={PUZZLE}
          button="Submit"
          required={true}
          title="Are you a human?"
        />
        <div class="row splitter">
          <div class="col-lg-12">
            <h3>Employees:</h3>
            <p class="lead">Add new employees to the table, sort using the column controls</p>
            <table class="table" id="employeeTable">
              <thead class="bg-dark text-white">
                <tr>
                  <th>Name</th>
                  <th>
                      <span class="mr-2">Salary</span>
                      <button id="sortAsc" class={`${this.state.disabledBtnClass} btn btn-sm btn-dark mr-2`} type="button" onClick={this.handleSortSalaryAsc}><i class="fa fa-fw fa-sort-amount-asc"></i></button>
                      <button id="sortDesc" class={`${this.state.disabledBtnClass} btn btn-sm btn-dark`} type="button" onClick={this.handleSortSalaryDesc}><i class="fa fa-fw fa-sort-amount-desc"></i></button>
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {this.state.employees.map((employee, index) => {
                  return (
                    <tr>
                      <td>{employee.name}</td>
                      <td>{employee.displaySalary}</td>
                      <td><a href="#" class="badge badge-danger delete" data-index={index} onClick={this.handleDelete}>Delete</a></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div class="row splitter">
          <div class="col-lg-12">
            <p>No. of Employees: {this.state.counter}</p>
            <p>Employee to add: {this.state.name} {this.formatCurrency(this.state.salary)}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <form onSubmit={this.handleSubmit} autoComplete="off">
              <label>Add an Employee</label>
              <div class="form-row align-items-center">
                <div class="col-lg-2">
                  <label class="sr-only" for="nameInput">Name</label>
                  <input required type="text" class="form-control mb-2" id="nameInput" placeholder="John Doe" value={this.state.name} onChange={this.handleNameChange}/>
                </div>
                <div class="col-lg-2">
                  <label class="sr-only" for="salaryInput">Salary</label>
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">£</div>
                    </div>
                    <input required type="number" min="0" class="form-control" id="salaryInput" placeholder="0.00" value={this.state.salary} onChange={this.handleSalaryChange}/>
                  </div>
                </div>
                <div class="col-lg-2">
                  <button id="addEmployee_submit" type="submit" class={`btn btn-dark mb-2 ${this.state.disabledBtnClass} w-100`}>Add</button>
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