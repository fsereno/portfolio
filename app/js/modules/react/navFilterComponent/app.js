
import React from 'react';
import ReactDOM from 'react-dom';
import { ApplicationsContextProvider } from '../applicationsContextProvider';
import { ConfigContextProvider } from '../configContextProvider';
import { NavFilterComponent } from './navFilterComponent';

function App() {

    const isHomeActive = document.head.querySelector('[name="isRoot"]') !== null;
    const folder = document.head.querySelector('[name="folder"]').content;

    return(
        <ConfigContextProvider>
             <ApplicationsContextProvider>
                <NavFilterComponent isHomeActive={isHomeActive} folder={folder}/>
            </ApplicationsContextProvider>
        </ConfigContextProvider>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('applicationsDropdown')
);