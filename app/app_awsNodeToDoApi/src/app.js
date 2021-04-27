"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './components/router';
import { LoginContextProvider } from './components/contextProviders/loginContextProvider';
import { SpinnerContextProvider } from '../../js/modules/react/spinnerComponent';
import { ToasterContextProvider } from '../../js/modules/react/toasterComponent';

function App() {
  return (
    <ToasterContextProvider>
      <SpinnerContextProvider>
        <LoginContextProvider>
          <Router />
        </LoginContextProvider>
      </SpinnerContextProvider>
    </ToasterContextProvider>
  );
}

ReactDOM.render(<App />,document.getElementById('result'));