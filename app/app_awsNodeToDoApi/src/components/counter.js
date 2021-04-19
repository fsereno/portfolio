"use strict;"

import React from 'react';
import Badge from 'react-bootstrap/Badge';

export function Counter(props) {
    return (
        <Badge pill variant="dark">
            {props.count}
        </Badge>
    )
}