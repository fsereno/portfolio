
import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigContextProvider } from '../configContextProvider';
import { NavFilterComponent } from './navFilterComponent';

function App() {
    return(
        <ConfigContextProvider>
            <NavFilterComponent />
        </ConfigContextProvider>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('navbarDropdownMenuLink')
);