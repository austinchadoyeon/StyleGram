import React from 'react';
import Login from './Modal/Login.jsx';
import Signup from './Modal/Signup.jsx';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

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
    this.handleLogin = this.handleLogin.bind(this);
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

  handleLogin() {
    let username = {
      username: this.state.username
    };
    axios.get(`/login/${this.state.username}`, {username})
      .then(res => {
        console.log(res)
        if (res.data[0].password === this.state.password) {
          this.props.handleLogin();
        }
      })
      .catch(err => alert('Incorrect username or password! Please try again'))
  }

  render() {
    return (
      <div className='homepageBG'>
        <div className='homepage'>
          <h1 className='homepageTitle'>StyleGram</h1>
          <div className='homepageButtons'>
            <Button className='signupButton' variant='secondary' size='lg' onClick={e => {this.showSignupModal();}}>Sign Up</Button>
            <Signup showSignup={this.showSignupModal} show={this.state.showSignup} handleInput={this.handleInput}/>
            <Button className='loginButton' variant='secondary' size='lg' onClick={e => {this.showLoginModal();}}>Login</Button>
            <Login onClick={this.showLoginModal} handleLogin={this.handleLogin} show={this.state.showLogin} handleInput={this.handleInput} getUsername={this.props.getUsername}/>
          </div>
          <div className='homepageDescription'>
            <h4>Our Story</h4>
            <h5>Ever look through old pictures and think "Damn, I wish someone told me not to wear that."? Ever go shopping and find a cute outfit, but you're not sure if it's $300 cute? StyleGram is your answer to those problems. Post a picture of your outfit and get the opinions of others. Why pay for a single stylist when there's a community of people with similar tastes ready to tell you like it is? Join now and get your style game up!</h5>
          </div>
        </div>
      </div>
    )
  }
}