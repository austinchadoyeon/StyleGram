import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import PostPic from './Modal/Post.jsx';
import NavigationBar from './NavBar.jsx';

export default class SignedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      showPostPic: false,
      rateAFit: false,
      trending: false,
    }
    this.postPic = this.postPic.bind(this);
  }

  postPic (e) {
    this.setState({
      showPostPic: !this.state.showPostPic
    })
  }

  render () {
    return (
      <NavigationBar handleLogout={this.props.handleLogout} postPic={this.postPic} show={this.state.showPostPic}/>
    )
  }
}