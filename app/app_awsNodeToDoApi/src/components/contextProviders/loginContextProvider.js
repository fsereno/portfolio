"use strict;"

import React, { useState, useLayoutEffect, useRef } from 'react';
import { CognitoUser, AuthenticationDetails, CognitoUserPool } from 'amazon-cognito-identity-js';
import { LoginContext } from '../../contexts';
import { SUCCESS } from "../../constants";

export const LoginContextProvider = ({ children, poolData }) => {

    const [authenticated, setAuthenticated] = useState(false);

    const userPool = new CognitoUserPool(poolData);

    const token = useRef();
    const username = useRef();

    const getCurrentUser = () => new Promise((resolve, reject) => {

        const currentUser = userPool.getCurrentUser();

        if (currentUser != null) {

            currentUser.getSession(err => {

                if (err != null && currentUser.signInUserSession != null) {
                    reject(undefined);
                    console.error(err.message);
                } else {
                    resolve(currentUser);
                }
            });
        } else {
            reject(undefined);
        }
    });

    const logoutUser = () => new Promise((resolve, reject) => {
        getCurrentUser().then(currentUser => {
            if (currentUser) {
                currentUser.globalSignOut({
                    onSuccess: function (result) {
                        if (result === SUCCESS) {
                            setAuthenticated(false);
                            resolve({ success: true });
                        }
                    },
                    onFailure: function (error) {
                        reject({ success: false, error });
                    },
                });
            }

        }).catch((error) => {
            reject({ success: false, error });
        });
    });

    const loginUser = (username, password) => new Promise((resolve, reject) => {

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
            onSuccess: function (result) {
                setAuthenticated(true);
                resolve({ success: true });
            },
            onFailure: function (error) {
                reject({ success: false, error });
            },
        });
    });

    useLayoutEffect(() => {
        getCurrentUser()
            .then(currentUser => {
                if (currentUser) {

                    token.current = currentUser.signInUserSession.idToken.jwtToken;
                    username.current = currentUser.username;

                    if (!authenticated) {
                        setAuthenticated(true);
                    }
                }
            })
            .catch(() => setAuthenticated(false));
    }, []);

    const context = {
        authenticated,
        setAuthenticated,
        loginUser,
        logoutUser,
        token,
        username
    };

    return (
        <LoginContext.Provider value={context}>
            {children}
        </LoginContext.Provider>
    )
}