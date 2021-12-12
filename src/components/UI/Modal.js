import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from '@material-ui/core';

/**
 * @author
 * @function Modal
 **/

const NewModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
            <Button variant="contained" color="primary" onClick={props.handleClose}>
              Save
            </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewModal;
