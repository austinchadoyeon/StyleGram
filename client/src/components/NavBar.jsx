import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import PostPic from './Modal/Post.jsx';

export default function NavigationBar (props) {
  return (
      <Navbar bg='light' expand='xl'>
        <Navbar.Brand>Moda</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link>Home</Nav.Link>
            <Nav.Link onClick={props.togglePostPic}>Post a Pic</Nav.Link>
            <PostPic cancel={props.togglePostPic} show={props.show}/>
            <Nav.Link onClick={props.toggleRateAFit}>Rate a Fit</Nav.Link>
            <Nav.Link onClick={props.toggleTrending}>Trending</Nav.Link>
            <Nav.Link>Upgrade</Nav.Link>
            <Nav.Link>Help</Nav.Link>
            <Nav.Link onClick={props.handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}