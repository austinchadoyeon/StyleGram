import React from 'react';
// import './modal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
          <form>
            <label>
              Username:
              <input type='text' name='username' />
            </label>
            <label>
              Password:
              <input type='text' name='password' />
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={props.handleLogin}>
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

      {/* <div className='modal'>
<div className='modal-content'>
  <div className='modal-header'>
    <h3 className='modal-title'>Welcome back!</h3>
  </div>
  <div className='modal-body'>
    <form>
      <label>
        Username:
        <input type='text' name='username'/>
      </label>
      <label>
        Password:
        <input type='text' name='password' />
      </label>
    </form>
  </div>
  <div className='modal-footer'>
    <button className='button' onClick={e => {props.handleLogin()}}>Login</button>
    <button onClick={e => {props.onClick()}}className='button'>Cancel</button>
  </div>
</div>
</div> */}