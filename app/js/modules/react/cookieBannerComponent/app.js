
import React from 'react';
import ReactDOM from 'react-dom';
import { CookieBannerComponent } from './cookieBannerComponent';

function App() {
    const isHomeActive = document.head.querySelector('[name="isRoot"]') !== null;
    return(
        <CookieBannerComponent isHomeActive={ isHomeActive } />
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('cookieBanner')
);