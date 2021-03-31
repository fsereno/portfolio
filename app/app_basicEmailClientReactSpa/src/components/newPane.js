"use strict;"

import React, { useLayoutEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { EmailForm } from './emailForm';
import { EmailClientContext } from '../globalContext';
import { NEW_MESSAGE } from '../globalConstants';

export function NewPane() {

    const context = React.useContext(EmailClientContext);

    useLayoutEffect(() => {
        context.dispatch( { type: NEW_MESSAGE } );
    },[]);

    return(
        <Row>
            <Col lg={6}>
                <EmailForm/>
            </Col>
        </Row>
    )
}