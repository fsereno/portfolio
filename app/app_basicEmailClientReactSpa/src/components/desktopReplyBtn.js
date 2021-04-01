"use strict;"

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { EmailClientContext } from '../contexts';
import { READ, REPLY_MESSAGE } from '../constants';

export function DesktopReplyBtn() {

    const context = React.useContext(EmailClientContext);

    const clickHandler = () => {
        context.dispatch({
            type: REPLY_MESSAGE,
            selected: context.state.selected
        })
    }

    return (
        <>
            {context.state.mode === READ && context.state.selectedThread.length > 0 &&
                <Row className="justify-content-end">
                    <button id="desktopReplyBtn" className="btn btn-sm btn-dark" onClick={clickHandler}>
                        <i className="bi bi-arrow-90deg-left"></i>
                    </button>
                </Row>
            }
        </>
    )
}