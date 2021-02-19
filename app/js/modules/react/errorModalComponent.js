"use strict;"

import React from 'react';
import { ModalComponent } from './modalComponent';

export function ErrorModalComponent(props) {
    return (
        <ModalComponent 
            id={props.id} 
            show={props.show}
            onHide={props.handleClose}
            handleClose={props.handleClose}
            title={props.title || "We have a problem!"}
            body={props.body || "An error has occurred. Please try again."}
            bodyClass="text-danger"
        />
    )
}