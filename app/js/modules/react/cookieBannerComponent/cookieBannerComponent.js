"use strict;"

import React, { useState, useEffect } from 'react';
import { getElementFadeClass } from "../../utils/getElementFadeClass";
import { DeploymentUtil } from '../../utils/deploymentUtil';
import './cookieBannerComponent.scss';

const SHOW_COOKIE_BANNER_THRESHOLD = 270;
const COOKIE_BANNER_ACCEPTED_KEY = "Cookie_banner_message_accepted";
const STORAGE = sessionStorage;

export function CookieBannerComponent({isHomeActive}) {

    const [ fadeClass, setFadeClass ] = useState(getElementFadeClass(false));

    useEffect(() => {
        if (isHomeActive) {
            window.addEventListener('scroll', handleFade);
        } else {
            handleFade();
        }
        return () => window.removeEventListener('scroll', handleFade);
    },[fadeClass]);

    const handleOnClick = () => {
        STORAGE.setItem(COOKIE_BANNER_ACCEPTED_KEY, true);
        setFadeClass(getElementFadeClass(false));
    }

    const handleFade = () => {
        const scrollPosition = document.documentElement.scrollTop;
        const shouldShow = DeploymentUtil.isCloud();
        const alreadyAccepted = STORAGE.getItem(COOKIE_BANNER_ACCEPTED_KEY);

        if (alreadyAccepted || !shouldShow) {
            return;
        }

        if ((isHomeActive && scrollPosition >= SHOW_COOKIE_BANNER_THRESHOLD)) {
            setFadeClass(getElementFadeClass(true));
        } else {
            setFadeClass(getElementFadeClass(false));
        }

        if (!isHomeActive) {
            setFadeClass(getElementFadeClass(true));
        }
    }

    return (
        <>
            <div className={`cookie-banner-container fade-element ${fadeClass}`} id='cookieBannerComponent'>
                <p>This application uses cookies to determine which services are deployed and do not store any personal data.</p>
                <button type="button" className="btn btn-sm btn-dark ms-5" onClick={handleOnClick}>Accept</button>
            </div>
        </>
    );
}