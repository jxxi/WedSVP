import React from 'react';
import Logo from './Logo';
import '../static/css/App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var Input = React.createClass({
	render: function() {
		return (
			<div className="row">
				<div className="Input">
					<input 
						id={this.props.name}
						autoComplete="false"
						required
						type={this.props.type}
						placeholder={this.props.placeholder}
					/>	
					<label htmlFor={this.props.name}></label>
				</div>
			</div>
		);
	}
});

var SocialMediaSignUp = React.createClass({
  render: function() {
    return (
		<div className="SocialMediaSignUp container">
			<div className="row">
				<a href="#"><img className="img-responsive" src={require('../static/images/facebook_signup.png')} alt="Sign Up with Facebook" /></a>
			</div>
			<div className="row">	
				<a href="#"><img className="img-responsive" src={require('../static/images/google_signup.png')} alt="Sign Up with Google" /></a>
			</div>
		</div>
    );
  }
});

var Modal = React.createClass({
	render: function() {
		return (
			<div className="Modal">
				<form 
					onSubmit={this.props.onSubmit}
					className="ModalForm">
					<div className="col-sm-12">	
						<SocialMediaSignUp />
						<Input
							id="name"
							type="text"
							placeholder="First and Last Name" />
						<Input
							id="Email"
							type="email"
							placeholder="Email" />
						<Input
							id="password"
							type="password"
							placeholder="Password" />
						<Input
							id="confirm-password"
							type="password"
							placeholder="Confirm Password" />
						<div className="modalButtonContainer">
							<ModalButton primary={true} text="Register" page=""/>
							<ModalButton primary={false} text="Already a member? Login" page=""/>
						</div>
					</div>
				</form>
				<Logo />
			</div>
		);
	}
});

var ModalButton = React.createClass({
  render: function() {
    var button;
    
    if(this.props.page !== "")
      button = <Link to={this.props.page} className="ModalButton" data-primary={this.props.primary}>{this.props.text}<i className="fa fa-fw fa-chevron-right"></i></Link>
    else
      button = <a href="#" className="ModalButton" data-primary={this.props.primary}>{this.props.text}<i className="fa fa-fw fa-chevron-right"></i></a>
        
    return (
      button
    );
  }
});

var SignUp = React.createClass({
	
	getInitialState: function() {
		return { mounted: false };
	},
	
	componentDidMount: function() {
		this.setState({ mounted: true });
	},
	
	handleSubmit: function(e) {
		this.setState({ mounted: false });
		e.preventDefault();
	},

	render: function() {
		var child;

		if(this.state.mounted) {
			child = (<Modal onSubmit={this.handleSubmit} />);
		}
		
		return(
			<div id="signup" className="SignUp">
				<ReactCSSTransitionGroup 
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
						{child}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});

export default SignUp;
