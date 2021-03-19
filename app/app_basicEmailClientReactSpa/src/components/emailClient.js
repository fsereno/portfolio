"use strict;"

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserPane } from './browserPane';
import { ViewingPane } from './viewingPane';
import { getMessagesByDirectory } from '../utils/getMessagesByDirectory';
import { GlobalContext } from '../globalContext';

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