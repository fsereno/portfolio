"use strict;"

import React, { useState, useLayoutEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { SUBMIT, OUTBOX, MY_ADDRESS, REPLY } from '../globalConstants';
import { GlobalContext, EmailClientContext } from '../globalContext';
import { ENQUEUE_TOAST, ToasterContext } from '../../../js/modules/react/toaster';

export function EmailForm() {

    const globalContext = React.useContext(GlobalContext);
    const emailClientContext = React.useContext(EmailClientContext);
    const toasterContext = React.useContext(ToasterContext);

    const [ showValidation, setShowValidation ] = useState(false);
    const [ to, setTo ] = useState("");
    const [ subject, setSubject ] = useState("");
    const [ body, setBody ] = useState("");
    //const [ isNew, setIsNew ] = useState(false);

    useLayoutEffect(() => {
        if (emailClientContext.state.mode === REPLY) {
            setTo(emailClientContext.state.selected.to);
            setSubject(emailClientContext.state.selected.subject);
        }
    },[emailClientContext.state.mode]);


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
                item: {
                    subject,
                    thread: `${MY_ADDRESS}_${to}_${subject}`,
                    id: Math.random() * 10,
                    from: MY_ADDRESS,
                    to,
                    body,
                    age: 0,
                    dir: OUTBOX,
                    time
                }
            });

            toasterContext.dispatch( { type: ENQUEUE_TOAST, item: { heading: "Sent successfully!", body: `Your message RE: ${subject}, has now been sent.` } } );

            console.log(toasterContext)
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