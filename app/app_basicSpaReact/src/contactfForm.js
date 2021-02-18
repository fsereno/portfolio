"use strict;"

import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Input(props) {
  return(
    <Form.Control
      name={props.id}
      id={props.id}
      type={props.type || "text"}
      required
    />
  )
}

function TextArea(props) {
  return(
    <Form.Control
      name={props.id}
      id={props.id}
      as="textarea"
      rows={3}
      required
    />
  )
}

function InputRow(props) {
  return (
    <Form.Row>
      <Form.Group as={Col} md="4">
        <Form.Label>
          {props.label}
        </Form.Label>
        <props.component id={props.id} />
        <Form.Control.Feedback type="invalid">
          Please enter a value.
        </Form.Control.Feedback>
      </Form.Group>
    </Form.Row>
  )
}

export function ContactForm(props) {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const input = data.get("firstNameInput");

    if (form.checkValidity() === false || isNotUnique) {

      setValidated(true);
      event.stopPropagation();

    } else {

      setValidated(false);

    }

  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <InputRow label="First name" id="firstNameInput" component={Input} />
        <InputRow label="Second name" id="secondNameInput" component={Input}/>
        <InputRow label="Message" id="messageInput" component={TextArea} />
        <Form.Row>
          <Form.Group as={Col} md="4">
            <Button id="submit" variant="dark" type="submit">Submit</Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </>
  );
}