"use strict;"

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export function FormComponent(props) {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {

      setValidated(true);

    } else {

      setValidated(false);
      props.handleSubmit(event);
      form.reset();

    }

  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} md="3" controlId="firstNameInput" className='mb-3'>
            <Form.Control
              name="firstNameInput"
              type="text"
              placeholder="First name..."
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a value.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="3" controlId="secondNameInput" className='mb-3'>
            <Form.Control
              name="secondNameInput"
              type="text"
              placeholder="Second name..."
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a value.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="3" controlId="contactInput" className='mb-3'>
            <Form.Control
              name="contactInput"
              type="text"
              placeholder="Contact number..."
              pattern="^[+ ()0-9-]*$"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid value.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="3" controlId="postCodeInput" className='mb-3'>
            <Form.Control
              name="postCodeInput"
              type="text"
              placeholder="Postcode..."
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a value.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="3">
            <Button variant="dark" id="submit" type="submit">Add item</Button>
          </Form.Group>
        </Row>
      </Form>
    </>
  );
}