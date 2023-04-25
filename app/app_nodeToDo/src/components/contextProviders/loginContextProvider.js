"use strict;"

import React, { useState, useLayoutEffect, useRef } from 'react';
import { LoginContext } from '../../contexts';
import { ConfigContext } from '../../../../js/modules/react/configContextProvider';
import { XMLHttpRequestUtil } from '../../../../js/modules/utils/xmlHttpRequestUtil';

const TOKEN_KEY = 'NODE_TODO_TOKEN';

export const LoginContextProvider = ({ children }) => {

    const configContext = React.useContext(ConfigContext);
    const endpoints = configContext.appConfig.endpoints;
    const API_ENDPOINT = `${ endpoints.base }`;
    const [ authenticated, setAuthenticated ] = useState(false);
    const token = useRef(sessionStorage.getItem(TOKEN_KEY));

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
        return XMLHttpRequestUtil.request({
            type: "GET",
            request: `${API_ENDPOINT}/user`,
            headers: [{ key: "Authorization", value: prepareToken(_token) }]
        });
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
    });

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

            resolve(response);
        }).catch((response) => {
            setAuthenticated(false)
            reject(response);
        } );
    });

    useLayoutEffect(() => {
        const _token = sessionStorage.getItem(TOKEN_KEY);

        if(_token) {
            getCurrentUser(_token)
            .then(response => {
                if (response.success) {
                    token.current = _token;
                    setAuthenticated(true);
                }
            })
            .catch(() => setAuthenticated(false));
        }
    }, []);

    const prepareToken = (_token) => `Bearer ${_token ? _token : token.current}`;

    const context = {
        authenticated,
        setAuthenticated,
        registerUser,
        loginUser,
        logoutUser,
        token,
        prepareToken
    };

    return (
        <LoginContext.Provider value={context}>
            {children}
        </LoginContext.Provider>
    )
}