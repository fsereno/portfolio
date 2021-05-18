"use strict;"

import React, { useState, useLayoutEffect, useRef } from 'react';
import { CognitoUser, AuthenticationDetails, CognitoUserPool } from 'amazon-cognito-identity-js';
import { POOL_DATA } from '../../constants';
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
        token.current && username.current ? setAuthenticated(true) : setAuthenticated(false);
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

        console.log(authenticationDetails);
        console.log(cognitoUser);

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function(result) {

                console.log(result);

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

    const context = { authenticated, setAuthenticated, loginUser, userPool, getCurrentUser, token, username };

    return (
        <LoginContext.Provider value={context}>
            {children}
        </LoginContext.Provider>
    )
}