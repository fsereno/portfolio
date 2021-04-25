"use strict;"

import React from 'react';
import { useHistory } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LoginContext } from '../contexts';
import { LOGIN } from '../constants';
import { SpinnerContext } from '../../../js/modules/react/spinnerComponent';

export function LogoutForm() {

    const loginContext = React.useContext(LoginContext);
    const spinnerContext = React.useContext(SpinnerContext);

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        spinnerContext.setShow(true);

        const currentUser = loginContext.userPool.getCurrentUser();

        if (currentUser != null ) {
            currentUser.signOut();
        }

        if (loginContext.userPool.getCurrentUser() === null) {
            loginContext.setAuthenticated(false);
            spinnerContext.setShow(false);
            history.push(LOGIN)
        }
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