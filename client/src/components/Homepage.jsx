import React from 'react';
import Login from './Modal/Login.jsx';
import Signup from './Modal/Signup.jsx';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      styles: [],
      showLogin: false,
      showSignup: false,
    }
    this.showLoginModal = this.showLoginModal.bind(this);
    this.showSignupModal = this.showSignupModal.bind(this);
  }

  showLoginModal (e) {
    this.setState({
      showLogin: !this.state.showLogin
    })
  }

  showSignupModal (e) {
    this.setState({
      showSignup: !this.state.showSignup
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <button onClick={e => {this.showSignupModal();}}>Sign Up</button>
        <Signup showSignup={this.showSignupModal} show={this.state.showSignup}/>
        <button onClick={e => {this.showLoginModal();}}>Login</button>
        <Login onClick={this.showLoginModal} handleLogin={this.props.handleLogin} show={this.state.showLogin}/>
      </div>
    )
  }
}