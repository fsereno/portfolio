"use strict;"

import React from 'react';
import { Toast } from './toast';

export const ENQUEUE_TOAST = "enqueueToast";
export const DEQUEUE_TOAST = "dequeueToast";
export const REMOVE_TOAST_AT_INDEX = "removeToastAtIndex";

export function ToastReducer(state, action) {
    switch(action.type) {
        case ENQUEUE_TOAST:
            return [...state, action.item]
        case DEQUEUE_TOAST: {
            const toasts = [...state]
            toasts.shift();
            return toasts
        }
        case REMOVE_TOAST_AT_INDEX: {
            const toasts = [...state];
            toasts.splice(action.index, 1);
            return toasts
        }
        default:
            throw new Error();
    }
  }

export function Toasts(props) {
    return (
        <div className="toasts-container" aria-live="polite" aria-atomic="true">
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