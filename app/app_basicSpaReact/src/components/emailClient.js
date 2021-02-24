"use strict;"

import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Counter } from './counter';
import { ReadingPane } from './readingPane';
//import { EmailClientContext } from '../emailClientContext';
import { BrowserPane } from './browserPane';

/*const collection = [
    {
        id: 0,
        from: "someone@email.co.uk",
        heading: "Some heading 1",
        body: "Some body text here 1",
        age: 1,
        read: true
    },
    {
        id: 1,
        from: "someone@email.co.uk",
        heading: "Some heading 2",
        body: "Some body text here 2",
        age: 2,
        read: false
    },
    {
        id: 2,
        from: "someone@email.co.uk",
        heading: "Some heading 3",
        body: "Some body text here 3",
        age: 3,
        read: false
    }
]*/

export function EmailClient() {

    /*const [ _context, setContext ] = useState({
        collection,
        selected: collection[0]
    });

    const context = _context;
    context.setContext = setContext;*/

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