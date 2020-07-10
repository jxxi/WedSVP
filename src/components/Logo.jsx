import React from 'react';
import { Link } from 'react-router-dom';

class Logo extends React.Component{
	render() {
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
};

export default Logo;