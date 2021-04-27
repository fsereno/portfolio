"use strict;"

import React from 'react';
import { useHistory } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { LoginContext } from '../contexts';
import { LOGIN, POOL_DATA, SUCCESS } from '../constants';
import { SpinnerContext } from '../../../js/modules/react/spinnerComponent';
import { CognitoUserPool } from 'amazon-cognito-identity-js';

export function LogoutForm() {

    const loginContext = React.useContext(LoginContext);
    const spinnerContext = React.useContext(SpinnerContext);

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        spinnerContext.setShow(true);

        const userPool = new CognitoUserPool(POOL_DATA);

        const currentUser = userPool.getCurrentUser();

        if (currentUser != null ) {

            currentUser.getSession(err => {

                if (err != null ) {

                    console.error(err.message);

                } else {
                    currentUser.globalSignOut({
                        onSuccess: function (result) {

                            if (result === SUCCESS) {

                                loginContext.setAuthenticated(false);
                                spinnerContext.setShow(false);
                                history.push(LOGIN);

                            }
                        },
                        onFailure: function (err) {

                            spinnerContext.setShow(false);
                            console.error(err.message)

                        },
                    });
                }
            });
        }
    };

    return (
        <Row>
            <Col lg={4}>
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
            </Col>
        </Row>
    )
}