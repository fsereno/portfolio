"use strict;"

import React, { useEffect } from 'react';
import { ToasterContext } from './toaster';
import { DEQUEUE_TOAST, REMOVE_TOAST_AT_INDEX } from './toaster';

export function Toast(props) {

    const context = React.useContext(ToasterContext);

    const handleClose = () => context.dispatch( { type: REMOVE_TOAST_AT_INDEX, index: props.index });

    useEffect(() => {
        setTimeout(() => {
            context.dispatch( { type: DEQUEUE_TOAST });
        }, 5000)
    }, []);

    return (
        <>
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" style={ { opacity: 1 }}>
                <div className="toast-header">
                    <strong className="mr-auto text-dark lead">{props.item.heading}</strong>
                    <a href="#" onClick={event => event.preventDefault() & handleClose()}className="text-dark h3 mb-0">
                        <i className="bi bi-x"></i>
                    </a>
                </div>
                <div className="toast-body">
                    {props.item.body}
                </div>
            </div>
        </>
    )
}