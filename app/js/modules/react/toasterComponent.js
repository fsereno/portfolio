"use strict;"

import React, { useEffect, useState, useReducer } from 'react';

export const ENQUEUE_TOAST = "enqueueToast";
export const DEQUEUE_TOAST = "dequeueToast";
export const REMOVE_TOAST_AT_INDEX = "removeToastAtIndex";

export const ToasterContext = React.createContext();

export function ToastReducer(state, action) {
    switch(action.type) {
        case ENQUEUE_TOAST: {
            const items = [...state.items];
            items.unshift(action.item);
            return {
                ...state,
                items
            }
        }
        case DEQUEUE_TOAST: {
            const items = [...state.items]
            items.pop();
            return {
                ...state,
                items
            }
        }
        case REMOVE_TOAST_AT_INDEX: {
            const items = [...state.items];
            items.splice(action.index, 1);
            return {
                ...state,
                items
            }
        }
        default:
            throw new Error();
    }
  }

function Toasts(props) {
    return(
        <>
            {props.items.map((item, index) => {
                return (
                    <Toast
                        key={`toast_${index}`}
                        index={index}
                        item={item}
                    />
                )
            })}
        </>
    )
}

export function Toaster() {

    const [ isVisible, setIsVisible ] = useState(false);
    const [ collection, setCollection ] = useState([]);

    const context = React.useContext(ToasterContext);

    useEffect(() => {
        setCollection(context.state.items);
        setIsVisible(context.state.items.length > 0);
    },[context.state.items]);

    return (
        <div className="toasts-container" aria-live="polite" aria-atomic="true" style={ { visibility: isVisible ? "visible" : "hidden" } }>
            <div className="toasts-position">
                <Toasts items={collection}/>
            </div>
        </div>
    )
}

export function ToasterContextProvider({children}) {

    const [ state, dispatch ] = useReducer(ToastReducer, { items: [] });

    const stateValue = { state, dispatch };

    return (
        <>
            <ToasterContext.Provider value={stateValue}>
                {children}
                <Toaster />
            </ToasterContext.Provider>
        </>
    )
}

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