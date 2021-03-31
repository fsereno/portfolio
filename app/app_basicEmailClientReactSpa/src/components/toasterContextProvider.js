
"use strict;"

import React, { useReducer } from 'react';
import { ToastReducer, ToasterContext } from '../../../js/modules/react/toaster';

const createToasts = () => {
    const limit = 0;
    const toasts = [];
    for (let i = 0; i < limit; i++ ) {
      toasts.push({ heading: "Heading", body: "Body" });
    }
    return toasts;
}
export function ToasterContextProvider({children}) {

    const toasts = createToasts();

    const [ state, dispatch ] = useReducer(ToastReducer, { items: toasts });

    const stateValue = { state, dispatch };

    return (
        <>
            <ToasterContext.Provider value={stateValue}>
                {children}
            </ToasterContext.Provider>
        </>
    )
}