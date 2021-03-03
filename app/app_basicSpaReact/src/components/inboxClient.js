"use strict;"

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Counter } from './counter';
import { EmailModal } from './emailModal'
import { EmailClient } from './emailClient'
import { INBOX } from '../globalConstants';

export function InboxClient() {
    return(
        <>
            <Row className="mb-2">
                <Col>
                    You have <Counter/> unread messages
                </Col>
            </Row>
            <Row>
                <Col>
                    <EmailClient dir={INBOX} />
                </Col>
            </Row>
            <EmailModal/>
        </>
    )
}