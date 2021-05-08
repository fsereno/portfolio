"use strict;"

import React, { useState } from 'react';
import { ItemsContext } from '../../contexts';

export function ItemsContextProvider({children}) {

    const [ items, setItems ] = useState([]);

    const hasNoItems = () => items.length === 0;

    const context = { items, setItems, hasNoItems };

    return (
        <>
            <ItemsContext.Provider value={context}>
                {children}
            </ItemsContext.Provider>
        </>
    )
}