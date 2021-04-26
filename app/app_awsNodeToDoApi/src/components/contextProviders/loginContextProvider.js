"use strict;"

import React, { useState, useLayoutEffect } from 'react';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { POOL_DATA } from '../../constants';
import { LoginContext } from '../../contexts';

export function LoginContextProvider({children}) {

    const [ authenticated, setAuthenticated ] = useState(false);

    const userPool = new CognitoUserPool(POOL_DATA);

    useLayoutEffect(() => {

        const currentUser = userPool.getCurrentUser();

        if (currentUser != null ) {

            currentUser.getSession(err => {

                if (err != null && currentUser.signInUserSession != null ) {

                    console.error(err.message);

                } else {

                    setAuthenticated(true);

                }
            });
        }
    },[]);

    const context = { authenticated, setAuthenticated, userPool };

    return (
        <>
            <LoginContext.Provider value={context}>
                {children}
            </LoginContext.Provider>
        </>
    )
}