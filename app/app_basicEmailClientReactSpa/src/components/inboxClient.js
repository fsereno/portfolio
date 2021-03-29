"use strict;"

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Counter } from './counter';
import { EmailClient } from './emailClient'
import { getUnreadEmailCount } from '../utils/getUnreadEmailCount';
import { INBOX } from '../globalConstants';
import { GlobalContext } from '../globalContext';

export function InboxClient() {

    //const context = React.useContext(GlobalContext);

    //const count = getUnreadEmailCount(context.messages, INBOX);

    return(
        <>
            <Row className="mb-2">
                <Col>
                    Count ?
                </Col>
            </Row>
            <Row>
                <Col>
                    <EmailClient dir={INBOX} />
                </Col>
            </Row>
        </>
    )
}