"use strict;"

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
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
        <Form.Label>
          Item to add
        </Form.Label>
        <InputGroup>
          <Form.Control
            name="itemInput"
            id="itemInput"
            type="text"
            placeholder="Add to list..."
            required
            onChange={props.onChange}
            value={props.value}
          />
          <Button id="submit" variant="dark" type="submit" className='radius-right'>Add item</Button>
          <Form.Control.Feedback type="invalid">
            Please enter a value.
          </Form.Control.Feedback>
        </InputGroup>
      </Form>
    </>
  );
}