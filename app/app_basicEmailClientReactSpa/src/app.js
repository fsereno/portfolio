"use strict;"

import '../../js/includes/jsDeps.js';
import '../../sass/includes/styleDeps.scss'
import '../sass/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './components/router';
import { EmailContextProvider } from './components/contextProviders/emailContextProvider';
import { ToasterContextProvider } from '../../js/modules/react/toasterComponent';

function App() {
  return (
    <ToasterContextProvider>
      <EmailContextProvider>
        <Router />
      </EmailContextProvider>
    </ToasterContextProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('result'));