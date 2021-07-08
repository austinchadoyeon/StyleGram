import React from 'react';
// import './modal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Signup(props) {
  const stylesArray = ['Casual', 'Bohemian', 'Punk', 'Preppy', 'Trendy', 'Vintage', 'Sporty', 'Artsy', 'High Street', 'Designer', 'Hipster', 'Cowgirl/Cowboy', 'Formal']

  if (!props.show) {
    return null;
  }
  return (
    <>
      <Modal show={props.show} onHide={props.showSignup}>
        <Modal.Header>
          <Modal.Title>Sign Up Here:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='signupFirstName'>
              <Form.Label>First Name</Form.Label>
              <Form.Control name='firstName' type='firstName' placeholder='Enter First Name'/>
            </Form.Group>
            <Form.Group controlId='signupLastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control name='lastName' type='lastName' placeholder='Enter Last Name'/>
            </Form.Group>
            <Form.Group controlId='signupEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control name='email' type='email' placeholder='Enter Email'/>
              <Form.Text className='text-muted'>
                Your email will never be shared with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId='signupUsername'>
              <Form.Label>Username</Form.Label>
              <Form.Control name='username' type='username' placeholder='Create a username'/>
              <Form.Text className='text-muted'>
                This will be visible to other members.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId='signupPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control name='password' type='password' placeholder='Create a password'/>
              <Form.Text className='text-muted'>
                Must contain atleast 8 characters, of which 1 must be special.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>What's your style? (Select as many as you want!)</Form.Label>
              {stylesArray.map((style) => (
                <Form.Check
                  type={'checkbox'}
                  label={style}
                />
              ))}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary'>
            Submit
          </Button>
          <Button variant='secondary' onClick={props.showSignup}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Signup;

{/* <div className='modal'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h3 className='modal-title'>Welcome! Sign up here:</h3>
          </div>
          <div className='modal-body'>
            <form>
              <label>
                First Name:
                <input type='text' name='firstName'/>
              </label>
              <label>
                Last Name:
                <input type='text' name='lastName' />
              </label>
              <label>
                Email:
                <input type='text' name='email' />
              </label>
              <label>
                Username:
                <input type='text' name='username' />
              </label>
              <label>
                Password:
                <input type='text' name='password' />
              </label>
            </form>
          </div>
          <div className='modal-footer'>
            <button className='button'>Signup</button>
            <button onClick={e => {props.showSignup()}}className='button'>Cancel</button>
          </div>
        </div>
      </div> */}