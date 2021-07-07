import React from 'react';
import Homepage from './Homepage.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    }
  }



  render() {
    if (this.state.loggedIn === false) {
      return (
        <Homepage />
      )
    }
  }
}