"use strict;"

import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ReadingPane } from './readingPane';
import { GlobalContext } from '../globalContext';

export function ReplyPane() {

    const context = React.useContext(GlobalContext);

    const [ validated, setValidated ] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        if (form.checkValidity() === false) {

          setValidated(true);
          event.stopPropagation();

        } else {

          setValidated(false);

        }

      };

    return(
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>
                           To:
                        </Form.Label>
                        <Form.Control
                            name="toInput"
                            id="toInput"
                            type="text"
                            value={context.selected.from}
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