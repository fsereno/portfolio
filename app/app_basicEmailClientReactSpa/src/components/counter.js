"use strict;"

import React from 'react';
import Badge from 'react-bootstrap/Badge';

export function Counter(props) {
    return (
        <Badge pill bg="dark">
            {props.count}
        </Badge>
    )
}