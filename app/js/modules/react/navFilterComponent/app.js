
import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigContextProvider } from '../configContextProvider';
import { NavFilterComponent } from './navFilterComponent';

function App() {
    return(
        <ConfigContextProvider>
            <NavFilterComponent path={document.location.pathname}/>
        </ConfigContextProvider>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('applicationsDropdown')
);