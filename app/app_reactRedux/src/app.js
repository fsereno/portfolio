"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { KeyGeneratorUtil } from '../../typeScript/Utils/keyGeneratorUtil/dist/index';
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import undoable, { ActionCreators } from 'redux-undo';
import { FormComponent } from './formComponent';

const _addToDo = createAction("ADD_TODO");
const _removeToDo = createAction("REMOVE_TODO")

const _todoReducer = createReducer([], {
  ADD_TODO: (state, action) => {
    state.push(action.payload);
  },
  REMOVE_TODO: (state, action) => {
    state.splice(action.payload, 1)
  }
});

const _undoableTodoReducer = undoable(_todoReducer);

const _store = configureStore({
  reducer: _undoableTodoReducer
});
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
    if (this.state.counter < this.state.counterLimit) {

      let action = _addToDo();
      action = _addToDo(this.state.value);

      _store.dispatch( action );

      this.setState({
        value: "",
        counter: _store.getState().present.length
      });
    }
  }

  handleDelete(event) {
    event.preventDefault();
    let index = Number(event.target.dataset.index);

    let action = _removeToDo();
    action = _removeToDo(index);

    _store.dispatch(action);
    this.setState({
      counter: _store.getState().present.length
    });
  }

  handleUndo() {
    _store.dispatch(ActionCreators.undo());
    this.setState({
      counter: _store.getState().present.length
    });
  }

  handleRedo() {
    _store.dispatch(ActionCreators.redo());
    this.setState({
      counter: _store.getState().present.length
    });
  }

  render() {
    return (
      <div>
        <div className="row splitter">
          <div className="col-lg-4">
            <h3>Result:</h3>
            <ul id="toDoList" className="list-group">
              {_store.getState().present.map((item, index) => {
                  let key = KeyGeneratorUtil.generate(item);
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
          <div className="col-lg-6">
            <FormComponent
              value={this.state.value}
              onChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              items={_store.getState().present}
              handleUndo={this.handleUndo}
              handleRedo={this.handleRedo}
            />
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