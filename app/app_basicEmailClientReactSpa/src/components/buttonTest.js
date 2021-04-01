"use strict;"

import React from 'react';
import { EmailClientContext } from '../contexts';
import { DESELECT_THREAD } from '../constants';

export function ButtonTest() {
    const context = React.useContext(EmailClientContext);
    return (
        <button onClick={() => context.dispatch({ type: DESELECT_THREAD })}></button>
    )
}
