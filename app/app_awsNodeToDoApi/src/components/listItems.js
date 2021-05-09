"use strict;"

import React, { useEffect } from 'react';
import { ItemsContext } from '../contexts';
import { Item } from './item';
import { Col, Row } from 'react-bootstrap';

export const ListItems = () => {

    const itemsContext = React.useContext(ItemsContext);

    useEffect(() => {

        if (itemsContext.hasNoItems()) {
            itemsContext.getItems();
        }

    }, []);

    return (
        <Row>
            <Col lg={6}>
                <ul className="list-group">
                    {itemsContext.items.map( x => <Item key={x.id} item={x} onDeleteClick={itemsContext.deleteItem}/> )}
                </ul>
            </Col>
        </Row>
    );
}