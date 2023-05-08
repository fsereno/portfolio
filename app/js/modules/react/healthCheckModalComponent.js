"use strict;"

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export function HealthCheckModalComponent({id, show, title}) {

  const [isShown, setIsShown] = useState(show);

  const handleClosed = () => setIsShown(false);

  return (
    <>
      <Modal id={id || "healthCheckModal"} show={isShown}>
        <Modal.Header>
          <Modal.Title className="display-4">{title || "Oops! Deployment required!"}</Modal.Title>
          <Button variant="link" className="close" onClick={handleClosed}>
            <span className="lr">
                <span className="rl"></span>
            </span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <p>In order to save on resources, the services for this portfolio are not always deployed.</p>
          <p>Please request a complete deployment of this application to proceed.</p>
          <p>This will result in spinning up a fully containerized environment in the cloud.</p>
          <p>Upon requesting a deployment, you will receive a unique URL through which you can access a fully featured portfolio.</p>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClosed}>
              Close
            </Button>
          </Modal.Footer>
          </Modal.Body>
        </Modal>
    </>
  );
}
