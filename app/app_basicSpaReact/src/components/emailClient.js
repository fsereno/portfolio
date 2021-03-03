"use strict;"

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserPane } from './browserPane';
import { EmailModal } from './emailModal'
import { GlobalContext } from '../globalContext';

export function EmailClient(props) {

    const context = React.useContext(GlobalContext)

    const collection = context.inbox.filter(x => x.dir === props.dir);

    return(
        <>
            <Row>
                {collection.length > 0 &&
                    <Col>
                        <BrowserPane collection={context.inbox.filter(x => x.dir === props.dir)}/>
                    </Col>
                }
                {collection.length === 0 &&
                    <Col>
                        <p>You have no messages</p>
                    </Col>
                }
            </Row>
            <EmailModal/>
        </>
    )
}