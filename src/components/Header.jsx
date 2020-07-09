import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import UserProfile from './UserProfile';

var Header = React.createClass({
    render: function() {
      return (
        <header className="Header">
            <Logo />
            <Navigation />
            <UserProfile />
        </header>
      )
    }
});

export default Header;