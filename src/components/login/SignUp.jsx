import React from 'react';
import Logo from '../Logo';
import ModalButton from '../ModalButton';
import Input from '../utilities/Input';
import '../../../static/css/App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class SocialMediaSignUp extends React.Component{
  render() {
    return (
		<div className="SocialMediaSignUp container">
			<div className="row">
				<a href="#"><img className="img-responsive" src={require('./images/facebook_signup.png')} alt="Sign up with Facebook" /></a>
			</div>
			<div className="row">	
				<a href="#"><img className="img-responsive" src={require('./images/google_signup.png')} alt="Sign up with Google" /></a>
			</div>
		</div>
    );
  }
};

class Modal extends React.Component{
	constructor(props){
		super(props)
		this.setState = {
            password: null,
            confirmPassword: null
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
    handleConfirmPasswordInput(value) {
        this.setState({
            confirmPassword: value
        })
    }
    isConfirmedPassword(value) {
        return (value === this.state.password)
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
						<SocialMediaSignUp />
						<Input
							id="username"
							type="username"
							placeholder="Username"
							errorMessage="Username can only contain characters A-Z, a-z and '-'."
							validate={this.isValidUsername}/>
						<Input
							id="Email"
							type="email"
							placeholder="Email" />
						<Input
							name="password"
							type="password"
							placeholder="Password"
							errorMessage="Password is required"
							onChange={this.handlePasswordInput} />				
						<Input
							ref="confirmPassword"
							name="confirmPassword"
							type="password"
							placeholder="Confirm Password"
							errorMessage="Passwords do not match"
							validate={this.isConfirmedPassword}
							onChange={this.handleConfirmPasswordInput} />
						<div className="modalButtonContainer">
							<ModalButton primary={true} text="Register" page=""/>
							<ModalButton primary={false} text="Already a member? Login" page='../signin'/>
						</div>
					</div>
				</form>
			</div>
		);
	}
};

class SignUp extends React.Component{
	constructor(props){
		super(props)
		this.state = { mounted: false };
	}

	componentDidMount() {
		this.setState({ mounted: true });
	}

	render() {
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
};

export default SignUp;
