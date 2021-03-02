"use strict;"

import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ReadingPane } from './readingPane';
import { FormInput } from './formInput';
import { FormTextArea } from './formTextArea';
import { FormInputRow } from './formInputRow';
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
                <FormInputRow label="First name" id="firstNameInput" component={FormInput} />
                <FormInputRow label="Second name" id="secondNameInput" component={FormInput}/>
                <FormInputRow label="Message" id="messageInput" component={FormTextArea} />
                <Form.Row>
                <Form.Group as={Col} md="4">
                    <Button id="submit" variant="dark" type="submit">Submit</Button>
                </Form.Group>
                </Form.Row>
            </Form>
            <hr/>
            <ReadingPane/>
        </>
    )
}