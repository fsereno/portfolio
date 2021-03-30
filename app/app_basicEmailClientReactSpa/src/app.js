"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './components/router';

function App() {
  return (
    <>
        { console.log("render app")}
        <Router/>
    </>
  );
}

ReactDOM.render(<App />,document.getElementById('result'));