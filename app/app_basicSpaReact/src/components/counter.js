"use strict;"

import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { EmailClientContext } from '../emailClientContext';

export function Counter() {

    const context = React.useContext(EmailClientContext);

    const count = context.inbox.collection.filter(x => !x.read).length;

    return(
        <Badge pill variant="dark">
            {count}
        </Badge>
    )
}