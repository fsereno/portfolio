"use strict;"

import React, { useState, useRef } from 'react';
import { ConfigContext } from '../../../../js/modules/react/configContextProvider';
import { SpinnerContext } from '../../../../js/modules/react/spinnerComponent';
import { XmlHttpRequestUtil } from '../../../../js/modules/utils/XMLHttpRequestUtil';
import { ItemsContext, LoginContext } from '../../contexts';

export function ItemsContextProvider({children}) {

    const configContext = React.useContext(ConfigContext);
    const spinnerContext = React.useContext(SpinnerContext);
    const loginContext = React.useContext(LoginContext);

    const endpoints = configContext.appConfig.endpoints;
    const API_ENDPOINT = `${endpoints.base}/${endpoints.api}`;

    const selectedId = useRef();
    const selected = useRef();


    // as a performance update, consider moving state to another context,
    // this could be a handler context
    const [ items, setItems ] = useState([]);
    const [ item, setItem ] = useState({});

    const hasNoItems = () => items.length === 0;

    const getItems = () => loginContext.getCurrentUser(_getItems);

    const getItem = () => loginContext.getCurrentUser(_getItem);

    const deleteItem = () => loginContext.getCurrentUser(_deleteItem);

    const _deleteItem = (currentUser) => {

        spinnerContext.setShow(true);

        const idToken = currentUser.signInUserSession.idToken.jwtToken;

        const xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = (result) => {

            const data = result.currentTarget;

            if (XmlHttpRequestUtil.isDone(data.status, data.readyState)) {

                console.log(data.response); // this needs to return better

                const currentItems = [...items];

                const updatedItems = currentItems.filter(x => x.id !== selectedId.current);

                setItems(updatedItems);

                spinnerContext.setShow(false);
            } else if (XmlHttpRequestUtil.isFail(data.status, data.readyState)) {
                spinnerContext.setShow(false);
            }
        }

        xhttp.open("DELETE", `${API_ENDPOINT}/${selectedId.current}`);
        xhttp.setRequestHeader("Authorization", idToken);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();
    }

    const _getItems = (currentUser) => {

        spinnerContext.setShow(true);

        const idToken = currentUser.signInUserSession.idToken.jwtToken;

        const xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = (result) => {

            const data = result.currentTarget;

            if (XmlHttpRequestUtil.isDone(data.status, data.readyState)) {
                const items = JSON.parse(data.response);

                setItems(items);
                spinnerContext.setShow(false);

            } else if (XmlHttpRequestUtil.isFail(data.status, data.readyState)) {
                spinnerContext.setShow(false);
            }
        }

        xhttp.open("GET", API_ENDPOINT);
        xhttp.setRequestHeader("Authorization", idToken);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();
    }

    const _getItem = (currentUser) => {

        spinnerContext.setShow(true);

        const idToken = currentUser.signInUserSession.idToken.jwtToken;

        const xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = (result) => {

            const data = result.currentTarget;

            if (XmlHttpRequestUtil.isDone(data.status, data.readyState)) {

                console.log(data.response);

                const item = JSON.parse(data.response);

                selected.current = item;

                

                    /*
                        {
                            "username":"fabiosereno",
                            "description":"Next neweest item",
                            "id":"3158740552853623",
                            "done":false,
                            "targetDate":"2021-03-16T15:03:03.201Z"
                        }
                    */

                spinnerContext.setShow(false);
            } else if (XmlHttpRequestUtil.isFail(data.status, data.readyState)) {
                
                // what to do here ?
                spinnerContext.setShow(false);
            }
        }

        xhttp.open("GET", `${API_ENDPOINT}/${selectedId.current}`);
        xhttp.setRequestHeader("Authorization", idToken);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();
    }

    const context = { items, item, hasNoItems, getItems, deleteItem, getItem, selectedId, selected };

    return (
        <ItemsContext.Provider value={context}>
            {children}
        </ItemsContext.Provider>
    )
}