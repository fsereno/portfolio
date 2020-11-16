"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { KeyGeneratorModule } from '../../typeScript/Modules/keyGeneratorModule/app.js';
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import undoable, { ActionCreators } from 'redux-undo';

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

const undoableTodoReducer = undoable(todoReducer);

const store = configureStore({
  reducer: undoableTodoReducer
});

let _keyGeneratorModule = new KeyGeneratorModule();

class ToDoListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      counterLimit: 10,
      counter: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
    this.handleRedo = this.handleRedo.bind(this);
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
        counter: store.getState().present.length
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
      counter: store.getState().present.length
    });
  }

  handleUndo() {
    store.dispatch(ActionCreators.undo());
    this.setState({
      counter: store.getState().present.length
    });
  }

  handleRedo() {
    store.dispatch(ActionCreators.redo());
    this.setState({
      counter: store.getState().present.length
    });
  }

  render() {
    return (
      <div>
        <div className="row splitter">
          <div className="col-lg-4">
            <h3>Result:</h3>
            <ul id="toDoList" className="list-group">
              {store.getState().present.map((item, index) => {
                  let key = _keyGeneratorModule.generate(item);
                  console.log(key);
                  return <li key={key} className="list-group-item d-flex justify-content-between align-items-center">{item} <a href="#" className="badge badge-danger delete" data-index={index} onClick={this.handleDelete}>Delete</a></li>
                })}
          </ul>
          </div>
        </div>
        <div className="row splitter">
          <div className="col-lg-12">
            <p>Items: {this.state.counter}</p>
            <p>Item to add: {this.state.value}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <form onSubmit={this.handleSubmit} autoComplete="off">
              <div className="form-group">
                  <label htmlFor="itemInput">
                    Input
                  </label>
                  <input className="form-control" id="itemInput" name="itemInput" type="text" placeholder="Add to list..." required value={this.state.value} onChange={this.handleChange} />
              </div>
              <button id="submit" className="btn btn-dark mr-2" type="submit">Add item</button>
              <button id="undo" className="btn btn-danger mr-2" type="button" onClick={this.handleUndo}>Undo</button>
              <button id="redo" className="btn btn-dark mr-2" type="button" onClick={this.handleRedo}>Redo</button>
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