"use strict;"

import React from 'react';
import { useHistory } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { LoginContext } from '../contexts';
import { LOGIN } from '../constants';
import { SpinnerContext } from '../../../js/modules/react/spinnerComponent';

export function LogoutForm() {

    const loginContext = React.useContext(LoginContext);
    const spinnerContext = React.useContext(SpinnerContext);

    const history = useHistory();

    const doneCallback = () => {
        spinnerContext.setShow(false);
        history.push(LOGIN);
    }

    const failCallback = (err) => {
        spinnerContext.setShow(false);
        console.error(err.message)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        spinnerContext.setShow(true);
        loginContext.logoutUser()
            .then(result => result.success ? doneCallback() : failCallback())
            .catch( error => failCallback(error));
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
    );
}