"use strict;"

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { EmailClient } from './emailClient'
import { INBOX } from '../constants';

export function InboxClient() {
    return(
        <>
            <Row>
                <Col>
                    <EmailClient dir={INBOX} />
                </Col>
            </Row>
        </>
    )
}