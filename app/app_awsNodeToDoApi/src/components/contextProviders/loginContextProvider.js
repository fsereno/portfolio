"use strict;"

import React, { useState } from 'react';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { POOL_DATA } from '../../constants';
import { LoginContext } from '../../contexts';

export function LoginContextProvider({children}) {

    const [ authenticated, setAuthenticated ] = useState(false);
    const [ cognitoUser, setCognitoUser ] = useState({});

    const userPool = new CognitoUserPool(POOL_DATA);

    const context = { authenticated, setAuthenticated, userPool, cognitoUser, setCognitoUser };

    return (
        <>
            <LoginContext.Provider value={context}>
                {children}
            </LoginContext.Provider>
        </>
    )
}