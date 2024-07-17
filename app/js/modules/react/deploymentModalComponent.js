import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { ConfigUtil } from '../utils/configUtil';
import Button from 'react-bootstrap/Button';

/**
 * DeploymentModalComponent displays a modal detailing how to request a deployment.
 * If the endpoint is not available, the modal is shown to the user.
 *
 * @param {string} id - The ID of the modal element.
 * @param {string} title - The title of the modal.
 * @param {string} endpoint - The endpoint URL to check.
 */
export function DeploymentModalComponent({id, title, show, handleClose}) {

  const config = ConfigUtil.get();
  const linkedInUrl = config.linkedInUrl;
  const gitHubIssueUrl = config.gitHubIssuesUrl;

  return (
    <>
      <Modal id={id || "deploymentModal"} show={show}>
        <Modal.Header>
          <Modal.Title className="display-4">{title || "Request Deployment"}</Modal.Title>
          <Button variant="link" className="close" onClick={handleClose}>
            <span className="lr">
                <span className="rl"></span>
            </span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <p>To conserve resources, services are not always available. To proceed, please request a full deployment of the portfolio. This will create a fully containerised environment in the cloud. Once you request the deployment, you will receive a unique URL to access the complete portfolio.</p>
          <Modal.Footer className="flex-box ">
              <a className="btn btn-dark w-100 mb-2" href={gitHubIssueUrl} target="_blank">
                Raise an Issue on GitHub<i className="fa fa-github ml-2"></i>
              </a>
              <a className="btn btn-dark w-100" href={linkedInUrl} target="_blank">
                Make Contact on LinkedIn<i className="fa fa fa-linkedin ml-2"></i>
              </a>
          </Modal.Footer>
          </Modal.Body>
        </Modal>
    </>
  );
}
