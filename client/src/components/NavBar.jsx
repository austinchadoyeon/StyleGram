import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import PostPic from './Modal/Post.jsx';

export default function NavigationBar (props) {
  return (
      <Navbar bg='light' expand='xl'>
        <Navbar.Brand>Moda</Navbar.Brand>
        <Nav>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link onClick={props.postPic}>Post a Pic</Nav.Link>
          <PostPic cancel={props.postPic} show={props.show}/>
          <Nav.Link>Rate a Fit</Nav.Link>
          <Nav.Link>Trending</Nav.Link>
          <Nav.Link>Upgrade</Nav.Link>
          <Nav.Link>Help</Nav.Link>
          <Nav.Link onClick={props.handleLogout}>Logout</Nav.Link>
        </Nav>
      </Navbar>
  )
}