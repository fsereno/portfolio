"use strict;"

import React, { useState, useEffect } from 'react';
import { getElementFadeClass } from "../../utils/getElementFadeClass";
import { DeploymentUtil } from '../../utils/deploymentUtil';
import './cookieBannerComponent.scss';

const SHOW_COOKIE_BANNER_TIMEOUT = 1700;

export function CookieBannerComponent() {

    const [ fadeClass, setFadeClass ] = useState(getElementFadeClass(false));

    useEffect(() => {
        const timeOut = setTimeout(() => {

            const shouldShow = DeploymentUtil.isCloud(); // and depending on if Accept has been clicked already - check storage

            handleFade(shouldShow);
        }, SHOW_COOKIE_BANNER_TIMEOUT);
        return () => {
            clearTimeout(timeOut);
        }
    },[]);

    const handleOnClick = () => {
        // store value in storage or cookie
        handleFade(false);
    }

    const handleFade = (fadeIn = false) => {
        if (fadeIn) {
            setFadeClass(getElementFadeClass(true));
        } else {
            setFadeClass(getElementFadeClass(false));
        }
    }

    return (
        <>
            <div className={`cookie-banner-container fade-element ${fadeClass}`} id='cookieBannerComponent'>
                <p>This application uses cookies to determine which services are deployed and do not store any personal data.</p>
                <button type="button" className="btn btn-sm btn-dark" onClick={handleOnClick}>Accept</button>
            </div>
        </>
    );
}