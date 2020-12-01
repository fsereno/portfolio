"use strict;"

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export let FormModule = function() {

  function FormTemplate(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.currentTarget;

      if (form.checkValidity() === false) {

        event.stopPropagation();

      } else {

        props.handleSubmit(event);

      }

      setValidated(true);
    };

    return (
      <>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="firstNameInput">
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
            <Form.Group as={Col} controlId="secondNameInput">
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
            <Form.Group as={Col} controlId="contactInput">
              <Form.Control
                name="contactInput"
                type="text"
                placeholder="Contact number..."
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a value.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="postCodeInput">
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
            <Form.Group as={Col}> 
              <Button variant="dark" type="submit">Add item</Button>
            </Form.Group>
          </Form.Row>
        </Form>
      </>
    );
  }

  let render = function(props) {
      return (
          <FormTemplate {...props} />
      )
  }

  return {
    render: render
  }
}