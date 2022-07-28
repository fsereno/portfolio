"use strict;"

import "regenerator-runtime/runtime";
import "../sass/styles.scss";

import React from 'react';
import ReactDOM from 'react-dom';
import { ApplicationsContextProvider } from '../../js/modules/react/applicationsContextProvider';
import { ContentContainer } from './components/contentContainer';
import { IntroContainer } from './components/introContainer';
import { ConfigContextProvider } from "../../js/modules/react/configContextProvider";
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