import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import PostPic from './Modal/Post.jsx';
import NavigationBar from './NavBar.jsx';
import RateAFit from './RateAFit.jsx';
import UserHome from './userHome.jsx';
import axios from 'axios';

export default class SignedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: false,
      showPostPic: false,
      rateAFit: true,
      trending: false,
      help: false,
      imageArray: [],
      mainUrl: '',
      brand: '',
      price: '',
      style: '',
      userImages: [],
    }
    this.togglePostPic = this.togglePostPic.bind(this);
    this.toggleRateAFit = this.toggleRateAFit.bind(this);
    this.toggleTrending = this.toggleTrending.bind(this);
    this.toggleHelp = this.toggleHelp.bind(this);
    this.handlePostPic = this.handlePostPic.bind(this);
    this.toggleHome = this.toggleHome.bind(this);
  }

  componentDidMount() {
    axios.get('/rateAFit')
      .then(res => {
        this.setState({
          imageArray: res.data
        });
        return axios.get(`/home/${this.props.loggedInUser}`, {
          username: this.props.loggedInUser
        })
      })
      .then(res2 => {
        console.log('2nd axios request:', res2.data);
        this.setState({
          userImages: res2.data
        })
      })
      .catch(err => console.log(err))
  }

  toggleHome(e) {
    this.setState({
      home: true,
      trending: false,
      rateAFit: false
    })
  }

  togglePostPic(e) {
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

  handlePostPic() {

  }



  render() {
    if (this.state.home) {
      return (
        <div className='userHome'>
          <NavigationBar handleLogout={this.props.handleLogout} togglePostPic={this.togglePostPic} show={this.state.showPostPic} toggleRateAFit={this.toggleRateAFit} toggleTrending={this.toggleTrending} toggleHelp={this.toggleHelp} showHelp={this.state.help} toggleHome={this.toggleHome}/>
          <h4>Your posts:</h4>
          {this.state.userImages.map(image => <UserHome obj={image} key={image.id} />)}
        </div>
      )
    } else if (this.state.rateAFit) {
      return (
        <div className='rateAFit'>
          <NavigationBar handleLogout={this.props.handleLogout} togglePostPic={this.togglePostPic} show={this.state.showPostPic} toggleRateAFit={this.toggleRateAFit} toggleTrending={this.toggleTrending} toggleHelp={this.toggleHelp} showHelp={this.state.help} toggleHome={this.toggleHome}/>
          {this.state.imageArray.map(image => <RateAFit obj={image} key={image.id} />)}
        </div>
      )
    }
  }
}