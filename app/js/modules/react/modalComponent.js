"use strict;"

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export function ModalComponent(props) {
    return (
        <Modal id={props.id} show={props.show} onHide={props.handleClose}>
            <Modal.Header>
                <Modal.Title className="display-4">{props.title}</Modal.Title>
                <Button variant="link" className="close" onClick={props.handleClose}>
                <span className="lr">
                    <span className="rl"></span>
                </span>
                </Button>
            </Modal.Header>
            <Modal.Body>
                <p className={`lead px-2 ${props.bodyClass}`}>
                    {props.body}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={props.handleClose}>
                Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}