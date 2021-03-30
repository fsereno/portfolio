"use strict;"

import React, { useState } from 'react';
import { EmailModalContext } from '../globalContext';

export function EmailModalContextProvider({children}) {

    const [state, setState] = useState(false)

    const context = { state, setState };

    return (
        <EmailModalContext.Provider value={context}>
            {children}
        </EmailModalContext.Provider>
    )
}