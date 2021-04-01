"use strict;"

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserPane } from './browserPane';
import { ViewingPane } from './viewingPane';
import { EmailModal } from './EmailModal';
import { DesktopReplyBtn } from './desktopReplyBtn';

export function EmailClient(props) {
    return (
        <>
            <Row>
                <Col>
                    <BrowserPane dir={props.dir} limit={3}/>
                </Col>
                <Col className="d-none d-md-block">
                    <DesktopReplyBtn />
                    <ViewingPane />
                </Col>
            </Row>
            <EmailModal />
        </>

    )
}