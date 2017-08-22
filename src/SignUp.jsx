import React from 'react';
import Logo from './Logo';
import '../static/css/App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var Input = React.createClass({
	    getInitialState() {
        return {
            valid: false,
            value: null,
            errorMessage: this.props.errorMessage,
            errorVisible: false
        }
    },
    handleChange(event) {
        this.setState({
            value: event.target.value
        })

        if (this.props.validate) {
            this.validate(event.target.value);
        }

        if (this.props.onChange) {
            this.props.onChange(event.target.value);
        }

    },
    validate(value) {
        if (this.props.validate && this.props.validate(value)) {
            this.setState({
                valid: true,
                errorVisible: false
            });
        } else {
            this.setState({
                valid: false,
                errorVisible: true
            });
        }
    },
	
	render: function() {
		return (
			<div className="row">
				<div className="Input">
					<input 
						name={this.props.name}
						onChange={this.handleChange}
						autoComplete="false"
						type={this.props.type}
						placeholder={this.props.placeholder}
					/>	
					<label htmlFor={this.props.name}></label>
				</div>
				{!this.state.valid && <InputError errorMessage={this.state.errorMessage} visible={this.state.errorVisible} />}
			</div>
			
		);
	}
});

var InputError = React.createClass({
    render() {
        var divStyle = {
            display: this.props.visible ? 'inline-block': 'none'
        }
        return (
			<div className="row text-center">
				<div className="error text-danger" style={divStyle}>{this.props.errorMessage}</div>
			</div>
        )
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
	getInitialState() {
        return {
            password: null,
            confirmPassword: null
        }
    },
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
	},
    handleConfirmPasswordInput(value) {
        this.setState({
            confirmPassword: value
        })
    },
    isConfirmedPassword(value) {
        return (value === this.state.password)

    },
	render: function() {
		return (
			<div className="Modal">		
				<form 
					onSubmit={this.props.onSubmit}
					className="ModalForm">
					<div className="col-sm-12">
						<div className="container"><Logo /></div>
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
							<ModalButton primary={false} text="Already a member? Login" page=""/>
						</div>
					</div>
				</form>
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
