"use strict;"

import React, { useState, useLayoutEffect, useRef } from 'react';
import { CognitoUser, AuthenticationDetails, CognitoUserPool } from 'amazon-cognito-identity-js';
import { LoginContext } from '../../contexts';
import { ConfigContext } from '../../../../js/modules/react/configContextProvider';
import { XMLHttpRequestUtil } from '../../../../js/modules/utils/xmlHttpRequestUtil';
import { SUCCESS } from "../../constants";

export const LoginContextProvider = ({ children }) => {

    const configContext = React.useContext(ConfigContext);

    const endpoints = configContext.appConfig.endpoints;
    const API_ENDPOINT = `${endpoints.base}`;

    const [authenticated, setAuthenticated] = useState(false);

    //const userPool = new CognitoUserPool(poolData);

    const token = useRef();
    const username = useRef();

    const healthCheck = () => {
        return XMLHttpRequestUtil.request({
            type: "GET",
            request: `${API_ENDPOINT}/healthcheck`,
            headers: []
        });
    }

    const registerUser = (username, password) => {

        const authenticationData = {
            username,
            password,
        };

        return XMLHttpRequestUtil.request({
            type: "POST",
            request: `${API_ENDPOINT}/register`,
            payload: JSON.stringify(authenticationData),
            headers: []
        });
    };

    const getCurrentUser = () => {

        return XMLHttpRequestUtil.request({
            type: "GET",
            request: `${API_ENDPOINT}/user`,
            headers: [{ key: "Authorization", value: token.current }]
        });

        /*const currentUser = { jwtToken: "token", username: "testuser" }; //userPool.getCurrentUser();

        if (currentUser != null) {
            resolve(currentUser);
        } else {
            reject(undefined);
        }*/
    };

    const logoutUser = () => {

        return getCurrentUser().then(currentUser => {
            return XMLHttpRequestUtil.request({
                type: "GET",
                request: `${API_ENDPOINT}/logout`,
                headers: [{ key: "Authorization", value: token.current }]
            });

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
        });
    };

    //const getCurrentUser = () => new Promise((resolve, reject) => {

    const loginUser = (username, password) => new Promise((resolve, reject) => {

        const authenticationData = {
            username,
            password,
        };

        XMLHttpRequestUtil.request({
            type: "POST",
            request: `${API_ENDPOINT}/login`,
            payload: JSON.stringify(authenticationData),
            headers: []
        }).then((token) => {
            setAuthenticated(true)
            console.log(token);
            resolve(token);
        }).catch(() => {
            setAuthenticated(false)
            reject(undefined);
        } );

        /*const authenticationDetails = new AuthenticationDetails(authenticationData);

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

        healthCheck().then(() => {
            console.log("healthy")
        }).catch(() => console.log("unhealthy"));

        getCurrentUser()
            .then(currentUser => {
                if (currentUser) {

                    token.current = currentUser.token;
                    username.current = currentUser.username;
                }
            })
            .catch(() => setAuthenticated(false));
    }, [authenticated]);

    const context = {
        authenticated,
        setAuthenticated,
        registerUser,
        loginUser,
        logoutUser,
        token,
        username,
        healthCheck
    };

    return (
        <LoginContext.Provider value={context}>
            {children}
        </LoginContext.Provider>
    )
}