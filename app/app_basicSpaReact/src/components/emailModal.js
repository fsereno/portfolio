"use strict;"

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ReadingPane } from './readingPane';
import { ReplyPane } from './replyPane';
import { NewPane } from './newPane';
import { DESELECT, REPLY, READ, NEW_MESSAGE } from '../globalConstants';
import { GlobalContext } from '../globalContext';

export function EmailModal() {

    const context = React.useContext(GlobalContext);

    const handleClose = () => context.dispatch({ type: DESELECT });

    const handleReplyClick = () => context.dispatch({ type: REPLY });

    return (
        <Modal show={context.showModal} onHide={handleClose}>
            {context.selected &&
                <>
                    <Modal.Header>
                        <Modal.Title className="display-4">{context.selected.subject}</Modal.Title>
                        <Button variant="link" className="close" onClick={handleClose}>
                        <span className="lr">
                            <span className="rl"></span>
                        </span>
                        </Button>
                    </Modal.Header>
                    <Modal.Body>
                        {context.mode === READ &&
                            <ReadingPane/>
                        }
                        {context.mode === REPLY &&
                            <ReplyPane/>
                        }
                        {context.mode === NEW_MESSAGE &&
                            <NewPane/>
                        }
                    </Modal.Body>
                </>
            }
            <Modal.Footer>
                {context.mode === READ &&
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