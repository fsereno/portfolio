"use strict;"

import React from 'react';
import Form from 'react-bootstrap/Form';

export function FormTextArea(props) {
    return(
        <Form.Control
            name={props.id}
            id={props.id}
            as="textarea"
            rows={3}
            required
        />
    )
}