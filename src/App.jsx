import React from 'react';
import Logo from './Logo';
import SignUp from './SignUp';
import SignIn from './SignIn';
import '../static/css/App.css';
import { Switch, Route, Link } from 'react-router-dom';

/////////////////
/// COMPONENTS //
/////////////////

// Container
var App = React.createClass({
  apiKey: '87dfa1c669eea853da609d4968d294be',
  getInitialState: function() {
    return {searchTerm:"", searchUrl:""};
  },
  
  render: function() {
    return (
      <div id="main">
          <Switch>
            <Route exact path='/signup' component={SignUp}/>
            <Route path='/signin' component={SignIn}/>
          </Switch>
          <header className="Header">
            <Logo />
            <Navigation />
            <UserProfile />
          </header>
          <Hero />
          <TitleList title="Personalized RSVP Website" url='discover/tv?sort_by=popularity.desc&page=1' />
        <Footer />
      </div>
    );
  }
});

// Navigation
var Navigation = React.createClass({
  render: function() {
    return (
      <div id="navigation" className="Navigation">
        <nav>
          <ul>
            <li><Link to='/signup'>Sign Up</Link></li>
            <li>WedSVP Samples</li>
          </ul>
        </nav>
      </div>
    );
  }
});

// User Profile
var UserProfile = React.createClass({
  render: function() {
    return (
      <div className="UserProfile">
        <div className="User">
          <div className="name">Sandra Dee</div>
          <div className="image"><img src="http://68.media.tumblr.com/597a93f9a5d314cb01a9aebc2ae17216/tumblr_ntt5dof1oy1qadpa6o1_1280.jpg" alt="profile" /></div>
        </div>
      </div>
    );
  }
});

//////////
// Hero //
//////////

var Hero = React.createClass({
  render: function() {
    return (
      <div id="hero" className="Hero" style={{backgroundImage: 'url(https://images4.alphacoders.com/700/700105.jpg)'}}>
        <div className="content">
          <h2>Create a Personalized RSVP for your Special Day</h2>
          <h3>Skip the headache of snail mail. Direct your guests to an online RSVP.</h3>
          <div className="button-wrapper">
            <HeroButton primary={true} text="Sign Up - It's Free!" page="signup"/>
            <HeroButton primary={false} text="How it works" page=""/>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
    );
  }
})

// Hero Button
var HeroButton = React.createClass({
  render: function() {
    var button;
    
    if(this.props.page !== "")
      button = <Link to={this.props.page} className="Button" data-primary={this.props.primary}>{this.props.text}</Link>
    else
      button = <a href="#" className="Button" data-primary={this.props.primary}>{this.props.text}</a>
        
    return (
      button
    );
  }
})

////////////////
// Title List //
////////////////

// Title List Container

var TitleList = React.createClass({

  apiKey: '87dfa1c669eea853da609d4968d294be',
  getInitialState: function() {
    return {data: [], mounted: false};
  },
  loadContent: function() {
    var requestUrl = 'https://api.themoviedb.org/3/' + this.props.url + '&api_key=' + this.apiKey;
    fetch(requestUrl).then((response)=>{
        return response.json();
    }).then((data)=>{
        this.setState({data : data});
    }).catch((err)=>{
        console.log("There has been an error");
    });
  },
  componentWillReceiveProps : function(nextProps){
    if(nextProps.url !== this.props.url && nextProps.url !== ''){
      this.setState({mounted:true,url:nextProps.url},()=>{
        this.loadContent();
      });
      
    }
  },
  componentDidMount: function() {
    if(this.props.url !== ''){
      this.loadContent();
      this.setState({mounted:true});
    }
    
  },
  render: function() {
    var titles ='';
    if(this.state.data.results) {
      titles = this.state.data.results.map(function(title, i) {
        if(i < 3) {
          var name = '';
          var backDrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path;
          if(!title.name) {
            name = title.original_title;
          } else {
            name = title.name;
          }

          return (
            <Item key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop} />
          );  

        }else if(i === 3){
          return (<div key={title.id}></div>);
        }
      }); 

    } 
    
    return (
      <div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
        <div className="Title">
          <h1>{this.props.title}</h1>
          <div className="titles-wrapper">
            {titles}
          </div>
        </div>
      </div>
    );
  }
});

// Title List Item
var Item = React.createClass({
  render: function() {
    return (
      <div className="Item">
        <div className="overlay">
          <div className="title">title</div>
          <div className="rating">score</div>
          <div className="plot">overview</div>
          <ListToggle />
        </div>
      </div>
    );
  }
});

// ListToggle
var ListToggle = React.createClass({
  getInitialState: function() {
    return({ toggled: false })
  },
  handleClick: function() {
    if(this.state.toggled === true) {
      this.setState({ toggled: false });
    } else {
      this.setState({ toggled: true }); 
    }
    
  },
  render: function() {
    return (
      <div onClick={this.handleClick} data-toggled={this.state.toggled} className="ListToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    );
  }
});

// Footer
var Footer = React.createClass({
  render : function(){
    return(
      <footer className="footer" style={{backgroundColor: 'rgba(63, 72, 89, 0.3)'}}>
        <div className="container" style={{paddingTop: '30px',paddingBottom: '30px'}}>
          <div className="row text-center">
            <div className="col-sm-6">About</div>
            <div className="col-sm-6">Contact Us</div>
          </div>        
        </div>
        <div className="container" style={{paddingTop: '30px',paddingBottom: '30px'}}>
        <div className="row text-center">
            <div className="col-sm-12">© 2017 WedSVP LLC. All Rights Reserved.</div>
          </div>
        </div>
      </footer>
    );
  }
});

export default App;
