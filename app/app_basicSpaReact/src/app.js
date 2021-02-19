"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './router';

function App() {
  return (
    <Router />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('result')
);