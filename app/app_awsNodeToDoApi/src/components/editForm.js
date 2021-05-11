"use strict;"

import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ItemsContext } from '../contexts';

export const EditForm = () => {

    const itemsContext = React.useContext(ItemsContext);

    useEffect( () => {
        if (itemsContext.selectedId.current) {
            itemsContext.getItem();
        }
    },[]);

    return (
        <Form>
            <p>some form</p>
            {itemsContext.selected && itemsContext.selected.current && 
                <ul>
                    <li>{itemsContext.selected.current.description}</li>
                    <li>{itemsContext.selected.current.id}</li>
                    <li>{itemsContext.selected.current.done}</li>
                    <li>{itemsContext.selected.current.targetDate}</li>
                </ul>
            }
        </Form>
    );
}