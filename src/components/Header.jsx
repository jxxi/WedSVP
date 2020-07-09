import React from 'react';
import Logo from './Logo';
import Navigation from './HeroNavigation';
import UserDropdown from './UserDropdown';

var Header = React.createClass({
    render: function() {
      return (
        <header className="Header">
            <Logo />
            <Navigation />
            <UserDropdown />
        </header>
      )
    }
});

export default Header;