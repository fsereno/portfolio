"use strict";

import React from 'react';
import { Age } from './age';
import { truncateEmailBody } from '../utils/truncateEmailBody';
import { EmailClientHandlerContext } from '../contexts';

export const ListItem = React.memo(({ item, active }) => {

    const context = React.useContext(EmailClientHandlerContext);
    const handleClick = (event) => {
        event.preventDefault();
        context.selectListItemHandler(item);
    }

    return (
        <a href="#" id={`id_${item.id}`} onClick={handleClick} className={`list-group-item list-group-item-action ${active ? "active" : ""}`} aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <p className="mb-1">{item.from}</p>
                <Age age={item.age} />
            </div>
            <p className="mb-1">{item.subject}</p>
            <small>{truncateEmailBody(item.body)}...</small>
        </a>
    )
}, (prev, next) => prev.active === next.active);