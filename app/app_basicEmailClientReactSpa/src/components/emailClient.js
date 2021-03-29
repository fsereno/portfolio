"use strict;"

import React, { useReducer, useMemo } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserPane } from './browserPane';
import { ViewingPane } from './viewingPane';
import { GlobalContext, SelectedContext } from '../globalContext';
import { READ, REPLY_MESSAGE, MY_ADDRESS } from '../globalConstants';
import { SelectedReducer } from '../reducers/reducer';

export function EmailClient(props) {

    const context = React.useContext(GlobalContext)

    const [state, dispatch] = useReducer(SelectedReducer, {
        selected: {
            id: -1,
            to: "",
            from: MY_ADDRESS,
            subject: "",
            body: "",
            time: 0
        },
        selectedThread: []
    });

    const stateValue = useMemo(() => {
        return { state, dispatch };
    }, [state, dispatch]);

    return(
        <SelectedContext.Provider value={stateValue}>
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
        </SelectedContext.Provider>
    )
}