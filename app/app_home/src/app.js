"use strict;"

import "regenerator-runtime/runtime";

import React from 'react';
import ReactDOM from 'react-dom';
import { ApplicationsContextProvider } from './components/contextProviders/applicationsContextProvider';
import { ContentContainer } from './components/contentContainer';
import { IntroContainer } from './components/introContainer';
import { SpinnerContextProvider } from "./components/contextProviders/spinnerContextProvider";
import { ConfigContextProvider } from "./components/contextProviders/configContextProvider";
import { AppContainer } from "./components/appContainer";

function App() {
  return (
    <ConfigContextProvider>
      <ApplicationsContextProvider>
        <SpinnerContextProvider>
          <AppContainer>
            <IntroContainer />
            <ContentContainer />
          </AppContainer>
        </SpinnerContextProvider>
      </ApplicationsContextProvider>
    </ConfigContextProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));