"use strict;"

import React from 'react';
import Form from 'react-bootstrap/Form';

export function FormInput(props) {
    return(
        <Form.Control
            name={props.id}
            id={props.id}
            type={props.type || "text"}
            required
        />
    )
}