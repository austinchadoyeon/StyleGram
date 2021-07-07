import React from 'react';
import './modal.css';

export default class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className='modal'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h3 className='modal-title'>Title</h3>
          </div>
          <div className='modal-body'>
            Content
          </div>
          <div className='modal-footer'>

          </div>
        </div>
      </div>
    )
  }
}