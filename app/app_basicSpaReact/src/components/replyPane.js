"use strict;"

import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ReadingPane } from './readingPane';
import { getReplyToEmailAddress } from '../utils/getReplyToEmailAddress';
import { SUBMIT, OUTBOX, MY_ADDRESS } from '../globalConstants';
import { GlobalContext } from '../globalContext';

export function ReplyPane() {

    const context = React.useContext(GlobalContext);

    const [ validated, setValidated ] = useState(false);

    const [ to, setTo ] = useState(getReplyToEmailAddress(context.selected));

    const [ subject, setSubject ] = useState(context.selected.subject || "");

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        if (form.checkValidity() === false) {

            setValidated(true);
            event.stopPropagation();

        } else {

            setValidated(false);

            const subject = formData.get("subject");
            const body = context.selected.body ? [ ...context.selected.body ] : [];
            body.unshift(formData.get("message"));

            context.dispatch({
                type: SUBMIT,
                selected: {
                    ...context.selected,
                    subject: subject,
                    id: Math.random() * 10,
                    from: formData.get("from"),
                    to: formData.get("to"),
                    body,
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
                            name="message"
                            id="message"
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
            <hr/>
            <ReadingPane/>
        </>
    )
}