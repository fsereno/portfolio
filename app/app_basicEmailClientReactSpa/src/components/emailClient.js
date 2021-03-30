"use strict;"

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserPane } from './browserPane';
import { ViewingPane } from './viewingPane';
import { EmailModal } from './EmailModal';
import { DesktopReplyBtn } from './desktopReplyBtn';
import { EmailClientContextProvider } from './emailClientContextProvider';
import { EmailModalContextProvider } from './emailModalContextProvider';

export function EmailClient(props) {
    return (
        <EmailClientContextProvider>
            <EmailModalContextProvider>
                <Row>
                    <Col>
                        <BrowserPane dir={props.dir}/>
                    </Col>
                    <Col className="d-none d-md-block">
                        <DesktopReplyBtn />
                        <ViewingPane />
                    </Col>
                </Row>
                <EmailModal />
            </EmailModalContextProvider>
        </EmailClientContextProvider>
    )
}