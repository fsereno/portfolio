"use strict;"

import React, { useEffect, useState } from 'react';
import { Toast } from './toast';

export const ENQUEUE_TOAST = "enqueueToast";
export const DEQUEUE_TOAST = "dequeueToast";
export const REMOVE_TOAST_AT_INDEX = "removeToastAtIndex";

export function ToastReducer(state, action) {
    switch(action.type) {
        case ENQUEUE_TOAST: {
            const toasts = [...state];
            toasts.unshift(action.item);
            return toasts;
        }
        case DEQUEUE_TOAST: {
            const toasts = [...state]
            toasts.pop();
            return toasts;
        }
        case REMOVE_TOAST_AT_INDEX: {
            const toasts = [...state];
            toasts.splice(action.index, 1);
            return toasts;
        }
        default:
            throw new Error();
    }
  }

export function Toasts(props) {

    const [ isVisible, setIsVisible ] = useState(false);

    useEffect(() => {
        setIsVisible(props.items.length > 0);
    });

    return (
        <div className="toasts-container" aria-live="polite" aria-atomic="true" style={ { visibility: isVisible ? "visible" : "hidden" } }>
            <div className="toasts-position">
                {props.items.map((item, index) => {
                    return (
                        <Toast
                            key={`toast_${index}`}
                            index={index}
                            item={item}
                            dispatch={props.dispatch}
                        />
                    )
                })}
            </div>
        </div>
    )
}