"use strict;"

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

export let PuzzleModalModule = function(answer) {
  let _isSolved = false;

  const isSolved = () => _isSolved;

  const isValid = value => !isNaN(answer) ? Number(value) === answer : value === answer;

  function Puzzle(props) {
    const [validated, setValidated] = useState(false);

    const handleShow = () => {
      setValidated(false);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const formData = new FormData(form);
      const answerValue = formData.get("answerInput");
      const isAnswerValid = isValid(answerValue);

      if (form.checkValidity() === false) {

        _isSolved = false;
        event.stopPropagation();

      } else if (isAnswerValid) {

        _isSolved = isAnswerValid;
        props.handleClose();

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
              <Form.Row>
                <Form.Group as={Col} controlId="answerInput">
                  <Form.Label>{`${props.label || "Whats is:"} ${props.puzzle} ?`}</Form.Label>
                  <InputGroup>
                    <Form.Control
                      name="answerInput"
                      type="text"
                      placeholder="Answer..."
                      pattern={answer}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {props.error || "Incorrect answer! Please try again."}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Form.Row>
              <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                  Close
                </Button>
                <Button variant="dark" type="submit">Submit</Button>
              </Modal.Footer>
            </Form>
            </Modal.Body>
          </Modal>
      </>
    );
  }

  let render = function(props) {
      return (
          <Puzzle {...props} />
      )
  }

  return {
    render: render,
    isSolved: isSolved
  }
}