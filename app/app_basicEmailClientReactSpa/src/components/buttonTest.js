"use strict;"

import React from 'react';
import { EmailClientContext } from '../globalContext';
import { DESELECT_THREAD } from '../globalConstants';

export function ButtonTest() {
    const context = React.useContext(EmailClientContext);
    return (
        <button onClick={() => context.dispatch({ type: DESELECT_THREAD })}></button>
    )
}
