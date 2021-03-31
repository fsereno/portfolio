"use strict;"

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { EmailForm } from './emailForm';

export function NewPane() {
    return(
        <Row>
            <Col lg={6}>
                <EmailForm/>
            </Col>
        </Row>
    )
}