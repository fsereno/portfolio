"use strict;"

import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

export function Toaster(props) {

    const [show, setShow ] = useState(props.show);

    return (
        <Toast show={show}>
            <Toast.Header closeButton={false}>
                <strong className="mr-auto">{props.heading}</strong>
                <small>{props.label}</small>
                <a href="#" onClick={event => event.preventDefault() & setShow(false)}className="text-dark h3 mb-0">
                    <i className="bi bi-x"></i>
                </a>
            </Toast.Header>
            <Toast.Body>{props.body}</Toast.Body>
        </Toast>
    )
}