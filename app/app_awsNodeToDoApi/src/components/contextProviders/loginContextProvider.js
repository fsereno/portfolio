"use strict;"

import React, { useState, useLayoutEffect } from 'react';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { POOL_DATA } from '../../constants';
import { LoginContext } from '../../contexts';

export function LoginContextProvider({children}) {

    const [ authenticated, setAuthenticated ] = useState(false);

    const userPool = new CognitoUserPool(POOL_DATA);

    const setAuthenticatedTrue = () => setAuthenticated(true);

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

        getCurrentUser(setAuthenticatedTrue);

    },[]);

    const context = { authenticated, setAuthenticated, userPool, getCurrentUser };

    return (
        <LoginContext.Provider value={context}>
            {children}
        </LoginContext.Provider>
    )
}