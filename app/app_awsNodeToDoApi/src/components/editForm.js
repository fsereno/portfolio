"use strict;"

import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ItemsContext } from '../contexts';

export const EditForm = () => {

    const itemsContext = React.useContext(ItemsContext);

    const [ selected, setSelected ] = useState();

    const getItemDoneCallback = (item) => {
        console.log(item);
        setSelected(item);
    }

    useEffect( () => {
        if (itemsContext.selectedId.current) {
            itemsContext.getItem(getItemDoneCallback);
        }
    },[]);

    return (
        <Form>
            <p>some form</p>
            {selected && 
                <ul>
                    <li>{selected.description}</li>
                    <li>{selected.id}</li>
                    <li>{selected.done}</li>
                    <li>{selected.targetDate}</li>
                </ul>
            }
        </Form>
    );
}