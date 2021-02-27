"use strict";

import React from 'react';
import { GlobalContext } from '../globalContext';
import { Age } from './age';

export function ListItem(props) {

    const context = React.useContext(GlobalContext);

    const updateCollection = (id) => {

        let collection = [...context.inbox];

        collection = collection.map( item => {
            if (item.id === id) {
                item.read = true;
            }
            return item;
        });

        return collection;
    }

    const truncateBody = (body, limit = 75) => {

        let result = body;

        if (body.length >= limit) {
            result = body.substring(0, limit);
        }

        return result;
    }

    const handleClick = (event) => {
        event.preventDefault();

        const collection = updateCollection(props.id);

        context.setContext(prevContext => (
            {...prevContext, ...{
                collection,
                selected: {
                    id: props.id,
                    from: props.from,
                    heading: props.heading,
                    age: props.age,
                    body: props.body
                },
                isSelected: true
            } })
        );
    }

    const activeClass = context.selected.id === props.id ? "active" : "";

    return (
        <a href="#" onClick={handleClick} className={`list-group-item list-group-item-action ${activeClass}`} aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <p className="mb-1">{props.from}</p>
                <Age age={props.age}/>
            </div>
            <p className="mb-1">{props.heading}</p>
            <small>{truncateBody(props.body)}...</small>
        </a>
    )
}