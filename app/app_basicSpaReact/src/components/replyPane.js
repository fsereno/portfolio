"use strict;"

import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ReadingPane } from './readingPane';
import { SUBMIT, OUTBOX } from '../globalConstants';
import { GlobalContext } from '../globalContext';

export function ReplyPane() {

    const context = React.useContext(GlobalContext);

    const [ validated, setValidated ] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        if (form.checkValidity() === false) {

            setValidated(true);
            event.stopPropagation();

        } else {

            setValidated(false);

            const body = formData.get("message");

            context.dispatch({
                type: SUBMIT,
                selected: {
                    ...context.selected,
                    id: Math.random() * 10,
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
                           To: {context.selected.from}
                        </Form.Label>
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