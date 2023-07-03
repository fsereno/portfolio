"use strict;"

import React from 'react';
import { ConfigContext } from '../configContextProvider';
import './cookieBannerComponent.scss';

export function CookieBannerComponent({}) {

    const configContext = React.useContext(ConfigContext);
    const config = configContext.config;

    return (
        <>
            <div className='mx-2 nav-filter-container' id='cookieBannerComponent'>
                <p>Cookie banner</p>
            </div>
        </>
    );
}