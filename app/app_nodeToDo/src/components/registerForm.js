"use strict;"

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LOGIN, STANDARD_ERROR } from '../constants';
import { SpinnerContext } from '../../../js/modules/react/spinnerComponent';
import { ToasterContext, ENQUEUE_TOAST } from '../../../js/modules/react/toasterComponent';
import { ToolTip } from './tooltip';
import { LoginContext } from '../contexts';

export function RegisterForm() {

    const loginContext = React.useContext(LoginContext);
    const spinnerContext = React.useContext(SpinnerContext);
    const toasterContext = React.useContext(ToasterContext);

    const [ showValidation, setShowValidation ] = useState(false);
    const [ showFeedback, setShowFeedback ] = useState(false);
    const [ feedbackErrors, setFeedbackErrors ] = useState([]);
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const history = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!event.currentTarget.checkValidity()) {

            setShowValidation(true);
            event.stopPropagation();

        } else if (loginContext.isCloud) {

            spinnerContext.setShow(true);
            register();

        } else {

            loginContext.handleDeploymentModalShow();

        }
    };

    const showErrors = (error = STANDARD_ERROR) => {

        const errors = [...feedbackErrors];

        if (errors.indexOf(error) === -1) {
            errors.push(error);
        }

        setFeedbackErrors(errors);
        setShowFeedback(true);

        spinnerContext.setShow(false);
    }

    const hideErrors =  () => {
        setShowFeedback(false);
        setFeedbackErrors([]);
    }

    const register = () => {

        loginContext.registerUser(username, password).then(() => {

            setShowValidation(false);
            hideErrors();

            spinnerContext.setShow(false);
            toasterContext.dispatch( { type: ENQUEUE_TOAST, item: { heading: "Registration Successful!", body: `You can now login using your credentials.` } } );
            history.push(LOGIN);

        }).catch((err) => {
            debugger;
            showErrors(err.message)
        });
    }

    return (
        <Row>
            <Col lg={4}>
                <Form noValidate validated={showValidation} onSubmit={handleSubmit}>
                    <Row>
                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>
                                Username <ToolTip message="This is case insensitive" />
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
                    </Row>
                    <Row>
                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>
                                Password <ToolTip message="Alphanumeric and case sensitive. Use a special character!" />
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
                    </Row>
                    <Row>
                        <Form.Group as={Col} className="mb-3">
                            <Button className="float-right" id="submit" variant="dark" type="submit">Register</Button>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col}>
                            {showFeedback &&
                                <>
                                    <h5 className="text-danger">There were errors</h5>
                                    <ul id="errorFeedback" className="text-danger">
                                        {feedbackErrors.map((error, index) => <li key={index}><small>{error}</small></li>)}
                                    </ul>
                                </>
                            }
                        </Form.Group>
                    </Row>
                </Form>
            </Col>
        </Row>
    );
}