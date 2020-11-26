"use strict;"

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    const handleSubimt = () => _isSolved ? props.handleClose() : setInput("");

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
            <Form>
              <Form.Group>
                <Form.Label>{`${props.label || "Whats is:"} ${props.puzzle}`}</Form.Label>
                <Form.Control isInvalid={_hasError} isValid={_isSolved} type="text" placeholder="Answer..." onBlur={event => setInput(event.target.value)} />
                <Form.Text className={`invalid-feedback ${showClass()}`}>
                  {props.error || "Incorrect answer! Please try again."}
                </Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <Button variant="dark" onClick={props.handleSubimt || handleSubimt}>
              Submit
            </Button>
          </Modal.Footer>
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