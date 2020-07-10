import React from 'react';
import Logo from './Logo';
import Navigation from './HeroNavigation';
import UserDropdown from './UserDropdown';

class Header extends React.Component{
    render() {
      return (
        <header className="Header">
            <Logo />
            <Navigation />
            <UserDropdown />
        </header>
      )
    }
};

export default Header;