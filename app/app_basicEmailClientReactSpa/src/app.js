"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './components/router';
import { GlobalContextProvider } from './components/globalContextProvider';
import { ToasterContextProvider } from './components/toasterContextProvider';
import { Toaster } from '../../js/modules/react/toaster';

function App() {
  return (
    <GlobalContextProvider>
      <ToasterContextProvider>
        { console.log("render app")}
        <Router />
        <Toaster />
      </ToasterContextProvider>
    </GlobalContextProvider>
  );
}

ReactDOM.render(<App />,document.getElementById('result'));