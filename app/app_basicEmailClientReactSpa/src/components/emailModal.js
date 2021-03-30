"use strict;"

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ViewingPane } from './viewingPane';
import { REPLY_MESSAGE, READ } from '../globalConstants';
import { EmailClientContext, EmailModalContext } from '../globalContext';

export function EmailModal() {

    const context = React.useContext(EmailClientContext);
    const emailModalContext = React.useContext(EmailModalContext);

    const handleClose = () => emailModalContext.setState(false);

    const handleReplyClick = () => context.dispatch({ type: REPLY_MESSAGE, selected: context.state.selected });

    return (
        <Modal show={emailModalContext.state} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title className="display-4">{context.state.selected.subject}</Modal.Title>
                <Button variant="link" className="close" onClick={handleClose}>
                <span className="lr">
                    <span className="rl"></span>
                </span>
                </Button>
            </Modal.Header>
            <Modal.Body>
                <ViewingPane />
            </Modal.Body>
            {context.state.mode === READ &&
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