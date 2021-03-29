"use strict;"

import React, { useEffect, useState } from 'react';
import { Toast } from './toast';

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
    },[]);

    return (
        <div className="toasts-container" aria-live="polite" aria-atomic="true" style={ { visibility: isVisible ? "visible" : "hidden" } }>
            <div className="toasts-position">
                <Toasts items={collection}/>
            </div>
        </div>
    )
}