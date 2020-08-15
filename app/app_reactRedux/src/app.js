"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const addToDo = createAction("ADD_TODO");
const removeToDo = createAction("REMOVE_TODO")

const todoReducer = createReducer([], {
  ADD_TODO: (state, action) => {
    state.push(action.payload);
  },
  REMOVE_TODO: (state, action) => {
    state.splice(action.payload, 1)
  }
});

const store = configureStore({
  reducer: todoReducer
});

class ToDoListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
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

      let action = addToDo();
      action = addToDo(this.state.value);

      store.dispatch( action );

      this.setState({
        value: "",
        counter: this.state.counter + 1
      });
    }
  }

  handleDelete(event) {
    event.preventDefault();
    let index = Number(event.target.dataset.index);

    let action = removeToDo();
    action = removeToDo(index);

    store.dispatch(action);
    this.setState({
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
              {store.getState().map((item, index) => {
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
          <div class="col-lg-3">
            <form onSubmit={this.handleSubmit} autoComplete="off">
              <div class="form-group">
                  <label for="itemInput">
                    Input:
                  </label>
                  <input class="form-control" id="itemInput" name="itemInput" type="text" placeholder="Add to list..." required value={this.state.value} onChange={this.handleChange} />
              </div>
              <button id="submit" class="btn btn-primary" type="submit">Add item</button>
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