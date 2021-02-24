"use strict;"

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Counter } from './counter';
import { ReadingPane } from './readingPane';
import { BrowserPane } from './browserPane';

export function EmailClient() {
    return(
        <>
            <Row className="mb-2">
                <Col>
                    You have <Counter/> unread messages
                </Col>
            </Row>
            <Row>
                <Col>
                    <BrowserPane />
                </Col>
                <Col>
                    <ReadingPane />
                </Col>
            </Row>
        </>
    )
}