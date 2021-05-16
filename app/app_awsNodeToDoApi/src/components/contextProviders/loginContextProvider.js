"use strict;"

import React, { useState, useLayoutEffect, useRef } from 'react';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { POOL_DATA } from '../../constants';
import { LoginContext } from '../../contexts';

export function LoginContextProvider({children}) {

    const [ authenticated, setAuthenticated ] = useState(false);

    const userPool = new CognitoUserPool(POOL_DATA);

    const token = useRef();
    const username = useRef();

    const getCurrentUserDoneCallback = (currentUser) => {
        token.current = currentUser.signInUserSession.idToken.jwtToken;
        username.current = currentUser.username;
        setAuthenticated(true);
    }

    const getCurrentUser = (doneCallback, failCallback) => {

        const currentUser = userPool.getCurrentUser();

        if (currentUser != null ) {

            currentUser.getSession(err => {

                if (err != null && currentUser.signInUserSession != null ) {

                    if (typeof failCallback === "function") {
                        failCallback();
                    }
                    console.error(err.message);

                } else {

                    if (typeof doneCallback === "function") {
                        doneCallback(currentUser);
                    }
                }
            });
        }
    }

    useLayoutEffect(() => {

        getCurrentUser(getCurrentUserDoneCallback);

    },[]);

    const context = { authenticated, setAuthenticated, userPool, getCurrentUser, token, username };

    return (
        <LoginContext.Provider value={context}>
            {children}
        </LoginContext.Provider>
    )
}