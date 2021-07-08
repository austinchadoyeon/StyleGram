import React from 'react';
import Homepage from './Homepage.jsx';
import SignedIn from './SignedIn.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

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

  handleLogout() {
    this.setState({
      loggedIn: false
    })
  }

  render() {
    if (this.state.loggedIn === false) {
      return (
        <Homepage handleLogin={this.handleLogin}/>
      )
    } else {
      return (
        <SignedIn handleLogout={this.handleLogout}/>
      )
    }
  }
}