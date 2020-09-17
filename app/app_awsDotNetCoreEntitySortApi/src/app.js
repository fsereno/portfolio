"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import PuzzleModule from '../../js/puzzleModule';

const API_ENDPOINT = "https://lni2f3xvgc.execute-api.eu-west-2.amazonaws.com/Prod/api/values";
const DISABLED_BTN_CLASS = "disabled";
const PUZZLE = "4 x 4 - 1 = ?";

PuzzleModule.set(15);

class EntitySort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
      employees: [{
        name: "John Doe",
        salary: 10000,
        displaySalary: "£10,000"
      }],
      counterLimit: 10,
      counter: 1,
      selectedIndex: 0,
      puzzle: PUZZLE,
      isValid: false,
      disabledBtnClass: DISABLED_BTN_CLASS,
      sortSalaryHigh: `${API_ENDPOINT}/sort/salary/high`,
      sortSalaryLow: `${API_ENDPOINT}/sort/salary/low`
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSalaryChange = this.handleSalaryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete= this.handleDelete.bind(this);
    this.handlePuzzleSubmit = this.handlePuzzleSubmit.bind(this);
    this.handleSortSalaryHigh = this.handleSortSalaryHigh.bind(this);
    this.handleSortSalaryLow = this.handleSortSalaryLow.bind(this);
  }

  formatCurrency(value) {
    return new Intl.NumberFormat('GBP', { style: 'currency', currency: 'GBP' }).format(value);
  }

  handlePuzzleSubmit(event) {
    event.preventDefault();
    let input = Number(event.target.elements[0].value);
    let isValid = PuzzleModule.isValid(input);
    if (isValid) {
      this.setState({
        isValid: true,
        disabledBtnClass: ""
      })
      PuzzleModule.hide();
    }
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleSalaryChange(event) {
    this.setState({salary: event.target.value});
  }

  handleAjax(request) {
    if (this.state.isValid) {
      $.ajax(request);
    }
  }

  handleSortSalaryHigh() {
    let request = {
      url: this.state.sortSalaryHigh,
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

  handleSortSalaryLow() {

  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name.length > 0 && this.state.salary.length > 0 && this.state.counter < this.state.counterLimit) {
      this.state.employees.push({
          name: this.state.name,
          salary: this.state.salary,
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

  componentDidMount(){
    PuzzleModule.show();
  }

  render() {
    return (
      <div>
        <PuzzleModule.template
          event={this.handlePuzzleSubmit}
          label="First answer this question to unlock the API"
          placeholder={this.state.puzzle}
          button="Submit"
          required={true}
          title="Are you a human?"
        />
        <div class="row splitter">
          <div class="col-lg-12">
            <h3>Employees:</h3>
            <p class="lead">Add new employees and then sort using the column controls</p>
            <table class="table" id="employeeTable">
              <thead class="bg-dark text-white">
                <tr>
                  <th>Name</th>
                  <th>
                      <span class="mr-2">Salary</span>
                      <button class={`${this.state.disabledBtnClass} btn btn-sm btn-dark mr-2`} type="button" onClick={this.handleSortSalaryHigh}><i class="fa fa-fw fa-sort-amount-asc"></i></button>
                      <button class={`${this.state.disabledBtnClass} btn btn-sm btn-dark`} type="button" onClick={this.handleSortSalaryLow}><i class="fa fa-fw fa-sort-amount-desc"></i></button>
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
                  <button type="submit" class={`btn btn-dark mb-2 ${this.state.disabledBtnClass} w-100`}>Add</button>
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