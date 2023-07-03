
import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigContextProvider } from '../configContextProvider';
import { CookieBannerComponent } from './cookieBannerComponent';

const cookieBannerComponentFadeThreshold = 270;

function App() {
    return(
        <ConfigContextProvider>
            <CookieBannerComponent threshold={cookieBannerComponentFadeThreshold} />
        </ConfigContextProvider>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('cookieBanner')
);