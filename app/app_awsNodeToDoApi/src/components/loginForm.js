"use strict;"

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LoginContext } from '../contexts';
import { MANAGE } from '../constants';

export function LoginForm() {

    const loginContext = React.useContext(LoginContext);

    const history = useHistory();

    const [ showValidation, setShowValidation ] = useState(false);
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (event.currentTarget.checkValidity() === false) {

            setShowValidation(true);
            event.stopPropagation();

        } else {

            console.log(username)
            console.log(password)

            setShowValidation(false);

            loginContext.setAuthenticated(true);
            history.push(MANAGE)
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
                        Please enter a value.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>
                        To:
                    </Form.Label>
                    <Form.Control
                        name="password"
                        id="password"
                        type="password"
                        onChange={event => setPassword(event.target.value)}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a value.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Button className="float-right" id="submit" variant="dark" type="submit">Login</Button>
                </Form.Group>
            </Form.Row>
        </Form>
    )
}