"use strict;"

import React, { useReducer } from 'react';
import { MY_ADDRESS, READ } from '../constants';
import { EmailClientContext } from '../contexts';
import { EmailClientReducer } from '../reducers/reducer';

export function EmailClientContextProvider({children}) {

    const [state, dispatch] = useReducer(EmailClientReducer, {
        selected: {
            id: -1,
            to: "",
            from: MY_ADDRESS,
            subject: "",
            body: "",
            time: 0
        },
        selectedThread: [],
        mode: READ,
        showModal: false
    });

    const context = { state, dispatch };

    return (
        <EmailClientContext.Provider value={context}>
            {children}
        </EmailClientContext.Provider>
    )
}