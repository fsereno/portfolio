"use strict;"

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LoginContext } from '../contexts';
import { MANAGE } from '../constants';
import { SpinnerContext } from '../../../js/modules/react/spinnerComponent';


export function LoginForm() {

    const loginContext = React.useContext(LoginContext);
    const spinnerContext = React.useContext(SpinnerContext);

    const history = useNavigate();

    const [ showValidation, setShowValidation ] = useState(false);
    const [ showFeedback, setShowFeedback ] = useState(false);
    const [ feedbackError, setFeedbackError ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const loginDoneCallback = () => {
        setShowValidation(false);
        setShowFeedback(false);
        spinnerContext.setShow(false);
        history(MANAGE);
    }

    const loginFailCallback = (err) => {
        setFeedbackError(err.message);
        setShowFeedback(true);
        spinnerContext.setShow(false);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (event.currentTarget.checkValidity() === false) {
            setShowValidation(true);
            event.stopPropagation();

        } else if (loginContext.isCloud) {

            spinnerContext.setShow(true);

            loginContext.loginUser(username, password)
                .then(response => response.success ? loginDoneCallback() : loginFailCallback({ message: "Login failed!"}))
                .catch(response => loginFailCallback({ message: response.data.response }));
        } else {

            loginContext.handleDeploymentModalShow();

        }
    };

    return (
        <Row>
            <Col lg={4}>
                <Form noValidate validated={showValidation} onSubmit={handleSubmit}>
                    <Row>
                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>
                                Username:
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
                                Password:
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
                        <Form.Group as={Col}>
                            <Button className="float-right" id="submit" variant="dark" type="submit">Login</Button>
                            {showFeedback &&
                                <div className="text-danger">
                                    {feedbackError}
                                </div>
                            }
                        </Form.Group>
                    </Row>
                </Form>
            </Col>
        </Row>
    );
}