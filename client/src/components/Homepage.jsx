import React from 'react';
import Login from './Modal/Login.jsx';
import Signup from './Modal/Signup.jsx';
import Button from 'react-bootstrap/Button'

export default class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      styles: [],
      showLogin: false,
      showSignup: false,
    }
    this.showLoginModal = this.showLoginModal.bind(this);
    this.showSignupModal = this.showSignupModal.bind(this);
    this.handleInput = this.handleInput.bind(this);
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

  handleInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <Button onClick={e => {this.showSignupModal();}}>Sign Up</Button>
        <Signup showSignup={this.showSignupModal} show={this.state.showSignup}/>
        <Button onClick={e => {this.showLoginModal();}}>Login</Button>
        <Login onClick={this.showLoginModal} handleLogin={this.props.handleLogin} show={this.state.showLogin} handleInput={this.handleInput}/>
      </div>
    )
  }
}