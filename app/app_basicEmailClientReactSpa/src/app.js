"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './components/router';
import { ToasterContainer } from './components/toasterContainer';

function App() {
  return (
    <>
        { console.log("render app")}
        <Router/>
        <ToasterContainer/>
    </>
  );
}

ReactDOM.render(<App />,document.getElementById('result'));