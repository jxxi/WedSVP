import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';


class Header extends React.Component{
  render() {
    return (
      <header className="Header">
          <Logo />
          <Navigation />
      </header>
    )
  }
};

export default Header;