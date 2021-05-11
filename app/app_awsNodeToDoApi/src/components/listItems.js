"use strict;"

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ItemsContext } from '../contexts';
import { Item } from './item';
import { Col, Row } from 'react-bootstrap';
import { EDIT } from '../constants';

export const ListItems = () => {

    const itemsContext = React.useContext(ItemsContext);
    const history = useHistory();

    const onEditClick = (id) => {
        itemsContext.selectedId.current = id;
       // itemsContext.getItem();
       history.push(EDIT);
    }

    const onDeleteClick = (id) => {
        itemsContext.selectedId.current = id;
        itemsContext.deleteItem();
    }

    useEffect(() => {

        if (itemsContext.hasNoItems()) {
            itemsContext.getItems();
        }

    }, []);

    return (
        <Row>
            <Col lg={6}>
                <ul className="list-group">
                    {itemsContext.items.map( x => <Item key={x.id} item={x} onDeleteClick={onDeleteClick} onEditClick={onEditClick}/> )}
                </ul>
            </Col>
        </Row>
    );
}