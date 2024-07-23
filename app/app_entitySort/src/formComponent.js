"use strict;"

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';

export function FormComponent(props) {

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
        <Row>
          <Col>
            <Form.Label>
              Add an Employee
            </Form.Label>
          </Col>
        </Row>
        <Row>
          <Form.Group as={Col} className='mb-3'>
            <Form.Label htmlFor="nameInput">
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
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} className='mb-3'>
            <Form.Label htmlFor="salaryInput">
              Salary
            </Form.Label>
            <InputGroup>
              <InputGroup.Text className='left'>£</InputGroup.Text>
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
          </Form.Group>
        </Row>
          <Form.Group as={Col} className='mb-3'>
            <Button id="addEmployee_submit" variant="dark" type="submit">Add</Button>
          </Form.Group>
    </Form >
    </>
  );
}