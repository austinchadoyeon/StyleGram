import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import PostPic from './Modal/Post.jsx';

export default class SignedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPostPic: false,
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
      <div>
        <Navbar bg='light' expand='xl'>
          <Navbar.Brand>Moda</Navbar.Brand>
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link onClick={this.postPic}>Post a Pic</Nav.Link>
            <PostPic cancel={this.postPic} show={this.state.showPostPic}/>
            <Nav.Link>Rate a Fit</Nav.Link>
            <Nav.Link>Trending</Nav.Link>
            <Nav.Link>Upgrade</Nav.Link>
            <Nav.Link>Help</Nav.Link>
            <Nav.Link onClick={this.props.handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}