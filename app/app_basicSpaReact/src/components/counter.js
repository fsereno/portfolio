"use strict;"

import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { GlobalContext } from '../globalContext';

export function Counter() {

    const context = React.useContext(GlobalContext);

    const count = context.inbox.filter(x => !x.read).length;

    return(
        <Badge pill variant="dark">
            {count}
        </Badge>
    )
}