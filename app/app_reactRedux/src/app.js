"use strict;"

import '../sass/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDoList from './toDoList';

ReactDOM.createRoot(document.getElementById('result')).render(<ToDoList />);