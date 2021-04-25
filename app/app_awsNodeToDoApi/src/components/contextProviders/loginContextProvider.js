"use strict;"

import React, { useState, useLayoutEffect } from 'react';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { POOL_DATA, TOKEN, USERNAME } from '../../constants';
import { LoginContext } from '../../contexts';

export function LoginContextProvider({children}) {

    const [ authenticated, setAuthenticated ] = useState(false);

    const userPool = new CognitoUserPool(POOL_DATA);

    useLayoutEffect(() => {

        const currentUser = userPool.getCurrentUser();

        if (currentUser != null ) {
            setAuthenticated(true);
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