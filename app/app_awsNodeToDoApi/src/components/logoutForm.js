"use strict;"

import React from 'react';
import { useHistory } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LoginContext } from '../contexts';
import { LOGIN, USERNAME, TOKEN, SUCCESS } from '../constants';
import { SpinnerContext } from '../../../js/modules/react/spinnerComponent';

export function LogoutForm() {

    const loginContext = React.useContext(LoginContext);
    const spinnerContext = React.useContext(SpinnerContext);

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        spinnerContext.setShow(true);

        loginContext.cognitoUser.globalSignOut({
            onSuccess: function (result) {
                if (result === SUCCESS) {
                    sessionStorage.removeItem(USERNAME);
                    sessionStorage.removeItem(TOKEN);
                    loginContext.setAuthenticated(false);
                    spinnerContext.setShow(false);
                    history.push(LOGIN)
                }
            },
            onFailure: function (err) {
                spinnerContext.setShow(false);
                console.error(err.message)
            },
        });
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