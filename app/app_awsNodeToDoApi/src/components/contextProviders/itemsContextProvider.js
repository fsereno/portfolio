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

    const XMLHttpRequestHandler = ({ type, request, paylod, doneCallback }) => {

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

        xhttp.open(type, request);
        xhttp.setRequestHeader("Authorization", idToken);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(paylod);
    }

    const deleteItem = () => {

        XMLHttpRequestHandler({
            type: "DELETE",
            request: `${API_ENDPOINT}/${selectedId.current}`,
            doneCallback: deleteDoneCallback
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

    const deleteDoneCallback = () => {

        // needs unit testing
        const currentItems = [...items];
        const updatedItems = currentItems.filter(x => x.id !== selectedId.current);

        setItems(updatedItems);
    }

    const getItemsDoneCallback = (response) => setItems(response);

    const failCallback = (data) => {
        console.log(data)
        setHasError(true);
    }

    const context = { items, hasNoItems, getItems, deleteItem, getItem, selectedId };

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