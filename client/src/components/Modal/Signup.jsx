import React from 'react';
import './modal.css';

function Signup (props) {
  if (!props.show) {
    return null;
  }
  return(
    <div className='modal'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h3 className='modal-title'>Welcome!</h3>
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
            <button className='button'>Signup</button>
            <button onClick={e => {props.showSignup()}}className='button'>Cancel</button>
          </div>
        </div>
      </div>
  )
}

export default Signup;
