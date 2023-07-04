
import React from 'react';
import ReactDOM from 'react-dom';
import { CookieBannerComponent } from './cookieBannerComponent';

function App() {
    return(
        <CookieBannerComponent />
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('cookieBanner')
);