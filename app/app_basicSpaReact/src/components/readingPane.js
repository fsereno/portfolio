"use strict;"

import React from 'react';
import { GlobalContext } from '../globalContext';

export function ReadingPane() {

    const context = React.useContext(GlobalContext);

    return(
        <>
            <p>From: {context.selected.from}</p>
            {context.selected.body}
        </>
    )
}