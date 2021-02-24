"use strict";

import React from 'react';
import { EmailClientContext } from '../emailClientContext';

export function ListItem(props) {

    const context = React.useContext(EmailClientContext);

    const updateCollection = (id) => {

        let collection = [...context.collection];

        collection = collection.map( item => {
            if (item.id === id) {
                item.read = true;
            }
            return item;
        });

        return collection;
    }

    const handleClick = (event) => {
        event.preventDefault();

        const collection = updateCollection(props.id);

        context.setContext({
            collection,
            selected: {
                id: props.id,
                from: props.from,
                heading: props.heading,
                body: props.body
            }
        });
    }

    const activeClass = context.selected.id === props.id ? "active" : "";

    return (
        <a href="#" onClick={handleClick} className={`list-group-item list-group-item-action ${activeClass}`} aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{props.from}</h5>
                <small>{props.age} days ago</small>
            </div>
            <p className="mb-1">{props.heading}</p>
            <small>{props.body}...</small>
        </a>
    )
}