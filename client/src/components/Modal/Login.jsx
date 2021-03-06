import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login(props) {
  if (!props.show) {
    return null;
  }
  return (
    <>
      <Modal show={props.show} onHide={props.onClick}>
        <Modal.Header>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='username'>
              <Form.Label>Username</Form.Label>
              <Form.Control name='username' type='username' placeholder='Enter username' onChange={e => {props.handleInput(e); props.getUsername(e)}}/>
            </Form.Group>
            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control name='password' type='password' placeholder='Password' onChange={props.handleInput}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='success' onClick={props.handleLogin}>
            Sign In
          </Button>
          <Button variant='secondary' onClick={props.onClick}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      )
}

export default Login;
