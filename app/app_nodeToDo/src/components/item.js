"use strict;"

import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { DoneItem } from './doneItem';
import { ItemToDo } from './itemToDo';

export const Item = React.memo(({item}) => {
    return (
        <ListGroup.Item variant={item.done ? "dark" : "" } className="d-flex justify-content-between align-items-center px-2">
            <DoneItem item={item} />
            <ItemToDo item={item} />
        </ListGroup.Item>
    );
},(prev, next) => {
    if(prev.item.done === next.item.done
    && prev.item.description === next.item.description
    && prev.item.targetDate === next.item.targetDate
    && prev.item.modifiedOn === next.item.modifiedOn) {
        return true;
    }

    return false;
});