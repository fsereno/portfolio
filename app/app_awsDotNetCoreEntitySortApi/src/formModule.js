"use strict;"

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

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
            <Form.Label>
              Add an Employee
            </Form.Label>
          </Form.Row>
          <Form.Row>
            <Col sm={3} className="my-1">
              <Form.Label htmlFor="nameInput" srOnly>
                Name
              </Form.Label>
              <Form.Control
                id="nameInput"
                name="nameInput"
                type="text"
                placeholder="John Doe"
                required
                onChange={props.handleNameChange}
                value={props.name}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a value.
              </Form.Control.Feedback>
            </Col>
            <Col sm={3} className="my-1">
              <Form.Label htmlFor="salaryInput" srOnly>
                Salary
              </Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>£</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  id="salaryInput"
                  name="salaryInput"
                  type="number"
                  placeholder="0.00"
                  required
                  onChange={props.handleSalaryChange}
                  value={props.salary}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a value.
                </Form.Control.Feedback>
              </InputGroup>
            </Col>
            <Col sm={3} className="my-1">
              <Button id="addEmployee_submit" variant="dark" type="submit">Add</Button>
            </Col>
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