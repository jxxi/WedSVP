import React from 'react';
// Logo
var Logo = React.createClass({
	render: function() {
		return (
			<div id="logo" className="Logo">
				<div className="image"><img src={require('../images/logo.png')} alt="WedSVP" /></div>
			</div>
		);
	}
});

export default Logo;