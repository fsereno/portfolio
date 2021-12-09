"use strict;"

import "../sass/styles.scss";

import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './toDoList';

ReactDOM.render(
  <ToDoList list={['test']} />,
  document.getElementById('result')
);