"use strict;"

import '../sass/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './components/router';
import { EmailContextProvider } from './components/contextProviders/emailContextProvider';
import { ToasterContextProvider } from '../../js/modules/react/toasterComponent';
import { INBOX } from './constants';

function App() {
  return (
    <ToasterContextProvider>
      <EmailContextProvider dir={INBOX}>
        <Router />
      </EmailContextProvider>
    </ToasterContextProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('result'));