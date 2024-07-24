"use strict;"

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FilterUtil } from '../../typeScript/Utils/filterUtil/dist/index';

export function FormComponent(props) {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const input = data.get("itemInput");

    let isNotUnique = !FilterUtil.isUniqueInArray(props.items, input);

    if (form.checkValidity() === false || isNotUnique) {

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
          <Form.Group as={Col} className='mb-3'>
            <Form.Label>
              Item to add
            </Form.Label>
            <Form.Control
              name="itemInput"
              id="itemInput"
              type="text"
              placeholder="Add to list..."
              required
              onChange={props.onChange}
              value={props.value}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a value.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col} className='mb-3'>
            <Button id="submit" variant="dark" type="submit" className="me-2">Add item</Button>
            <Button id="undo" variant="danger" type="button" className="me-2" onClick={props.handleUndo}>Undo</Button>
            <Button id="redo" variant="dark" type="button" className="me-2" onClick={props.handleRedo}>Redo</Button>
          </Form.Group>
        </Row>
      </Form>
    </>
  );
}