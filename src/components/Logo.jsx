import React from 'react';
import { Link } from 'react-router-dom';

var Logo = React.createClass({
	render: function() {
		return (
			<div id="logo" className="Logo">
				<div className="image">
					<Link to='/'>
						<img className="img-responsive" src={require('../../static/images/logo.png')} alt="WedSVP" />
					</Link>
				</div>
			</div>
		);
	}
});

export default Logo;