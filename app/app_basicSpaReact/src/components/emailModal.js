"use strict;"

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ReadingPane } from './readingPane';
import { ReplyPane } from './replyPane';
import { DESELECT, REPLY } from '../globalConstants';
import { GlobalContext } from '../globalContext';

export function EmailModal() {

    const context = React.useContext(GlobalContext);

    const handleClose = () => context.dispatch({ type: DESELECT });

    const handleReplyClick = () => context.dispatch({ type: REPLY });

    return (
        <Modal show={context.isSelected} onHide={handleClose}>
            {context.selected &&
                <>
                    <Modal.Header>
                        <Modal.Title className="display-4">{context.selected.heading}</Modal.Title>
                        <Button variant="link" className="close" onClick={handleClose}>
                        <span className="lr">
                            <span className="rl"></span>
                        </span>
                        </Button>
                    </Modal.Header>
                    <Modal.Body>
                        {!context.isReply &&
                            <ReadingPane/>
                        }
                        {context.isReply &&
                            <ReplyPane/>
                        }
                    </Modal.Body>
                </>
            }
            <Modal.Footer>
                {!context.isReply &&
                    <>
                        <Button onClick={handleReplyClick}>
                            Reply
                        </Button>
                        <Button variant="dark" onClick={handleClose}>
                            Close
                        </Button>
                    </>
                }
            </Modal.Footer>
        </Modal>
    )
}