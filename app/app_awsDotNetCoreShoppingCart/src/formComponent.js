"use strict;"

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

export function FormComponent(props) {

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
      <Row className="splitter">
        <Col md={12}>
          <Form id={`${props.id}_form`} noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Label htmlFor={props.id}>
                {props.label}
              </Form.Label>
              <InputGroup>
                {props.children.map(item => {
                  return (<Form.Control
                    key={item.id}
                    id={item.id}
                    name={item.id}
                    type={item.type || "text"}
                    placeholder={item.placeholder}
                    required={item.required ? "required" : ""}
                  />)
                })}
                <InputGroup.Append>
                  <Button id={`${props.id}_submit`} variant="dark api-submit" type="submit">{props.button}</Button>
                </InputGroup.Append>
                <Form.Control.Feedback type="invalid">
                  {props.error || "Please enter a valid value."}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </>
  )
}