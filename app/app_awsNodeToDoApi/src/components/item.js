"use strict;"

import React from 'react';
import { Button } from 'react-bootstrap';

export const Item = ({item, onDeleteClick}) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {item.description}
            <Button variant="danger" size="sm" onClick={() => onDeleteClick(item.id)}>
                Delete
            </Button>
        </li>
    );
}