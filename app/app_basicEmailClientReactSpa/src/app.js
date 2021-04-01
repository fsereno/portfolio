"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './components/router';
import { GlobalContextProvider } from './components/contextProviders/globalContextProvider';
import { ToasterContextProvider } from './components/contextProviders/toasterContextProvider';
import { Toaster } from '../../js/modules/react/toaster';

function App() {
  return (
      <ToasterContextProvider>
        <GlobalContextProvider>
          <Router />
          <Toaster/>
      </GlobalContextProvider>
    </ToasterContextProvider>
  );
}

ReactDOM.render(<App />,document.getElementById('result'));