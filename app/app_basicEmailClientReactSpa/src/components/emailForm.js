"use strict;"

import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { SUBMIT, OUTBOX, MY_ADDRESS } from '../globalConstants';
import { GlobalContext, EmailClientContext } from '../globalContext';
import { ENQUEUE_TOAST, ToasterContext } from '../../../js/modules/react/toaster';

export function EmailForm() {

    const globalContext = React.useContext(GlobalContext);
    const emailClientContext = React.useContext(EmailClientContext);
    const toasterContext = React.useContext(ToasterContext);

    const [ showValidation, setShowValidation ] = useState(false);
    const [ to, setTo ] = useState(emailClientContext.state.selected.to);
    const [ subject, setSubject ] = useState(emailClientContext.state.selected.subject);
    const [ body, setBody ] = useState(emailClientContext.state.selected.body);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (event.currentTarget.checkValidity() === false) {

            setShowValidation(true);
            event.stopPropagation();

        } else {
            const time = new Date().getTime();
            setShowValidation(false);

            globalContext.dispatch({
                type: SUBMIT,
                new: {
                    subject: emailClientContext.state.selected.subject,
                    thread: `${MY_ADDRESS}_${emailClientContext.state.selected.to}_${emailClientContext.state.selected.subject}`,
                    id: Math.random() * 10,
                    from: MY_ADDRESS,
                    to: emailClientContext.state.selected.to,
                    body: emailClientContext.state.selected.body,
                    age: 0,
                    dir: OUTBOX,
                    time
                }
            });

            toasterContext.dispatch( { type: ENQUEUE_TOAST, item: { heading: "Sent successfully!", body: `Your message RE: ${emailClientContext.state.selected.subject}, has now been sent.` } } );
        }
    };

    return (
        <Form noValidate validated={showValidation} onSubmit={handleSubmit}>
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
                        value={to}
                        onChange={event => setTo(event.target.value)}
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
                        value={subject}
                        onChange={event => setSubject(event.target.value)}
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
                        value={body}
                        onChange={event => setBody(event.target.value)}
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