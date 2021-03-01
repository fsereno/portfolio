"use strict;"

import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { getUnreadEmailCount } from '../utils/getUnreadEmailCount';
import { GlobalContext } from '../globalContext';

export function Counter() {

    const context = React.useContext(GlobalContext);

    const count = getUnreadEmailCount(context);

    return(
        <Badge pill variant="dark">
            {count}
        </Badge>
    )
}