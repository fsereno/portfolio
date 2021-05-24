"use strict;"

import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { SpinnerContext } from '../../../js/modules/react/spinnerComponent';
import { DESCRIPTION, STANDARD_ERROR } from '../constants';

export const ItemForm = ({state, dispatch, submitHandler, doneCallback}) => {

    const [ showValidation, setShowValidation ] = useState(false);
    const [ showFeedback, setShowFeedback ] = useState(false);
    const spinnerContext = React.useContext(SpinnerContext);

    const failCallback = () => {
        spinnerContext.hideSpinner();
        setShowFeedback(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (event.currentTarget.checkValidity() === false) {
            setShowValidation(true);
            event.stopPropagation();

        } else {

            if (typeof submitHandler === "function") {
                spinnerContext.showSpinner();
                submitHandler(state)
                    .then(() => doneCallback())
                    .catch(() => failCallback());
            }

            setShowValidation(false);
        }
    }

    return (
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
                        </Form.Group>
                    </Form.Row>
                        {showFeedback &&
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <h5 className="text-danger edit">{STANDARD_ERROR}</h5>
                                </Form.Group>
                            </Form.Row>
                        }
                </Form>
            </Col>
        </Row>
    );
}