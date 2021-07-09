import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import PostPic from './Modal/Post.jsx';
import NavigationBar from './NavBar.jsx';
import RateAFit from './RateAFit.jsx';
import axios from 'axios';

export default class SignedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      showPostPic: false,
      rateAFit: false,
      trending: false,
      help: false,
      imageArray: []
    }
    this.togglePostPic = this.togglePostPic.bind(this);
    this.toggleRateAFit = this.toggleRateAFit.bind(this);
    this.toggleTrending = this.toggleTrending.bind(this);
    this.toggleHelp = this.toggleHelp.bind(this);
  }

  componentDidMount() {
    axios.get('/rateAFit')
      .then(res => {
        console.log(res.data);
        this.setState({
          imageArray: res.data
        })
      })
      .catch(err => console.log(err))
  }

  toggleHome (e) {
    this.setState({
      home: true,
      trending: false,
      rateAFit: false
    })
  }

  togglePostPic (e) {
    this.setState({
      showPostPic: !this.state.showPostPic
    })
  }

  toggleRateAFit(e) {
    this.setState({
      home: false,
      trending: false,
      rateAFit: true
    })
  }

  toggleHelp(e) {
    this.setState({
      help: !this.state.help
    })
  }

  toggleTrending(e) {
    this.setState({
      home: false,
      rateAFit: false,
      trending: true
    })
  }



  render () {
    if (this.state.home) {
      return (
        <NavigationBar handleLogout={this.props.handleLogout} togglePostPic={this.togglePostPic} show={this.state.showPostPic} toggleRateAFit={this.toggleRateAFit} toggleTrending={this.toggleTrending}toggleHelp={this.toggleHelp} showHelp={this.state.help}/>
      )
    } else if (this.state.rateAFit) {
      return (
        <div className='rateAFit'>
          <NavigationBar handleLogout={this.props.handleLogout} togglePostPic={this.togglePostPic} show={this.state.showPostPic} toggleRateAFit={this.toggleRateAFit} toggleTrending={this.toggleTrending} toggleHelp={this.toggleHelp} showHelp={this.state.help}/>
          {this.state.imageArray.map(image => <RateAFit obj={image} key={image.id}/>)}
        </div>
      )
    }
  }
}