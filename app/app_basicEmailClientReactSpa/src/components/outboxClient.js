"use strict;"

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { EmailClient } from './emailClient'
import { OUTBOX } from '../constants';

export function OutboxClient() {
    return (
        <>
            <Row>
                <Col>
                    <EmailClient dir={OUTBOX} />
                </Col>
            </Row>
        </>
    )
}