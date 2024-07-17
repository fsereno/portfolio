"use strict;"

import "regenerator-runtime/runtime";
import "../sass/styles.scss";
import '../../sass/includes/styleDeps.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
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

ReactDOM.createRoot(document.getElementById('result')).render(<App />);