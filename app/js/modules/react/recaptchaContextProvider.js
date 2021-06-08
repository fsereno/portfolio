"use strict;"

import React, { useState, useRef } from 'react';
import { ConfigUtil } from '../utils/configUtil';
import { XMLHttpRequestUtil } from '../utils/xmlHttpRequestUtil';

export const RecaptchaContext = React.createContext();

export function RecaptchaContextProvider({children}) {

    const config = ConfigUtil.get();

    const recaptureSiteKey = config.grecaptcha.key;
    const recaptureIsActive = config.grecaptcha.active;
    const VERIFY_ENDPOINT = `${config.grecaptcha.endpoints.base}/${config.grecaptcha.endpoints.verify}`;
    const [ recaptchaToken, setRecaptchaToken ] = useState(null);
    const recaptchaRef = useRef();

    const isRecaptchValid = () =>  recaptchaToken !== null && recaptchaToken.length > 0;

    const onChange = value => setRecaptchaToken(value);

    const verify = (doneCallback, failCallback) => {

        const payload = JSON.stringify({ token: recaptchaToken });

        const xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = (result) => {

            const data = result.currentTarget;

            if (XMLHttpRequestUtil.isDone(data.status, data.readyState)) {

                const grecaptchaResponse = JSON.parse(data.response);

                if (grecaptchaResponse.result.success) {
                    if (typeof doneCallback === "function") {
                        doneCallback();
                    }
                } else {
                    if (typeof failCallback === "function") {
                        failCallback();
                    }
                }
            } else if (XMLHttpRequestUtil.isFail(data.status, data.readyState)) {
                if (typeof failCallback === "function") {
                    failCallback();
                }
            }
        };

        xhttp.open("POST", VERIFY_ENDPOINT);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(payload);
    }

    const context = {
        recaptchaToken,
        setRecaptchaToken,
        recaptchaRef,
        recaptureSiteKey,
        recaptureIsActive,
        isRecaptchValid,
        verify,
        onChange
    };

    return (
        <RecaptchaContext.Provider value={context}>
            {children}
        </RecaptchaContext.Provider>
    )
}