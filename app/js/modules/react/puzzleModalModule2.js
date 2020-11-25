"use strict;"

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export let PuzzleModalModule2 = function(answer, modalId) {
    function Example(props) {
        //const [show, setShow] = useState(false);
        //const handleClose = () => setShow(false);
        //const handleShow = () => setShow(true);

        return (
          <>
            <Button variant="primary" onClick={props.handleShow}>
              Launch demo modal
            </Button>

            <Modal show={props.show} onHide={props.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={props.handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
    }

    let render = function(props) {
        return (
            <Example
                show={props.show}
                handleClose={props.handleClose}
                handleShow={props.handleShow}
            />
        )
    }
    return {
        render : render,
    }
};