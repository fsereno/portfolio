"use strict;"

import React, { useState, useEffect } from 'react';

export function Toast(props) {

    const [opacity, setOpacity ] = useState(props.item.show ? 1 : 0);

    useEffect(() => {
        setTimeout(() => {
            setOpacity(0);
        }, 3000)
    }, [opacity]);

    return (
        <>
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" style={{ opacity: opacity }}>
                <div className="toast-header">
                    <strong className="mr-auto">{props.item.heading}</strong>
                    <small className="text-muted">{props.item.label}</small>
                    <a href="#" onClick={event => event.preventDefault() & setOpacity(0)}className="text-dark h3 mb-0">
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