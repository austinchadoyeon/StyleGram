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
      <div className='homePage'>
        <h1>Welcome</h1>
        <Button onClick={e => {this.showSignupModal();}}>Sign Up</Button>
        <Signup showSignup={this.showSignupModal} show={this.state.showSignup} handleInput={this.handleInput}/>
        <Button onClick={e => {this.showLoginModal();}}>Login</Button>
        <Login onClick={this.showLoginModal} handleLogin={this.props.handleLogin} show={this.state.showLogin} handleInput={this.handleInput}/>
        <div>
          <h5>Ever look through old pictures and think "OY, I wish someone told me not to wear that."? Ever go shopping and find a cute outfit, but you're not sure if it's $300 cute? NAME is your answer to those problems. Post a picture of your outfit and get the opinions of others. Why pay for a single stylist when there's a community of people with similar tastes ready to tell you like it is? Join now and get your style game up!</h5>
        </div>
      </div>
    )
  }
}