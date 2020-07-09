import React from 'react';

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

export default Input;