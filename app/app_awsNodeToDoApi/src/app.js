"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './components/router';
import { ToasterContextProvider } from './components/contextProviders/toasterContextProvider';
import { Toaster } from '../../js/modules/react/toaster';
import { LoginContextProvider } from './components/contextProviders/loginContextProvider';
import { SpinnerContextProvider } from '../../js/modules/react/spinnerComponent';

function App() {
  return (
    <ToasterContextProvider>
      <SpinnerContextProvider>
        <LoginContextProvider>
          <Router />
          <Toaster/>
        </LoginContextProvider>
      </SpinnerContextProvider>
    </ToasterContextProvider>
  );
}

ReactDOM.render(<App />,document.getElementById('result'));