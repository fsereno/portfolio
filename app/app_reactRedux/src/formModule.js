"use strict;"

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export let FormModule = function() {

  function FormTemplate(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();

      const form = event.currentTarget;
      const data = new FormData(form);
      const input = data.get("itemInput");

      let isNotUnique = props.items.filter(x => x === input).length > 0; // module ?

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
            <Form.Label>
              Input
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
              <InputGroup.Append>
                <Button id="submit" variant="dark" type="submit">Add item</Button>
              </InputGroup.Append>
              <InputGroup.Append>
                <Button id="undo" variant="danger" type="button" onClick={props.handleUndo}>Undo</Button>
              </InputGroup.Append>
              <InputGroup.Append>
                <Button id="redo" variant="dark" type="button" onClick={props.handleRedo}>Redo</Button>
              </InputGroup.Append>
              <Form.Control.Feedback type="invalid">
                Please enter a value.
              </Form.Control.Feedback>
            </InputGroup>
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