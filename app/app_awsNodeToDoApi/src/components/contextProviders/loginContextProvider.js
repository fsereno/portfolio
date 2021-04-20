"use strict;"

import React, { useState } from 'react';
import { LoginContext } from '../../contexts';

export function LoginContextProvider({children}) {

    const [ authenticated, setAuthenticated ] = useState(false);

    const context = { authenticated, setAuthenticated };

    return (
        <>
            <LoginContext.Provider value={context}>
                {children}
            </LoginContext.Provider>
        </>
    )
}