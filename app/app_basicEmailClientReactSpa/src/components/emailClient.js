"use strict;"

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserPane } from './browserPane';
import { ViewingPane } from './viewingPane';
import { getMessagesByDirectory } from '../utils/getMessagesByDirectory';
import { GlobalContext } from '../globalContext';
import { READ, REPLY_MESSAGE } from '../globalConstants';

export function EmailClient(props) {

    const context = React.useContext(GlobalContext)

    const collection = getMessagesByDirectory(context.messages, props.dir);

    return(
        <>
            <Row>
                {collection.length > 0 &&
                    <>
                        <Col>
                            <BrowserPane collection={collection}/>
                        </Col>
                        <Col className="d-none d-md-block">
                            {context.mode === READ &&
                                <Row className="justify-content-end">
                                    <button className="btn btn-sm btn-dark" onClick={() => context.dispatch({ type: REPLY_MESSAGE, selected: context.selected }) }>
                                        <i className="bi bi-arrow-90deg-left"></i>
                                    </button>
                                </Row>
                            }
                            <ViewingPane />
                        </Col>
                    </>
                }
                {collection.length === 0 &&
                    <Col>
                        <p>You have no messages</p>
                    </Col>
                }
            </Row>
        </>
    )
}