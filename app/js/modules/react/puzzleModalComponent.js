"use strict;"

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export function PuzzleModalComponent(props) {

  const [validated, setValidated] = useState(false);

  const handleShow = () => setValidated(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {

      event.stopPropagation();

    } else {

      props.handleIsValid();

    }

    setValidated(true);
  };

  return (
    <>
      <Modal id={props.id || "puzzleModal"} show={props.show} onHide={props.handleClose} onShow={handleShow}>
        <Modal.Header>
          <Modal.Title className="display-4">{props.title || "Are you a human?"}</Modal.Title>
          <Button variant="link" className="close" onClick={props.handleClose}>
            <span className="lr">
                <span className="rl"></span>
            </span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col} controlId="answerInput">
                <Form.Label>{`${props.label || "What is:"} ${props.puzzle} ?`}</Form.Label>
                  <Form.Control
                    name="answerInput"
                    type="text"
                    placeholder="Answer..."
                    pattern={props.answer}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {props.error || "Incorrect answer! Please try again."}
                  </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.handleClose}>
                Close
              </Button>
              <Button id="submitPuzzle" variant="dark" type="submit">Submit</Button>
            </Modal.Footer>
          </Form>
          </Modal.Body>
        </Modal>
    </>
  );
}
