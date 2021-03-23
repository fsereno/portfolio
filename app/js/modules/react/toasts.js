"use strict;"

import React, { useReducer } from 'react';
import { Toast } from './toast';
import { ToastContext } from './toastContext';
import { ADD_TOAST, REMOVE_TOAST } from './toastConstants';

function ToastReducer(state, action) {
    switch(action.type) {
        case ADD_TOAST:
            return [...state, action.item]
        case REMOVE_TOAST:
            const toasts = [...state];
            toasts.splice(action.index, 1);
            return toasts
        default:
            throw new Error();
    }
}

export function Toasts() {

    const initialState = [ 
        {
            heading: "Some heading", 
            label: "Some label", 
            body: "Heads up, toasts will stack automatically", 
            show: true 
        },
        {
            heading: "Some other heading", 
            label: "Some label", 
            body: "Heads up, toasts will stack automatically", 
            show: true 
        } 
    ];

    const [ state, dispatch ] = useReducer(ToastReducer, initialState);

    const context = {...state, dispatch };

    return (
        <ToastContext.Provider value={context}>
            <div className="toasts-container" aria-live="polite" aria-atomic="true">
                <div className="toasts-position">
                    {state.map((item, index) => {
                        return (
                            <Toast
                                key={`toast_${index}`}
                                index={index}
                                item={item}
                            />
                        )
                    })}
                </div>
            </div>
        </ToastContext.Provider>
    )
}