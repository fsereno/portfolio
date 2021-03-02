"use strict";

import React from 'react';
import { GlobalContext } from '../globalContext';
import { Age } from './age';
import { truncateEmailBody } from '../utils/truncateEmailBody';

export function ListItem(props) {

    const context = React.useContext(GlobalContext);

    const handleClick = () => context.dispatch({ type: 'select', id: props.id });

    const activeClass = context.selected.id === props.id ? "active" : "";

    return (
        <button onClick={handleClick} className={`list-group-item list-group-item-action ${activeClass}`} aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <p className="mb-1">{props.from}</p>
                <Age age={props.age}/>
            </div>
            <p className="mb-1">{props.heading}</p>
            <small>{truncateEmailBody(props.body)}...</small>
        </button>
    )
}