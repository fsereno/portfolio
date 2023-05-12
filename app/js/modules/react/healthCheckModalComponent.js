import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

/**
 * HealthCheckModalComponent displays a modal that checks the health of a specific endpoint.
 * If the endpoint is not available, the modal is shown to the user.
 *
 * @param {string} id - The ID of the modal element.
 * @param {string} title - The title of the modal.
 * @param {string} endpoint - The endpoint URL to check.
 */
export function HealthCheckModalComponent({id, title, endpoint}) {

  const [isShown, setIsShown] = useState(false);

  const handleClosed = () => setIsShown(false);

  useEffect(() => {
    fetch(endpoint)
      .then(response => {
        if(response.status === 404) {
          setIsShown(true);
        }
      })
      .catch(() => {
        setIsShown(true);
      });
  }, []);

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
