"use strict;"

import React, { useState, useLayoutEffect, useRef } from 'react';
import { CognitoUser, AuthenticationDetails, CognitoUserPool } from 'amazon-cognito-identity-js';
import { LoginContext } from '../../contexts';
import { ConfigContext } from '../../../../js/modules/react/configContextProvider';
import { XMLHttpRequestUtil } from '../../../../js/modules/utils/xmlHttpRequestUtil';
import { SUCCESS } from "../../constants";

const TOKEN_KEY = 'NODE_TODO_TOKEN';

export const LoginContextProvider = ({ children }) => {

    const configContext = React.useContext(ConfigContext);

    const endpoints = configContext.appConfig.endpoints;
    const API_ENDPOINT = `${endpoints.base}`;

    const [authenticated, setAuthenticated] = useState(false);

    //const userPool = new CognitoUserPool(poolData);

    const token = useRef(sessionStorage.getItem(TOKEN_KEY));
    //const username = useRef();

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

    const getCurrentUser = (_token) => {

        console.log(token.current);

        return XMLHttpRequestUtil.request({
            type: "GET",
            request: `${API_ENDPOINT}/user`,
            headers: [{ key: "Authorization", value: prepareToken(_token) }]
        });

        /*const currentUser = { jwtToken: "token", username: "testuser" }; //userPool.getCurrentUser();

        if (currentUser != null) {
            resolve(currentUser);
        } else {
            reject(undefined);
        }*/
    };

    const logoutUser = () => new Promise((resolve, reject) => {

            XMLHttpRequestUtil.request({
                type: "GET",
                request: `${API_ENDPOINT}/logout`,
                headers: [{ key: "Authorization", value: prepareToken() }]
            }).then((response) => {
                setAuthenticated(false)
                sessionStorage.removeItem(TOKEN_KEY)
                resolve(response);
            }).catch(() => {
                setAuthenticated(false)
                reject();
            } );

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
        }).then((response) => {

            sessionStorage.setItem(TOKEN_KEY, response.data.token);
            token.current = response.data.token;

            setAuthenticated(true)
            console.log(token.current);

            resolve(response);
        }).catch((response) => {
            setAuthenticated(false)
            reject(response);
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

        const _token = sessionStorage.getItem(TOKEN_KEY);

        getCurrentUser(_token)
            .then(response => {
                if (response.success) {
                    token.current = _token;
                    setAuthenticated(true);
                }
            })
            .catch(() => setAuthenticated(false));
    }, []);


    const prepareToken = (_token) => { 
        console.log(_token);
        console.log(token.current);
        return `Bearer ${_token ? _token : token.current}`
    };

    const context = {
        authenticated,
        setAuthenticated,
        registerUser,
        loginUser,
        logoutUser,
        token,
        //username,
        healthCheck,
        prepareToken
    };

    return (
        <LoginContext.Provider value={context}>
            {children}
        </LoginContext.Provider>
    )
}