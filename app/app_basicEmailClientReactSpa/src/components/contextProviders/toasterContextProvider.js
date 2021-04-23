
"use strict;"

import React, { useReducer } from 'react';
import { ToastReducer, ToasterContext } from '../../../../js/modules/react/toaster';

export function ToasterContextProvider({children}) {

    const [ state, dispatch ] = useReducer(ToastReducer, { items: [] });

    const stateValue = { state, dispatch };

    return (
        <>
            <ToasterContext.Provider value={stateValue}>
                {children}
            </ToasterContext.Provider>
        </>
    )
}