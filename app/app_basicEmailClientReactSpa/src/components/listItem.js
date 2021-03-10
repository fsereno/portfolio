"use strict";

import React from 'react';
import { Age } from './age';
import { truncateEmailBody } from '../utils/truncateEmailBody';
import { SELECT } from '../globalConstants'
import { GlobalContext } from '../globalContext';

export function ListItem(props) {

    const context = React.useContext(GlobalContext);

    const handleClick = () => context.dispatch({ type: SELECT, selected: props.selected });

    const activeClass = context.selected.id === props.selected.id ? "active" : "";

    return (
        <button onClick={handleClick} className={`list-group-item list-group-item-action ${activeClass}`} aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <p className="mb-1">{props.selected.from}</p>
                <Age age={props.selected.age}/>
            </div>
            <p className="mb-1">{props.selected.subject}</p>
            <small>{truncateEmailBody(props.selected.body)}...</small>
        </button>
    )
}