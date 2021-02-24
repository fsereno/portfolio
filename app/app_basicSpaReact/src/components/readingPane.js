"use strict;"

import React from 'react';
import { EmailClientContext } from '../emailClientContext';

export function ReadingPane() {

    const context = React.useContext(EmailClientContext);

    return(
        <>
            <h2>{context.inbox.selected.heading}</h2>
            <h4>From: {context.inbox.selected.from}</h4>
            {context.inbox.selected.body}
        </>
    )
}