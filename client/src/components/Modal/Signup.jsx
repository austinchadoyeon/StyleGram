import React from 'react';
import './modal.css';

function Signup (props) {
  const stylesArray = ['Casual', 'Bohemian', 'Punk', 'Preppy', 'Trendy', 'Vintage', 'Sporty', 'Artsy', 'High Street', 'Designer', 'Hipster', 'Cowgirl/Cowboy', 'Formal']

  if (!props.show) {
    return null;
  }
  return(
    <div className='modal'>
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
      </div>
  )
}

export default Signup;
