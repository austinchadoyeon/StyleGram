import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function PostPic(props) {
  if (!props.show) {
    return null;
  }
  return (
    <>
      <Modal show={props.show} onHide={props.cancelPost}>
        <Modal.Header>
          <Modal.Title>New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId=''>

            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button>Submit</Button>
          <Button onClick={props.cancel}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}