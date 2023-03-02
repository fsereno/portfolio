"use strict;"

import React, { useState, useReducer } from 'react';
import { SpinnerContext } from '../../../../js/modules/react/spinnerComponent';
import { DESCRIPTION, ITEM } from '../../constants';
import { ItemsContext, ManageContext } from '../../contexts';
import { itemReducer } from '../../reducers/itemReducer';

export const ManageContextProvider = ({ children }) => {

    const spinnerContext = React.useContext(SpinnerContext);
    const itemsContext = React.useContext(ItemsContext);

    const [ showError, setShowError ] = useState(false);

    const [ state, dispatch ] = useReducer(itemReducer, ITEM);

    const doneCallback = () => {
        spinnerContext.hideSpinner();
        itemsContext.incrementVersion();
        setShowError(false);
        dispatch({ type: DESCRIPTION, value: "" });
    }

    const failCallback = () => {
        spinnerContext.hideSpinner();
        setShowError(true);
    }

    const context = {
        doneCallback,
        failCallback,
        showError,
        state,
        dispatch
    }

    return (
        <ManageContext.Provider value={context}>
            {children}
        </ManageContext.Provider>
    )
}