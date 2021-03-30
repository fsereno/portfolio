"use strict;"

import React, { useReducer, useMemo } from 'react';
import { MY_ADDRESS, READ } from '../globalConstants';
import { EmailClientContext } from '../globalContext';
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