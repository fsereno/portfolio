"use strict;"

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import { FilterModule } from '../../typeScript/Modules/filterModule/dist/app';

export let FormModule = function() {

  function FormTemplate(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();

      const form = event.currentTarget;
      const data = new FormData(form);
      const input = data.get("itemInput");

      let isNotUnique = !FilterModule.isUniqueInArray(props.items, input);

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
          <Form.Row>
            <Form.Group as={Col}>
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
          </Form.Row>
          <Form.Row>
            <ButtonGroup aria-label="Basic example">
              <Button id="submit" variant="dark" type="submit">Add item</Button>
              <Button id="undo" variant="danger" type="button" onClick={props.handleUndo}>Undo</Button>
              <Button id="redo" variant="dark" type="button" onClick={props.handleRedo}>Redo</Button>
            </ButtonGroup>
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