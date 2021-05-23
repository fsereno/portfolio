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
        return XMLHttpRequestUtil.requestPromise({
            type: "GET",
            request: API_ENDPOINT,
            headers: [{ key: "Authorization", value: loginContext.token.current }]
        });
    }

    const getItem = () => {
        return XMLHttpRequestUtil.requestPromise({
            type: "GET",
            request: `${API_ENDPOINT}/${selectedId.current}`,
            headers: [{ key: "Authorization", value: loginContext.token.current }]
        });
    }

    const deleteItem = (requestObject) => {
        XMLHttpRequestUtil.request({
            ...requestObject,
            type: "DELETE",
            request: `${API_ENDPOINT}/${requestObject.id}`,
            headers: [{ key: "Authorization", value: loginContext.token.current }]
        });
    }

    const itemDone = (requestObject) => {
        const item = items.filter( x => x.id === requestObject.id)[0];
        const doneItem = {...item};
        doneItem.done = true;
        updateItem(doneItem, requestObject);
    }

    const updateItem = (item) => {
        return XMLHttpRequestUtil.requestPromise({
            type: "PUT",
            request: `${API_ENDPOINT}/${selectedId.current}`,
            payload: JSON.stringify(item),
            headers: [{ key: "Authorization", value: loginContext.token.current }]
        });
    }

    const createItem = (item, requestObject) => {

        const newItem = {...item};

        newItem.username = loginContext.username.current;

        XMLHttpRequestUtil.request({
            ...requestObject,
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