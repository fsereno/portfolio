"use strict;"

import React, { useState, useLayoutEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { SUBMIT, OUTBOX, MY_ADDRESS, REPLY, SELECT } from '../constants';
import { EmailContext, EmailClientContext, EmailModalContext} from '../contexts';
import { ENQUEUE_TOAST, ToasterContext } from '../../../js/modules/react/toasterComponent';

export function EmailForm() {

    const emailContext = React.useContext(EmailContext);
    const emailClientContext = React.useContext(EmailClientContext);
    const toasterContext = React.useContext(ToasterContext);
    const emailModalContext = React.useContext(EmailModalContext);

    const [ showValidation, setShowValidation ] = useState(false);
    const [ to, setTo ] = useState("");
    const [ subject, setSubject ] = useState("");
    const [ body, setBody ] = useState("");

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

            emailContext.dispatch({
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

            if (emailModalContext.state.show) {
                emailModalContext.setShow(false);
            }
            toasterContext.dispatch( { type: ENQUEUE_TOAST, item: { heading: "Sent successfully!", body: `Your message RE: ${subject}, has now been sent.` } } );
            emailClientContext.dispatch( {
                type: SELECT,
                thread: emailClientContext.state.selectedThread,
                item: {
                    ...emailClientContext.state.selected
                }
            });
        }
    };

    return (
        <Form noValidate validated={showValidation} onSubmit={handleSubmit}>
            <Row>
                <Form.Group as={Col} className='mb-3'>
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
            </Row>
            <Row>
                <Form.Group as={Col} className='mb-3'>
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
            </Row>
            <Row>
                <Form.Group as={Col} className='mb-3'>
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
            </Row>
            <Row>
                <Form.Group as={Col} className='mb-3'>
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
            </Row>
            <Row>
                <Form.Group as={Col}>
                    <Button className="float-right" id="submit" variant="dark" type="submit">Submit</Button>
                </Form.Group>
            </Row>
        </Form>
    )
}