"use strict;"

import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getReplyToEmailAddress } from '../utils/getReplyToEmailAddress';
import { SUBMIT, OUTBOX, MY_ADDRESS } from '../globalConstants';
import { GlobalContext } from '../globalContext';

export function EmailForm() {

    const context = React.useContext(GlobalContext);

    const [ validated, setValidated ] = useState(false);

    const toFromSelected = context.selected.length > 0 ? getReplyToEmailAddress(context.selected[0]) : "";
    const subjectFromSelected = context.selected.length > 0 ? context.selected[0].subject : "";

    const [ to, setTo ] = useState(toFromSelected);

    const [ subject, setSubject ] = useState(subjectFromSelected);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        if (form.checkValidity() === false) {

            setValidated(true);
            event.stopPropagation();

        } else {

            setValidated(false);

            const from = formData.get("from");
            const to = formData.get("to");
            const subject = formData.get("subject");
            const body = formData.get("body")

            context.dispatch({
                type: SUBMIT,
                new: {
                    ...context.selected,
                    subject,
                    thread: `${from}_${to}_${subject}`,
                    id: Math.random() * 10,
                    from,
                    to,
                    body,
                    age: 0,
                    dir: OUTBOX
                }
            });
        }
      };

    return(
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
        </>
    )
}