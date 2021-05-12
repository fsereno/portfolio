"use strict;"

import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { ItemsContext } from '../contexts';
import { EDIT, MANAGE } from '../constants';

export const EditForm = () => {

    const itemsContext = React.useContext(ItemsContext);

    const history = useHistory();

    const [ item, setItem ] = useState({
        description: ""
    });

    const getItemDoneCallback = (item) => {
        console.log(item);
        setItem(item);
    }

    useEffect( () => {

        if (itemsContext.selectedId.current && history.location.pathname === EDIT) {
            itemsContext.getItem(getItemDoneCallback);
        } else if (history.location.pathname === EDIT) {
            history.push(MANAGE);
        }
    },[]);

    return (
            <Row>
                <Col lg={4}>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>
                                    Description:
                                </Form.Label>
                                <Form.Control
                                    name="description"
                                    id="description"
                                    type="text"
                                    value={item.description}
                                    onChange={event => setSelected({...item, description: event.target.value })}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a value.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
    );
}