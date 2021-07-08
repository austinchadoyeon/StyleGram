import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default class SignedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <h1>What do you think?</h1>
        {/* <button onClick={e => this.props.handleLogout()}>Logout</button> */}
        <Navbar bg='light' expand='lg'>
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Rate a Fit</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}