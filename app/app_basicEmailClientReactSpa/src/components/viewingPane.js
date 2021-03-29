"use strict;"

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { READ, REPLY, NEW_MESSAGE } from '../globalConstants';
import { ReadingPane } from './readingPane';
import { ReplyPane } from './replyPane';
import { NewPane } from './newPane';
import { GlobalContext, SelectedContext } from '../globalContext';

export function ViewingPane() {

    const context = React.useContext(SelectedContext);

    return (
        <Row>
            <Col>
                {context.state.mode === READ &&
                    <ReadingPane/>
                }
                {context.state.mode === REPLY &&
                    <ReplyPane/>
                }
                {context.state.mode === NEW_MESSAGE &&
                    <NewPane/>
                }
            </Col>
        </Row>
    )
}