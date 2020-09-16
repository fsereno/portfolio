"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import PuzzleModule from '../../js/puzzleModule';

const API_ENDPOINT = "https://6pzl3f4421.execute-api.eu-west-2.amazonaws.com/Prod/api/basket";
const API_SUBMIT_CLASSES_VALID = "btn btn-dark api-submit mb-2";
const API_SUBMIT_CLASSES_NOT_VALID = "btn btn-dark disabled api-submit mb-2";
const PUZZLE = "4 x 4 - 1 = ?";

PuzzleModule.set(15);

class EntitySort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
      list: [{
        name: "John Doe",
        salary: 10000,
        displaySalary: "£10,000"
      }],
      counterLimit: 10,
      counter: 1,
      selectedIndex: 0,
      puzzle: PUZZLE,
      isValid: false,
      isValidBtnClasses: API_SUBMIT_CLASSES_NOT_VALID
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSalaryChange = this.handleSalaryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete= this.handleDelete.bind(this);
    this.handlePuzzleSubmit = this.handlePuzzleSubmit.bind(this);
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
        isValidBtnClasses: API_SUBMIT_CLASSES_VALID
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

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name.length > 0 && this.state.salary.length > 0 && this.state.counter < this.state.counterLimit) {
      this.state.list.push({
          name: this.state.name,
          salary: this.state.salary,
          displaySalary: this.formatCurrency(this.state.salary)
        });
      this.setState({
        list: this.state.list,
        name: "",
        salary: "",
        counter: this.state.counter + 1
      });
    }
  }

  handleDelete(event) {
    event.preventDefault();
    let index = Number(event.target.dataset.index);
    this.state.list.splice(index, 1);
    this.setState({
      list: this.state.list,
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
          isValidBtnClasses={API_SUBMIT_CLASSES_VALID}
          required={true}
          title="Are you a human?"
        />
        <div class="row splitter">
          <div class="col-lg-4">
            <h3>Employees:</h3>
            <ul class="list-group">
              {this.state.list.map((employee, index) => {
                return <li class="list-group-item d-flex justify-content-between align-items-center">{employee.name}, {employee.displaySalary} <a href="#" class="badge badge-danger delete" data-index={index} onClick={this.handleDelete}>Delete</a></li>
              })}
          </ul>
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
                <div class="col-auto">
                  <label class="sr-only" for="nameInput">Name</label>
                  <input required type="text" class="form-control mb-2" id="nameInput" placeholder="John Doe" value={this.state.name} onChange={this.handleNameChange}/>
                </div>
                <div class="col-auto">
                  <label class="sr-only" for="salaryInput">Salary</label>
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">£</div>
                    </div>
                    <input required type="number" min="0" class="form-control" id="salaryInput" placeholder="0.00" value={this.state.salary} onChange={this.handleSalaryChange}/>
                  </div>
                </div>
                <div class="col-auto">
                  <button type="submit" class={this.state.isValidBtnClasses}>Add</button>
                </div>
                <div class="col-auto">
                  <button type="button" class={this.state.isValidBtnClasses}>Sort by Salary</button>
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