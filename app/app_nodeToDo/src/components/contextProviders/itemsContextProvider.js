"use strict;"

import React, { useState, useRef } from 'react';
import { ConfigContext } from '../../../../js/modules/react/configContextProvider';
import { XMLHttpRequestUtil } from '../../../../js/modules/utils/xmlHttpRequestUtil';
import { ItemsContext, LoginContext } from '../../contexts';

export function ItemsContextProvider({ children }) {

    const configContext = React.useContext(ConfigContext);
    const loginContext = React.useContext(LoginContext);

    const endpoints = configContext.appConfig.endpoints;
    const API_ENDPOINT = `${endpoints.base}/${endpoints.api}`;

    const selectedId = useRef();

    const ver = useRef(0);

    const [ version, setVersion ] = useState(ver.current);

    const [items, setItems] = useState([]);

    const incrementVersion = () => {
        ver.current = ver.current + 1;
        setVersion(ver.current);
    }

    const _getModifiedOnTime = () => new Date().getTime();

    const getItems = () => {
        console.log(loginContext.prepareToken());
        return XMLHttpRequestUtil.request({
            type: "GET",
            request: API_ENDPOINT,
            headers: [{ key: "Authorization", value: loginContext.prepareToken() }]
        });
    }

    const getItem = () => {
        return XMLHttpRequestUtil.request({
            type: "GET",
            request: `${API_ENDPOINT}/${selectedId.current}`,
            headers: [{ key: "Authorization", value: loginContext.prepareToken() }]
        });
    }

    const deleteItem = (id) => {
        return XMLHttpRequestUtil.request({
            type: "DELETE",
            request: `${API_ENDPOINT}/${id}`,
            headers: [{ key: "Authorization", value: loginContext.prepareToken() }]
        });
    }

    const itemDone = (id) => {

        const item = items.filter( x => x.id === id)[0];
        const doneItem = {...item};

        doneItem.done = true;

        return updateItem(doneItem);
    }

    const updateItem = (item) => {

        item.modifiedOn = _getModifiedOnTime();

        return XMLHttpRequestUtil.request({
            type: "PUT",
            request: `${API_ENDPOINT}/${selectedId.current}`,
            payload: JSON.stringify(item),
            headers: [{ key: "Authorization", value: loginContext.prepareToken() }]
        });
    }

    const createItem = (item) => {

        const newItem = {...item};

        //newItem.username = loginContext.username.current;
        newItem.modifiedOn = _getModifiedOnTime();

        return XMLHttpRequestUtil.request({
            type: "POST",
            request: API_ENDPOINT,
            payload: JSON.stringify(newItem),
            headers: [{ key: "Authorization", value: loginContext.prepareToken() }]
        });
    }

    const getRemainingItems = () => Array.isArray(items) ? items.filter( x => !x.done) : [];

    const getDoneItems = () => Array.isArray(items) ? items.filter( x => x.done) : [];

    const context = {
        items,
        version,
        setItems,
        getItems,
        deleteItem,
        getItem,
        selectedId,
        updateItem,
        itemDone,
        createItem,
        getRemainingItems,
        getDoneItems,
        incrementVersion
    };

    return (
        <ItemsContext.Provider value={context}>
            {children}
        </ItemsContext.Provider>
    )
}