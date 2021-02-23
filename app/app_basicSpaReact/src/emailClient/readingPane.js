"use strict;"

import React from 'react';
import { EmailClientContext } from './emailClientContext';

export function ReadingPane() {

    const context = React.useContext(EmailClientContext);

    return(
        <>
            <h2>{context.selected.heading}</h2>
            <h3>{context.selected.from}</h3>
            {context.selected.body}
        </>
    )
}