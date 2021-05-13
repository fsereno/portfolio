"use strict;"

import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { DESCRIPTION } from '../constants';

export const ItemForm = ({state, handler}) => {
    return (
        <Row>
            <Col lg={4}>
                {state.description}
            </Col>
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
                                value={state.description}
                                onChange={event => handler({ type: DESCRIPTION, value: event.target.value })}
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