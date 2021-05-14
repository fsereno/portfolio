"use strict;"

import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { DESCRIPTION } from '../constants';

export const ItemForm = ({state, dispatch, submitHandler, doneCallback}) => {

    const [ showValidation, setShowValidation ] = useState(false);
    const [ showFeedback, setShowFeedback ] = useState(false);
    const [ feedbackError, setFeedbackError ] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (event.currentTarget.checkValidity() === false) {
            setShowValidation(true);
            event.stopPropagation();

        } else {
            console.log("do something");

            if (typeof submitHandler === "function") {
                submitHandler(state, doneCallback);
            }

            setShowValidation(false);
        }
    }

    return (
        <>
            <Row>
                <Col lg={4}>
                    {JSON.stringify(state)}
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Form noValidate validated={showValidation} onSubmit={handleSubmit}>
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
                                    onChange={event => dispatch({ type: DESCRIPTION, value: event.target.value })}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a value.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Button className="float-right" id="submit" variant="dark" type="submit">Submit</Button>
                                {showFeedback &&
                                    <div className="text-danger">
                                        {feedbackError}
                                    </div>
                                }
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </>
    );
}