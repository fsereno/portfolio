"use strict;"

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { KeyGeneratorUtil } from '../../typeScript/Utils/keyGeneratorUtil/dist/app.js';
import { FilterUtil } from '../../typeScript/Utils/filterUtil/dist/app';

export function FormModule(props) {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const input = data.get(props.id);

    let isNotUnique = !FilterUtil.isUniqueInArray(props.items, input);

    if (form.checkValidity() === false || isNotUnique) {

      setValidated(true);
      event.stopPropagation();

    } else {

      setValidated(false);

      form.reset();

      props.handleAdd(event, input);

    }

  };

  return (
    <>
      <Row className="splitter">
        <Col>
          <h3>{props.title}</h3>
          <ul id={props.listId} className="list-group">
            {props.items.map((item, index) => {
              let key = KeyGeneratorUtil.generate(item);
              return <li key={key} className="list-group-item d-flex justify-content-between align-items-center">{item}</li>
            })}
          </ul>
        </Col>
      </Row>
      <Row className="splitter">
        <Col>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>
                  Item to add
                </Form.Label>
                <Form.Control
                  name={props.id}
                  id={props.id}
                  type="text"
                  placeholder="Add to list..."
                  required
                  value={props.value}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a value.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} xs={6} md={3} lg={2}>
                <Button id={props.id + "_submit"} variant="dark" type="submit">Add</Button>
            </Form.Group>
            <Form.Group as={Col} xs={6} md={3} lg={2}>
                <Button id={props.id + "_remove"} variant="danger" type="button" onClick={props.handleRemove}>Remove</Button>
            </Form.Group>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </>
  );
}