"use strict;"

import React from 'react';
import { Toaster } from './toaster';

export function Toasts(props) {
    return (
        <div className="toasts-container" aria-live="polite" aria-atomic="true">
            <div className="toasts-position">
                {props.items && props.items.map((item, index) => {
                    return (
                        <Toaster
                            key={`toast_${index}`}
                            heading={item.heading}
                            label={item.label}
                            body={item.body}
                        />
                    )
                })}
            </div>
        </div>
    )
}