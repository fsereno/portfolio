"use strict;"

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { KeyGeneratorModule } from '../../typeScript/Modules/keyGeneratorModule/app.js';

let _keyGeneratorModule = new KeyGeneratorModule();

export let FormModule = function() {

  function FormTemplate(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();

      const form = event.currentTarget;
      const data = new FormData(form);
      const input = data.get(props.id);

      let isNotUnique = props.items.filter(x => x === input).length > 0;

      if (form.checkValidity() === false || isNotUnique) {

        setValidated(true);
        event.stopPropagation();

      } else {

        setValidated(false);
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
                let key = _keyGeneratorModule.generate(item);
                return <li key={key} className="list-group-item d-flex justify-content-between align-items-center">{item}</li>
              })}
            </ul>
          </Col>
        </Row>
        <Row className="splitter">
          <Col>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Label>
                  Item to add
                </Form.Label>
                <InputGroup>
                  <Form.Control
                    name={props.id}
                    id={props.id}
                    type="text"
                    placeholder="Add to list..."
                    required
                    value={props.value}
                  />
                  <InputGroup.Append>
                    <Button id="submit" variant="dark" type="submit">Add</Button>
                  </InputGroup.Append>
                  <InputGroup.Append>
                    <Button id="remove" variant="danger" type="button" onClick={props.handleRemove}>Remove</Button>
                  </InputGroup.Append>
                  <Form.Control.Feedback type="invalid">
                    Please enter a value.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Row>
            </Form>
          </Col>
        </Row>
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