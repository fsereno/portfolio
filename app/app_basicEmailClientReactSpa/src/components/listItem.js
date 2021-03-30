"use strict";

import React from 'react';
import { Age } from './age';
import { truncateEmailBody } from '../utils/truncateEmailBody';
import { SELECT, MIN_VIEWPORT_WIDTH } from '../globalConstants'
import { GlobalContext, EmailClientContext, EmailModalContext } from '../globalContext';
import { getEmailsByThread } from '../utils/getEmailsByThread';

export const ListItem = React.memo((props) => {

    const globalContext = React.useContext(GlobalContext);
    const emailClientContext = React.useContext(EmailClientContext);
    const emailModalContext = React.useContext(EmailModalContext);

    const handleClick = (event) => {
        event.preventDefault();
        const showModal = window.innerWidth < MIN_VIEWPORT_WIDTH;
        const thread = getEmailsByThread(globalContext.state.messages, props.item);
        emailClientContext.dispatch({
            type: SELECT,
            thread: thread,
            item: props.item
        });
        emailModalContext.setState(showModal);
    }

   const activeClass = emailClientContext.state.selected.id === props.item.id ? "active" : "";

    return (
        <a href="#" id={`id_${props.item.id}`} onClick={handleClick} className={`list-group-item list-group-item-action ${activeClass}`} aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <p className="mb-1">{props.item.from}</p>
                <Age age={props.item.age}/>
            </div>
            <p className="mb-1">{props.item.subject}</p>
            <small>{truncateEmailBody(props.item.body)}...</small>
        </a>
    )
})