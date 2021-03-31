"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './components/router';
import { GlobalContextProvider } from './components/globalContextProvider';
import { ToasterContextProvider } from './components/toasterContextProvider';
import { EmailClientContextProvider } from './components/emailClientContextProvider';
import { EmailModalContextProvider } from './components/emailModalContextProvider';
import { EmailClientHandlerContextProvider } from './components/emailClientHandlerContextProvider';
import { Toaster } from '../../js/modules/react/toaster';

function App() {
  return (
    <GlobalContextProvider>
      <ToasterContextProvider>
        <EmailClientContextProvider>
          <EmailModalContextProvider>
            <EmailClientHandlerContextProvider>
              { console.log("render app")}
              <Router />
            </EmailClientHandlerContextProvider>
          </EmailModalContextProvider>
        </EmailClientContextProvider>
      </ToasterContextProvider>
    </GlobalContextProvider>
  );
}

ReactDOM.render(<App />,document.getElementById('result'));