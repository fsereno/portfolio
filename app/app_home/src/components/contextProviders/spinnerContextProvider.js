"use strict;"

import React, { useState } from 'react';
import { SpinnerComponent } from '../../../../js/modules/react/spinnerComponent';
import { SpinnerContext } from '../../contexts';

export function SpinnerContextProvider({children}) {

    const [ show, setShow ] = useState(true);

    const context = { show, setShow }

    return (
        <SpinnerContext.Provider value={context}>
            {children}
            <SpinnerComponent show={context.show}/>
        </SpinnerContext.Provider>
    )
}