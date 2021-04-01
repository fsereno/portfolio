"use strict;"

import React, { useState } from 'react';
import { EmailModalContext } from '../globalContext';

export function EmailModalContextProvider({children}) {

    const [show, setShow] = useState(false)

    const context = { state: { show }, setShow };

    return (
        <EmailModalContext.Provider value={context}>
            {children}
        </EmailModalContext.Provider>
    )
}