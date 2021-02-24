"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './components/router';

function App() {
  return (
    <Router />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('result')
);