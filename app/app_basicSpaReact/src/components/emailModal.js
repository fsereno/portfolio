"use strict;"

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ReadingPane } from './readingPane';
import { GlobalContext } from '../globalContext';

export function EmailModal() {

    const context = React.useContext(GlobalContext);

    const handleClose = () => {

        context.setContext(prevContext => (
            {...prevContext, ...{
                isSelected: false
            } })
        );

    }

    return (
        <Modal show={context.isSelected} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title className="display-4">{context.selected.heading}</Modal.Title>
                <Button variant="link" className="close" onClick={handleClose}>
                <span className="lr">
                    <span className="rl"></span>
                </span>
                </Button>
            </Modal.Header>
            <Modal.Body>
                <ReadingPane/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}