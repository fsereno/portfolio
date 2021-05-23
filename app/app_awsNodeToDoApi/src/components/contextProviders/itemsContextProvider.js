"use strict;"

import React, { useState, useRef } from 'react';
import { ConfigContext } from '../../../../js/modules/react/configContextProvider';
import { XMLHttpRequestUtil } from '../../../../js/modules/utils/XMLHttpRequestUtil';
import { ItemsContext, LoginContext } from '../../contexts';
import { ContentContainer } from '../contentContainer';

export function ItemsContextProvider({ children }) {

    const configContext = React.useContext(ConfigContext);
    const loginContext = React.useContext(LoginContext);

    const endpoints = configContext.appConfig.endpoints;
    const API_ENDPOINT = `${endpoints.base}/${endpoints.api}`;

    const selectedId = useRef();

    const [items, setItems] = useState([]);
    const [showFeedback, setShowFeedback] = useState(false);

    const getItems = () => {
        return XMLHttpRequestUtil.request({
            type: "GET",
            request: API_ENDPOINT,
            headers: [{ key: "Authorization", value: loginContext.token.current }]
        });
    }

    const getItem = () => {
        return XMLHttpRequestUtil.request({
            type: "GET",
            request: `${API_ENDPOINT}/${selectedId.current}`,
            headers: [{ key: "Authorization", value: loginContext.token.current }]
        });
    }

    const deleteItem = (id) => {
        return XMLHttpRequestUtil.request({
            type: "DELETE",
            request: `${API_ENDPOINT}/${id}`,
            headers: [{ key: "Authorization", value: loginContext.token.current }]
        });
    }

    const itemDone = (id) => {

        const item = items.filter( x => x.id === id)[0];
        const doneItem = {...item};

        doneItem.done = true;

        return updateItem(doneItem);
    }

    const updateItem = (item) => {
        return XMLHttpRequestUtil.request({
            type: "PUT",
            request: `${API_ENDPOINT}/${selectedId.current}`,
            payload: JSON.stringify(item),
            headers: [{ key: "Authorization", value: loginContext.token.current }]
        });
    }

    const createItem = (item) => {

        const newItem = {...item};

        newItem.username = loginContext.username.current;

        return XMLHttpRequestUtil.request({
            type: "POST",
            request: API_ENDPOINT,
            payload: JSON.stringify(newItem),
            headers: [{ key: "Authorization", value: loginContext.token.current }]
        });
    }

    const context = {
        items,
        setItems,
        getItems,
        deleteItem,
        getItem,
        selectedId,
        updateItem,
        itemDone,
        createItem,
        setShowFeedback
    };

    return (
        <ItemsContext.Provider value={context}>
            {children}
            {showFeedback &&
                <ContentContainer>
                    <h4 className="text-danger">Sorry, there was an error. Please try again.</h4>
                </ContentContainer>
            }
        </ItemsContext.Provider>
    )
}