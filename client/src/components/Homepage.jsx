import React from 'react';
import Login from './Modal/Login.jsx';

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
    }
    this.showLoginModal = this.showLoginModal.bind(this);
  }

  showLoginModal (e) {
    this.setState({
      showLogin: !this.state.showLogin
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <button>Sign Up</button>
        <button onClick={e => {this.showLoginModal();}}>Login</button>
        <Login onClick={this.showLoginModal} show={this.state.showLogin}/>
      </div>
    )
  }
}