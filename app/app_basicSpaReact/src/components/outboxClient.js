"use strict;"

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserPane } from './browserPane';
import { EmailModal } from './emailModal'
import { OUTBOX } from '../globalConstants';
import { GlobalContext } from '../globalContext';

export function OutboxClient() {

    const context = React.useContext(GlobalContext)

    return(
        <>
            <Row>
                <Col>
                    <BrowserPane collection={context.inbox.filter(x => x.dir === OUTBOX)}/>
                </Col>
            </Row>
            <EmailModal/>
        </>
    )
}