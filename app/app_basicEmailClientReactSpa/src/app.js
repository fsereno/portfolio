"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './components/router';
import { EmailContextProvider } from './components/contextProviders/emailContextProvider';
import { ToasterContextProvider } from './components/contextProviders/toasterContextProvider';
import { Toaster } from '../../js/modules/react/toaster';

function App() {
  return (
    <ToasterContextProvider>
      <EmailContextProvider>
        <Router />
        <Toaster />
      </EmailContextProvider>
    </ToasterContextProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('result'));