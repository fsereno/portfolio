"use strict;"

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

export let PuzzleModalModule = function(answer) {
  const SHOW_CLASS = "d-block";
  const DEFAULT_VALUE = " ";
  let _isSolved = false;
  let _hasError = false;
  const showClass = () => _hasError ? SHOW_CLASS : "";
  const isSolved = () => _isSolved;
  const isValid = value => !isNaN(answer) ? Number(value) === answer : value === answer;
  const hasValue = value => value !== DEFAULT_VALUE;
  const validateInput = (input) => {
    if (hasValue(input) && isValid(input)) {
      _hasError = false;
      _isSolved = true;
    } else if(hasValue(input) && !isValid(input)) {
      _hasError = true;
      _isSolved = false;
    } else {
      _hasError = false;
      _isSolved = false;
    }
  }

  function Puzzle(props) {

    const [input, setInput] = useState(DEFAULT_VALUE);
    const handleSubimt = (event) => {
      event.preventDefault();
      console.log("submitted")

      if (_isSolved) {
        props.handleClose();
      } else {
        setInput("");
      }
    }

    validateInput(input);

    return (
      <>
        <Modal id={props.id || "puzzleModal"} show={props.show} onShow={() => setInput(DEFAULT_VALUE)} onHide={props.handleClose}>
          <Modal.Header>
            <Modal.Title className="display-4">{props.title || "Are you a human?"}</Modal.Title>
            <Button variant="link" className="close" onClick={props.handleClose}>
              <span className="lr">
                  <span className="rl"></span>
              </span>
            </Button>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate onSubmit={props.handleSubimt || handleSubimt}>
              <Form.Group>
                <Form.Label>{`${props.label || "Whats is:"} ${props.puzzle} ?`}</Form.Label>
                <Form.Control required isInvalid={_hasError} isValid={_isSolved} type="text" placeholder="Answer..." onBlur={event => setInput(event.target.value)} />
                <Form.Text className={`invalid-feedback ${showClass()}`}>
                  {props.error || "Incorrect answer! Please try again."}
                </Form.Text>
              </Form.Group>
              <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                  Close
                </Button>
                <Button type="submit" id="submitPuzzle" variant="dark">
                  Submit
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }


  function Puzzle2(props) {
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
        <Modal id={props.id || "puzzleModal"} show={props.show} nHide={props.handleClose} onShow={handleShow}>
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
                      aria-describedby="inputGroupPrepend"
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
          <Puzzle2 {...props} />
      )
  }
  return {
    render: render,
    isSolved: isSolved
  }
}