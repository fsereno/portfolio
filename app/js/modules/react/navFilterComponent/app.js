
import React from 'react';
import ReactDOM from 'react-dom';
import { ApplicationsContextProvider } from '../applicationsContextProvider';
import { ConfigContextProvider } from '../configContextProvider';
import { NavFilterComponent } from './navFilterComponent';

function App() {
    return(
        <ConfigContextProvider>
             <ApplicationsContextProvider>
                <NavFilterComponent path={document.location.pathname}/>
            </ApplicationsContextProvider>
        </ConfigContextProvider>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('applicationsDropdown')
);