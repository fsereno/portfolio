"use strict;"

import React from 'react';
import { Toast } from './toast';

export function Toasts(props) {
    return (
        <div className="toasts-container" aria-live="polite" aria-atomic="true">
            <div className="toasts-position">
                {props.items && props.items.map((item, index) => {
                    return (
                        <Toast
                            key={`toast_${index}`}
                            item={item}
                        />
                    )
                })}
            </div>
        </div>
    )
}