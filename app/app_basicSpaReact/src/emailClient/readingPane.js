"use strict;"

import React from 'react';
import { EmailClientContext } from './emailClientContext';

export function ReadingPane() {

    const context = React.useContext(EmailClientContext);

    return(
        <>
            <h2>{context.selected.heading}</h2>
            <h4>From: {context.selected.from}</h4>
            {context.selected.body}
        </>
    )
}