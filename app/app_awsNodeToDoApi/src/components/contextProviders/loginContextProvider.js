"use strict;"

import React, { useState, useLayoutEffect, useRef } from 'react';
import { CognitoUser, AuthenticationDetails, CognitoUserPool } from 'amazon-cognito-identity-js';
import { POOL_DATA, SUCCESS } from '../../constants';
import { LoginContext } from '../../contexts';

export function LoginContextProvider({children}) {

    const [ authenticated, setAuthenticated ] = useState(false);
    const [ loginSuccess, setLoginSuccess ] = useState(false);

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
                    //setAuthenticated(false);

                } else {

                    if (typeof doneCallback === "function") {
                        doneCallback(currentUser);
                    }
                }
            });
        }
    }

    const logoutUser = (logoutCallback) => {
        getCurrentUser(logoutCallback);
    }

    const loginUser = (username, password, loginDoneCallback, loginFailCallback) => {

        const authenticationData = {
            Username: username,
            Password: password,
        };

        const authenticationDetails = new AuthenticationDetails(authenticationData);

        const userData = {
            Username: username,
            Pool: new CognitoUserPool(POOL_DATA),
        };

        const cognitoUser = new CognitoUser(userData);

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function(result) {

                setLoginSuccess(true);

                if(typeof loginDoneCallback === "function") {
                    loginDoneCallback();
                }
            },
            onFailure: function(err) {
                if(typeof loginFailCallback === "function") {
                    loginFailCallback(err);
                }
            },
        });
    }

    useLayoutEffect(() => {
        console.log("either mounted or loginSuccess has triggered")
        getCurrentUser(getCurrentUserDoneCallback);
    },[loginSuccess]);

    const context = { authenticated, setAuthenticated, loginUser, logoutUser, token, username };

    return (
        <LoginContext.Provider value={context}>
            {children}
        </LoginContext.Provider>
    )
}