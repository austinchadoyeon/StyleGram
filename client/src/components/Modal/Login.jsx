import React from 'react';
import './modal.css';

function Login (props) {
  if (!props.show) {
    return null;
  }
  return (
    <div className='modal'>
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
      </div>
  )
}

export default Login;
