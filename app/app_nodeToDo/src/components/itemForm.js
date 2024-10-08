"use strict;"

import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
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
        <Row className="justify-content-md-center mb-5">
            <Col lg={10}>
                <Form id="itemForm" noValidate validated={showValidation} onSubmit={handleSubmit}>
                    <Row>
                        <Form.Label>
                            Describe a task to do:
                        </Form.Label>
                        <InputGroup>
                            <Form.Control
                                className="shadow-lg"
                                name="description"
                                id="description"
                                type="text"
                                value={state.description}
                                onChange={event => dispatch({ type: DESCRIPTION, value: event.target.value })}
                                required
                            />
                                <Button className="radius-right" id="submit" variant="dark" type="submit">Submit</Button>
                            <Form.Control.Feedback type="invalid">
                                Please enter a value.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Row>
                    {showFeedback &&
                        <Row>
                            <Form.Group as={Col}>
                                <h5 className="edit mt-2 text-danger">{STANDARD_ERROR}</h5>
                            </Form.Group>
                        </Row>
                    }
                </Form>
            </Col>
        </Row>
    );
}