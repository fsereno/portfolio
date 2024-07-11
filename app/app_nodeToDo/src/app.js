"use strict;"

import '../sass/styles.scss';

import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './components/router';
import { LoginContextProvider } from './components/contextProviders/loginContextProvider';
import { SpinnerContextProvider } from '../../js/modules/react/spinnerComponent';
import { ToasterContextProvider } from '../../js/modules/react/toasterComponent';
import { ConfigContextProvider } from '../../js/modules/react/configContextProvider';
import { ItemsContextProvider } from './components/contextProviders/itemsContextProvider';

function App() {
  return (
    <ConfigContextProvider app="nodeToDo">
      <ToasterContextProvider>
        <LoginContextProvider>
          <ItemsContextProvider>
            <SpinnerContextProvider>
              <Router />
            </SpinnerContextProvider>
          </ItemsContextProvider>
        </LoginContextProvider>
      </ToasterContextProvider>
    </ConfigContextProvider>
  );
}

ReactDOM.createRoot(document.getElementById('result')).render(<App />);