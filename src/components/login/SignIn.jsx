import React from 'react';
import Logo from '../Logo';
import ModalButton from '../ModalButton';
import Input from '../utilities/Input';
import '../../../static/css/App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class SocialMediaSignIn extends React.Component {
  render() {
    return (
		<div className="SocialMediaSignIn container">
			<div className="row">
				<a href="#"><img className="img-responsive" src={require('./images/facebook_signup.png')} alt="Sign in with Facebook" /></a>
			</div>
			<div className="row">	
				<a href="#"><img className="img-responsive" src={require('./images/google_signup.png')} alt="Sign in with Google" /></a>
			</div>
		</div>
    );
  }
};

class Modal extends React.Component {
	constructor(props){
		super(props)
		this.state = {
            password: null
        }
	}
    handlePasswordInput(value) {
		this.setState({
			password: value
		});
		var self= this;
		window.setTimeout(function(){
			if (self.state.confirmPassword && self.state.confirmPassword.length) {
				self.refs.confirmPassword.validate(self.state.confirmPassword);
			}
		});
	}
	isValidUsername(value) {
		var nameRegex = /^[a-zA-Z\-]+$/;
		var validUsername = value.match(nameRegex);
		if(validUsername == null){
			return false;
		}
		return true;
	}
	render() {
		return (
			<div className="Modal">		
				<form 
					onSubmit={this.props.onSubmit}
					className="ModalForm">
					<div className="col-sm-12">
						<div className="container"><Logo /></div>
						<SocialMediaSignIn />
						<Input
							id="username"
							type="username"
							placeholder="Username"
							validate={this.isValidUsername}/>
						<Input
							name="password"
							type="password"
							placeholder="Password"
							errorMessage="Password is required"
							onChange={this.handlePasswordInput} />
						<div className="modalButtonContainer">
							<ModalButton primary={true} text="Sign in" page=""/>
							<ModalButton primary={false} text="Register" page=""/>
						</div>
					</div>
				</form>
			</div>
		);
	}
};

class SignIn extends React.Component {
	constructor(props){
		super(props)
		this.state = { mounted: false };
	}
	
	componentDidMount () {
		this.setState({ mounted: true });
	}

	render() {
		var child;

		if(this.state.mounted) {
			child = (<Modal onSubmit={this.handleSubmit} />);
		}
		
		return(
			<div id="signin" className="SignIn">
				<ReactCSSTransitionGroup 
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
						{child}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
};

export default SignIn;
