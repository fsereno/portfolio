
import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigContextProvider } from '../configContextProvider';

function App() {
    return(
        <ConfigContextProvider>
            <CookieBannerComponent />
        </ConfigContextProvider>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('cookieBanner')
);