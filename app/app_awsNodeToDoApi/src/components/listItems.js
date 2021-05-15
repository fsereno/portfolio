"use strict;"

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ItemsContext } from '../contexts';
import { Item } from './item';
import { Col, Row } from 'react-bootstrap';
import { EDIT, MANAGE } from '../constants';

export const ListItems = () => {

    const itemsContext = React.useContext(ItemsContext);

    const [ version, setVersion ] = useState(0);

    const history = useHistory();

    const onEditClick = (id) => {
        itemsContext.selectedId.current = id;
        history.push(EDIT);
    }

    const onDoneClick = (id) => {
        itemsContext.selectedId.current = id;
        itemsContext.itemDone(successCallback);
    }

    const onDeleteClick = (id) => {
        itemsContext.selectedId.current = id;
        itemsContext.deleteItem(successCallback);
    }

    const successCallback = () => {
        setVersion(version + 1);
    }

    useEffect(() => {
        itemsContext.getItems();
    }, [version]);

    const items = itemsContext.items.filter( x => !x.done);
    const doneItems = itemsContext.items.filter( x => x.done);

    return (
        <Row className="justify-content-md-center">
            <Col lg={10}>
                <ul className="list-group">
                    {items.map( x => <Item key={x.id} item={x} onDoneClick={onDoneClick} onDeleteClick={onDeleteClick} onEditClick={onEditClick}/> )}
                </ul>
            </Col>
            {doneItems.length > 0 &&
                <Col className="mt-3" lg={10}>
                    <ul className="list-group">
                        {doneItems.map( x => <Item key={x.id} item={x} onDeleteClick={onDeleteClick} onEditClick={onEditClick}/> )}
                    </ul>
                </Col>
            }
        </Row>
    );
}