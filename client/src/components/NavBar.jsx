import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import PostPic from './Modal/Post.jsx';
import Help from './Modal/Help.jsx';

export default function NavigationBar (props) {
  return (
      <Navbar className='navBar' bg='light' expand='xl' fixed='top'>
        <Navbar.Brand>StyleGram</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            <Nav.Link onClick={props.toggleHome}>Home</Nav.Link>
            <Nav.Link onClick={props.togglePostPic}>Post a Pic</Nav.Link>
            <PostPic cancel={props.togglePostPic} show={props.show}/>
            <Nav.Link onClick={props.toggleRateAFit}>Rate a Fit</Nav.Link>
            <Nav.Link onClick={props.toggleTrending}>Trending</Nav.Link>
            <Nav.Link>Upgrade</Nav.Link>
            <Nav.Link onClick={props.toggleHelp}>Help</Nav.Link>
            <Help cancel={props.toggleHelp} show={props.showHelp}/>
            <Nav.Link onClick={props.handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}