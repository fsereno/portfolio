"use strict;"

import React, { useEffect, useState } from 'react';
import { ConfigContext } from '../configContextProvider';
import { getElementFadeClass } from "../../utils/getElementFadeClass";
import './cookieBannerComponent.scss';

export function CookieBannerComponent({threshold}) {

    const configContext = React.useContext(ConfigContext);
    const config = configContext.config;

    const [ fadeClass, setFadeClass ] = useState(getElementFadeClass(false));

    useEffect(() => {
        window.addEventListener('scroll', handleFade);
        return () => {
            window.removeEventListener('scroll', handleFade);
        }
    },[fadeClass]);

    const handleOnClick = () => {
        console.log("Accept");
    }

    const handleFade = () => {
        const scrollPosition = document.documentElement.scrollTop;
        if (scrollPosition >= threshold) {
            setFadeClass(getElementFadeClass(true));
        } else {
            setFadeClass(getElementFadeClass(false));
        }
    }

    return (
        <>
            <div className={`cookie-banner-container fade-element ${fadeClass}`} id='cookieBannerComponent'>
                <p>This website uses cookies to determine which services are deployed and do not store any personal data.</p>
                <button type="button" className="btn btn-sm btn-dark" onClick={handleOnClick}>Accept</button>
            </div>
        </>
    );
}