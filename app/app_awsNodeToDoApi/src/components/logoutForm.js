"use strict;"

import React from 'react';
import { useHistory } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LoginContext } from '../contexts';
import { LOGIN } from '../constants';

export function LogoutForm() {

    const loginContext = React.useContext(LoginContext);

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        loginContext.setAuthenticated(false);
        history.push(LOGIN)
    };

    return (
        <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>
                        Are you sure you want to logout ?
                    </Form.Label>
                    <Button className="float-right" id="submit" variant="dark" type="submit">Logout</Button>
                </Form.Group>
            </Form.Row>
        </Form>
    )
}