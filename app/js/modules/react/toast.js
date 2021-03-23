"use strict;"

import React, { useState, useEffect } from 'react';

export function Toast(props) {

    const getFadeInClass = show => show ? "in" : "out";
    const [showClass, setShowClass ] = useState(getFadeInClass(props.item.show));
    const handleClose = () => setShowClass(getFadeInClass(false));

    useEffect(() => {
        setTimeout(() => {
            handleClose();
        }, 5000)
    }, [showClass]);

    return (
        <>
            <div className={`toast fade-element ${showClass}`} role="alert" aria-live="assertive" aria-atomic="true">
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