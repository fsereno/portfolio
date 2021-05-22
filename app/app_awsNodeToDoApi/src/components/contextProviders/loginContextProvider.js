"use strict;"

import "regenerator-runtime/runtime";
import React, { useState, useLayoutEffect, useRef } from 'react';
import { CognitoUser, AuthenticationDetails, CognitoUserPool } from 'amazon-cognito-identity-js';
import { LoginContext } from '../../contexts';
import { SUCCESS } from "../../constants";

export const LoginContextProvider = ({children, poolData}) => {

    const [ authenticated, setAuthenticated ] = useState(false);

    const userPool = new CognitoUserPool(poolData);

    const token = useRef();
    const username = useRef();

    const getCurrentUser = () => new Promise((resolve, reject) => {

        const currentUser = userPool.getCurrentUser();

        if (currentUser != null ) {

            currentUser.getSession(err => {

                if (err != null && currentUser.signInUserSession != null ) {
                    reject(undefined);
                    console.error(err.message);

                } else {
                    resolve(currentUser);
                }
            });
        }
    })

    const logoutUserAsync = async (doneCallback, failedCallback) => {
        const currentUser = await getCurrentUser();
        if (currentUser) {
            currentUser.globalSignOut({
                onSuccess: function (result) {

                    if(result === SUCCESS) {

                        if(typeof doneCallback === "function") {
                            setAuthenticated(false);
                            doneCallback();
                        }

                    }
                },
                onFailure: function (err) {

                    if(typeof failedCallback === "function") {
                        failedCallback(err);
                    }

                },
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
            Pool: new CognitoUserPool(poolData),
        };

        const cognitoUser = new CognitoUser(userData);

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function(result) {

                setAuthenticated(true);

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
        async function _getCurrentUser () {
            const currentUser = await getCurrentUser();

            if (currentUser) {

                token.current = currentUser.signInUserSession.idToken.jwtToken;
                username.current = currentUser.username;

                if(!authenticated) {
                    setAuthenticated(true);
                }
            }
        }
        _getCurrentUser();
    },[authenticated]);

    const context = {
        authenticated,
        setAuthenticated,
        loginUser,
        logoutUserAsync,
        token,
        username
    };

    return (
        <LoginContext.Provider value={context}>
            {children}
        </LoginContext.Provider>
    )
}