import React from 'react';

export default class SignedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <h1>What do you think?</h1>
        <button onClick={e => this.props.handleLogout()}>Logout</button>
      </div>
    )
  }
}