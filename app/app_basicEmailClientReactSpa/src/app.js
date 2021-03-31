"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './components/router';
import { GlobalContextProvider } from './components/globalContextProvider';
import { ToasterContextProvider } from './components/toasterContextProvider';
import { Toaster } from '../../js/modules/react/toaster';

function App() {
  return (
      <ToasterContextProvider>
        <GlobalContextProvider>
          { console.log("render app")}
          <Router />
          <Toaster/>
      </GlobalContextProvider>
    </ToasterContextProvider>
  );
}

ReactDOM.render(<App />,document.getElementById('result'));