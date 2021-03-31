"use strict";

import React from 'react';
import { Age } from './age';
import { truncateEmailBody } from '../utils/truncateEmailBody';
import { EmailClientHandlerContext, EmailClientContext } from '../globalContext';

export const ListItem = ({item, isActive}) => {

    const context = React.useContext(EmailClientHandlerContext);
    //const emailClientContext = React.useContext(EmailClientContext);

    const handleClick = (event) => {
        event.preventDefault();
        context.selectListItemHandler(item);
    }

    const activeClass = "" //emailClientContext.state.selected.id === item.id ? "active" : "";

    return (
        <a href="#" id={`id_${item.id}`} onClick={handleClick} className={`list-group-item list-group-item-action ${activeClass}`} aria-current="true">
            {console.log("list item return")}
            <div className="d-flex w-100 justify-content-between">
                <p className="mb-1">{item.from}</p>
                <Age age={item.age} />
            </div>
            <p className="mb-1">{item.subject}</p>
            <small>{truncateEmailBody(item.body)}...</small>
        </a>
    )
}