"use strict;"

import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { SpinnerContext } from '../../../js/modules/react/spinnerComponent';
import { DESCRIPTION } from '../constants';
import { ContentContainer } from './contentContainer';

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
                submitHandler(state, {
                    beforeCallback: spinnerContext.showSpinner,
                    doneCallback,
                    failCallback
                });
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
                            {showFeedback &&
                                <ContentContainer>
                                    <h4 className="text-danger">Sorry, there was an error. Please try again.</h4>
                                </ContentContainer>
                            }
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Col>
        </Row>
    );
}