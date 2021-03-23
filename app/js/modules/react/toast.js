"use strict;"

import React, { useEffect } from 'react';
import { ToastContext } from './toastContext';
import { REMOVE_TOAST } from './toastConstants';

export function Toast(props) {

    const context = React.useContext(ToastContext);

    const handleClose = () => context.dispatch( { type: REMOVE_TOAST, index: props.index });

  /*useEffect(() => {
        setTimeout(() => {
            handleClose();
        }, 5000)
    }, []);*/

    return (
        <>
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" style={ { opacity: 1 }}>
                <div className="toast-header">
                    <strong className="mr-auto">{props.item.heading}</strong>
                    <small className="text-muted">{props.item.label}</small>
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