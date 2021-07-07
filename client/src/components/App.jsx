import React from 'react';
import Homepage from './Homepage.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    }
    this.handleLogin = this.handleLogin.bind(this);

  }

  handleLogin() {
    this.setState({
      loggedIn: true
    })
  }

  handleSignUp() {
    this.setState({
      loggedIn: true
    })
  }

  render() {
    if (this.state.loggedIn === false) {
      return (
        <Homepage />
      )
    }
  }
}