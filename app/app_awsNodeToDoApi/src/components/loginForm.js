"use strict;"

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LoginContext } from '../contexts';
import { MANAGE } from '../constants';

import {
	CognitoUser,
    AuthenticationDetails
} from 'amazon-cognito-identity-js';
import { SpinnerContext } from '../../../js/modules/react/spinnerComponent';

export function LoginForm() {

    const loginContext = React.useContext(LoginContext);
    const spinnerContext = React.useContext(SpinnerContext);

    const history = useHistory();

    const [ showValidation, setShowValidation ] = useState(false);
    const [ showFeedback, setShowFeedback ] = useState(false);
    const [ feedbackError, setFeedbackError ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (event.currentTarget.checkValidity() === false) {
            setShowValidation(true);
            event.stopPropagation();

        } else {

            spinnerContext.setShow(true);

            const authenticationData = {
                Username: username,
                Password: password,
            };

            const authenticationDetails = new AuthenticationDetails(authenticationData);

            const userData = {
                Username: username,
                Pool: loginContext.userPool,
            };

            const cognitoUser = new CognitoUser(userData);

            cognitoUser.authenticateUser(authenticationDetails, {
                onSuccess: function(result) {

                    setShowValidation(false);
                    setShowFeedback(false);

                    spinnerContext.setShow(false);
                    loginContext.setAuthenticated(true);
                    history.push(MANAGE)
                },
                onFailure: function(err) {
                    setFeedbackError(err.message);
                    setShowFeedback(true);
                    spinnerContext.setShow(false);
                },
            });
        }
    };

    return (
        <Form noValidate validated={showValidation} onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col}>
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
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
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
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Button className="float-right" id="submit" variant="dark" type="submit">Login</Button>
                    {showFeedback &&
                        <div className="text-danger">
                            {feedbackError}
                        </div>
                    }
                </Form.Group>
            </Form.Row>
        </Form>
    )
}