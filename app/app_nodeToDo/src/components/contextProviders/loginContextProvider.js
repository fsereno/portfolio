"use strict;"

import React, { useState, useLayoutEffect, useRef } from 'react';
import { CognitoUser, AuthenticationDetails, CognitoUserPool } from 'amazon-cognito-identity-js';
import { LoginContext } from '../../contexts';
import { SUCCESS } from "../../constants";

export const LoginContextProvider = ({ children }) => {

    const [authenticated, setAuthenticated] = useState(false);

    //const userPool = new CognitoUserPool(poolData);

    const token = useRef();
    const username = useRef();

    const getCurrentUser = () => new Promise((resolve, reject) => {

        const currentUser = { jwtToken: "token", username: "testuser" }; //userPool.getCurrentUser();

        if (currentUser != null) {
            resolve(currentUser);
        } else {
            reject(undefined);
        }
    });

    const logoutUser = () => new Promise((resolve, reject) => {

        getCurrentUser().then(currentUser => {
            if (currentUser) {
                setAuthenticated(false);
                resolve({ success: true });
                /*currentUser.globalSignOut({
                    onSuccess: function (result) {
                        if (result === SUCCESS) {
                            setAuthenticated(false);
                            resolve({ success: true });
                        }
                    },
                    onFailure: function (error) {
                        reject({ success: false, error });
                    },
                });*/
            }

        }).catch((error) => {
            reject({ success: false, error });
        });
    });

    const loginUser = (username, password) => new Promise((resolve, reject) => {

        setAuthenticated(true);
        resolve({ success: true });

        /*const authenticationData = {
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
        });*/
    });

    useLayoutEffect(() => {
        getCurrentUser()
            .then(currentUser => {
                if (currentUser) {

                    token.current = currentUser.jwtToken;
                    username.current = currentUser.username;

                    /*if (!authenticated) {
                        debugger;
                        setAuthenticated(true);
                    }*/
                }
            })
            .catch(() => setAuthenticated(false));
    }, [authenticated]);

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