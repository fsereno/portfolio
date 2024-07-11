
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CookieBannerComponent } from './cookieBannerComponent';

function App() {
    const isHomeActive = document.head.querySelector('[name="isRoot"]') !== null;
    return(
        <CookieBannerComponent isHomeActive={ isHomeActive } />
    )
}


ReactDOM.createRoot(document.getElementById('cookieBanner')).render(<App />);