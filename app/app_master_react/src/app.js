"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';

class ToDoListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: [],
      counterLimit: 10,
      counter: 0,
      selectedIndex: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete= this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value.length > 0 && this.state.counter < this.state.counterLimit) {
      this.state.list.push(this.state.value);
      this.setState({
        list: this.state.list,
        value: "",
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

  render() {
    return (
      <div>
        <div class="row splitter">
          <div class="col-lg-4">
            <h3>Result:</h3>
            <ul id="toDoList" class="list-group">
              {this.state.list.map((item, index) => {
                return <li class="list-group-item d-flex justify-content-between align-items-center">{item} <a href="#" class="badge badge-danger delete" data-index={index} onClick={this.handleDelete}>Delete</a></li>
              })}
          </ul>
          </div>
        </div>
        <div class="row splitter">
          <div class="col-lg-12">
            <p>Items: {this.state.counter}</p>
            <p>Item to add: {this.state.value}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <form onSubmit={this.handleSubmit} autoComplete="off">
              <div class="form-group">
                  <label for="itemInput">
                    Input
                  </label>
                  <input class="form-control" id="itemInput" name="itemInput" type="text" placeholder="Add to list..." required value={this.state.value} onChange={this.handleChange} />
              </div>
              <button id="submit" class="btn btn-dark" type="submit">Add item</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <ToDoListForm />,
  document.getElementById('result')
);