import React from 'react';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <button>Sign Up</button>
        <button>Login</button>
      </div>
    )
  }
}