"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './components/router';
import { ToasterContextProvider } from './components/contextProviders/toasterContextProvider';
import { Toaster } from '../../js/modules/react/toaster';
import { LoginContextProvider } from './components/contextProviders/loginContextProvider';

function App() {
  return (
    <ToasterContextProvider>
      <LoginContextProvider>
        <Router />
        <Toaster/>
      </LoginContextProvider>
    </ToasterContextProvider>
  );
}

ReactDOM.render(<App />,document.getElementById('result'));