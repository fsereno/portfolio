"use strict;"

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Counter } from './counter';
import { BrowserPane } from './browserPane';
import { EmailModal } from './emailModal'
import { INBOX } from '../globalConstants';
import { GlobalContext } from '../globalContext';

export function InboxClient() {

    const context = React.useContext(GlobalContext)

    return(
        <>
            <Row className="mb-2">
                <Col>
                    You have <Counter/> unread messages
                </Col>
            </Row>
            <Row>
                <Col>
                    <BrowserPane collection={context.inbox.filter(x => x.dir === INBOX)}/>
                </Col>
            </Row>
            <EmailModal/>
        </>
    )
}