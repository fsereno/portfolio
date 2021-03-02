"use strict;"

import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export function FormInputRow(props) {
    return (
        <Form.Row>
            <Form.Group as={Col} md="4">
                <Form.Label>
                    {props.label}
                </Form.Label>
                <props.component id={props.id} />
                <Form.Control.Feedback type="invalid">
                    Please enter a value.
                </Form.Control.Feedback>
            </Form.Group>
        </Form.Row>
    )
}