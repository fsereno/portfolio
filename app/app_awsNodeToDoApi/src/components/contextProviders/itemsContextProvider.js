"use strict;"

import React, { useState, useRef } from 'react';
import { ConfigContext } from '../../../../js/modules/react/configContextProvider';
import { SpinnerContext } from '../../../../js/modules/react/spinnerComponent';
import { XmlHttpRequestUtil } from '../../../../js/modules/utils/XMLHttpRequestUtil';
import { ItemsContext, LoginContext } from '../../contexts';
import { ContentContainer } from '../contentContainer';

export function ItemsContextProvider({ children }) {

    const configContext = React.useContext(ConfigContext);
    const spinnerContext = React.useContext(SpinnerContext);
    const loginContext = React.useContext(LoginContext);

    const endpoints = configContext.appConfig.endpoints;
    const API_ENDPOINT = `${endpoints.base}/${endpoints.api}`;

    const selectedId = useRef();

    const [items, setItems] = useState([]);

    const [hasError, setHasError] = useState(false);

    const hasNoItems = () => items.length === 0;

    const XMLHttpRequestHandler = ({ type, request, payload, doneCallback }) => {

        setHasError(false);

        spinnerContext.setShow(true);

        const idToken = loginContext.token.current;

        const xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = (result) => {

            const data = result.currentTarget;

            if (XmlHttpRequestUtil.isDone(data.status, data.readyState)) {

                let response;

                try {
                    response = JSON.parse(data.response);
                } catch (error) {
                    response = {};
                }

                if (typeof doneCallback === "function") {
                    doneCallback(response);
                }
                spinnerContext.setShow(false);
            } else if (XmlHttpRequestUtil.isFail(data.status, data.readyState)) {

                failCallback(data);
                spinnerContext.setShow(false);
            }
        }

        console.log("idToken" + idToken)
        console.log("request" + request)
        console.log("payload" + payload)

        xhttp.open(type, request);
        xhttp.setRequestHeader("Authorization", idToken);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(payload);
    }

    const deleteItem = (successCallback) => {

        XMLHttpRequestHandler({
            type: "DELETE",
            request: `${API_ENDPOINT}/${selectedId.current}`,
            doneCallback: successCallback
        });
    }

    const getItems = () => {

        XMLHttpRequestHandler({
            type: "GET",
            request: API_ENDPOINT,
            doneCallback: getItemsDoneCallback
        });
    }

    const getItem = (doneCallback) => {

        XMLHttpRequestHandler({
            type: "GET",
            request: `${API_ENDPOINT}/${selectedId.current}`,
            doneCallback
        });
    }

    const getItemsDoneCallback = (response) => setItems(response);

    const updateItem = (item, doneCallback) => {

        XMLHttpRequestHandler({
            type: "PUT",
            request: `${API_ENDPOINT}/${selectedId.current}`,
            payload: JSON.stringify(item),
            doneCallback
        });
    }

    const itemDone = (successCallback) => {
        const item = items.filter( x => x.id === selectedId.current)[0];
        item.done = true;
        updateItem(item, successCallback);
    }

    const createItem = (item, doneCallback) => {

        item.username = loginContext.username.current;
        delete item.id;

        XMLHttpRequestHandler({
            type: "POST",
            request: `${API_ENDPOINT}`,
            payload: JSON.stringify(item),
            doneCallback
        });
    }

    const failCallback = (data) => {
        console.log(data)
        setHasError(true);
    }

    const context = {
        items,
        hasNoItems,
        getItems,
        deleteItem,
        getItem,
        selectedId,
        updateItem,
        itemDone,
        createItem
    };

    return (
        <ItemsContext.Provider value={context}>
            {children}
            {hasError &&
                <ContentContainer>
                    <h4 className="text-danger">Sorry, there was an error. Please try again.</h4>
                </ContentContainer>
            }
        </ItemsContext.Provider>
    )
}