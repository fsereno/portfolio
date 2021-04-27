"use strict;"

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LOGIN, POOL_DATA } from '../constants';
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { SpinnerContext } from '../../../js/modules/react/spinnerComponent';
import { Row } from 'react-bootstrap';
import { ToasterContext, ENQUEUE_TOAST } from '../../../js/modules/react/toasterComponent';
import { ToolTip } from './tooltip';

export function RegisterForm() {

    const spinnerContext = React.useContext(SpinnerContext);
    const toasterContext = React.useContext(ToasterContext);

    const history = useHistory();

    const [ showValidation, setShowValidation ] = useState(false);
    const [ showFeedback, setShowFeedback ] = useState(false);
    const [ feedbackError, setFeedbackError ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ name, setName ] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (event.currentTarget.checkValidity() === false) {
            setShowValidation(true);
            event.stopPropagation();

        } else {

            spinnerContext.setShow(true);

            const userPool = new CognitoUserPool(POOL_DATA);

            const attributeList = [];

            const dataName = {
                Name: "name",
                Value: name
            }

            const attributeName = new CognitoUserAttribute(dataName)

            attributeList.push(attributeName);

            userPool.signUp(username, password, attributeList, null, (err, result) => {

                if (err != null) {

                    setFeedbackError(err.message);
                    setShowFeedback(true);
                    spinnerContext.setShow(false);

                } else {

                    setShowValidation(false);
                    setShowFeedback(false);

                    spinnerContext.setShow(false);
                    toasterContext.dispatch( { type: ENQUEUE_TOAST, item: { heading: "Registration Successful!", body: `${name}, you can now login using your credentials.` } } );
                    history.push(LOGIN)
                }
            });
        }
    };

    return (
        <Row>
            <Col lg={4}>
                <Form noValidate validated={showValidation} onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>
                                Name: <ToolTip message="Make this fictional and not personal" />
                            </Form.Label>
                            <Form.Control
                                name="name"
                                id="name"
                                type="name"
                                onChange={event => setName(event.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid value
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>
                                Username: <ToolTip message="This is case insensitive" />
                            </Form.Label>
                            <Form.Control
                                name="username"
                                id="username"
                                type="text"
                                onChange={event => setUsername(event.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid value
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>
                                Password: <ToolTip message="Alphanumeric and case sensitive. Use a special character!" />
                            </Form.Label>
                            <Form.Control
                                name="password"
                                id="password"
                                type="password"
                                onChange={event => setPassword(event.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid value
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Button className="float-right" id="submit" variant="dark" type="submit">Register</Button>
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
    )
}