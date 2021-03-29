
"use strict;"

import React, { useReducer, useMemo } from 'react';
import { Toaster, ToastReducer, ToasterContext } from '../../../js/modules/react/toaster';

const createToasts = () => {
    const limit = 3000;
    const toasts = [];
    for (let i = 0; i < limit; i++ ) {
      toasts.push({ heading: "Heading", body: "Body" });
    }
    return toasts;
}
export function ToasterContainer() {

    const toasts = createToasts();

    const [ state, dispatch ] = useReducer(ToastReducer, { items: toasts });

    const stateValue = useMemo(() => {
        return { state, dispatch };
    }, [state, dispatch]);

    return (
        <>
            <ToasterContext.Provider value={stateValue}>
                <Toaster/>
            </ToasterContext.Provider>
        </>
    )
}