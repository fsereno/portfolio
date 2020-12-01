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

        setValidated(true);
        event.stopPropagation();

      } else {

        setValidated(false);
        props.handleSubmit(event);

      }

    };

    return (
      <>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Label>
              Enter comma seperated values to sort
            </Form.Label>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="3" controlId="valuesInput">
              <Form.Control
                name="valuesInput"
                type="text"
                placeholder="B,C,A..."
                required
                onChange={props.onChange}
                value={props.value}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a value.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Button id="sort_submit" variant="dark" type="submit">Sort</Button>
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