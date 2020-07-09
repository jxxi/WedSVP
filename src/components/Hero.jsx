import React from 'react';
import { Link } from 'react-router-dom';

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

export default Hero;