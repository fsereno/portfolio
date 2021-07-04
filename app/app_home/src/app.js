"use strict;"

import "regenerator-runtime/runtime";

import "../../sass/includes/styleDeps.scss";
import "../sass/styles.scss";

import React from 'react';
import ReactDOM from 'react-dom';
import { ApplicationsContextProvider } from './components/contextProviders/applicationsContextProvider';
import { ContentContainer } from './components/contentContainer';
import { IntroContainer } from './components/introContainer';
import { ConfigContextProvider } from "./components/contextProviders/configContextProvider";
import { AppContainer } from "./components/appContainer";
import { SpinnerContextProvider } from "../../js/modules/react/spinnerComponent";

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