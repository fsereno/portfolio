"use strict;"

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ViewingPane } from './viewingPane';
import { DESELECT, REPLY, READ, NEW_MESSAGE } from '../globalConstants';
import { GlobalContext } from '../globalContext';

export function EmailModal() {

    const context = React.useContext(GlobalContext);

    const handleClose = () => context.dispatch({ type: DESELECT });

    const handleReplyClick = () => context.dispatch({ type: REPLY, selected: context.selected });

    return (
        <Modal show={context.showModal} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title className="display-4">{context.selected.subject}</Modal.Title>
                <Button variant="link" className="close" onClick={handleClose}>
                <span className="lr">
                    <span className="rl"></span>
                </span>
                </Button>
            </Modal.Header>
            <Modal.Body>
                <ViewingPane />
            </Modal.Body>
            {context.mode === READ &&
                <Modal.Footer>
                    <Button id="replyBtn" onClick={handleReplyClick}>
                        Reply
                    </Button>
                    <Button id="closeBtn" variant="dark" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            }
        </Modal>
    )
}