"use strict;"

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserPane } from './browserPane';
import { ViewingPane } from './viewingPane';
import { EmailModal } from './EmailModal';
import { GlobalContext } from '../globalContext';
import { READ, REPLY_MESSAGE } from '../globalConstants';
import { EmailClientContextProvider } from './emailClientContextProvider';
import { EmailModalContextProvider } from './emailModalContextProvider';
import { ToasterContextProvider } from './toasterContextProvider';
import { Toaster } from '../../../js/modules/react/toaster';

export function EmailClient(props) {

    const context = React.useContext(GlobalContext)

    return (
        <EmailClientContextProvider>
            <EmailModalContextProvider>
                <Row>
                    <Col>
                        <BrowserPane dir={props.dir}/>
                    </Col>
                    <Col className="d-none d-md-block">
                        {context.state.mode === READ &&
                            <Row className="justify-content-end">
                                <button id="desktopReplyBtn" className="btn btn-sm btn-dark" onClick={() => context.dispatch({ type: REPLY_MESSAGE, selected: context.state.selected }) }>
                                    <i className="bi bi-arrow-90deg-left"></i>
                                </button>
                            </Row>
                        }
                        <ViewingPane />
                    </Col>
                </Row>
                <EmailModal />
            </EmailModalContextProvider>
        </EmailClientContextProvider>
    )
}