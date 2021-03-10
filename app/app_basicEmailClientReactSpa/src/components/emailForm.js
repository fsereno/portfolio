"use strict;"

import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {
    SUBMIT,
    OUTBOX,
    MY_ADDRESS,
    UPDATE_TO,
    UPDATE_SUBJECT,
    UPDATE_BODY,
    SHOW_VALIDATION,
    HIDE_VALIDATION
} from '../globalConstants';
import { GlobalContext } from '../globalContext';

export function EmailForm() {

    const context = React.useContext(GlobalContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (event.currentTarget.checkValidity() === false) {

            context.dispatch({ type: SHOW_VALIDATION });
            event.stopPropagation();

        } else {

            context.dispatch({ type: HIDE_VALIDATION });
            context.dispatch({
                type: SUBMIT,
                new: {
                    subject: context.subject,
                    thread: `${context.from}_${context.to}_${context.subject}`,
                    id: Math.random() * 10,
                    from: MY_ADDRESS,
                    to: context.to,
                    body: context.body,
                    age: 0,
                    dir: OUTBOX
                }
            });
        }
    };

    return (
        <Form noValidate validated={context.showValidation} onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>
                        From:
                    </Form.Label>
                    <Form.Control
                        name="from"
                        id="from"
                        type="text"
                        value={MY_ADDRESS}
                        readOnly
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
                        name="to"
                        id="to"
                        type="text"
                        value={context.to}
                        onChange={event => context.dispatch({ type: UPDATE_TO, input: event.target.value })}
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
                        Subject:
                    </Form.Label>
                    <Form.Control
                        name="subject"
                        id="subject"
                        type="text"
                        value={context.subject}
                        onChange={event => context.dispatch({ type: UPDATE_SUBJECT, input: event.target.value })}
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
                        Message:
                    </Form.Label>
                    <Form.Control
                        name="body"
                        id="body"
                        as="textarea"
                        rows={3}
                        onChange={event => context.dispatch({ type: UPDATE_BODY, input: event.target.value })}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a value.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Button className="float-right" id="submit" variant="dark" type="submit">Submit</Button>
                </Form.Group>
            </Form.Row>
        </Form>
    )
}