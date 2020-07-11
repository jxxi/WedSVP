import React from 'react';
import { Link } from 'react-router-dom';
import UserDropdown from './UserDropdown';


class Navigation extends React.Component{
    getDisplayItems() {
      let location = window.location.pathname;
      if(!location || location === '/') {
        return (
          <ul>
            <li><Link to='/signup'>Sign Up</Link></li>
            <li>WedSVP Samples</li>
          </ul>
        )
      }
      return
    }
    render() {
      return (
        <React.Fragment>
          <div id="navigation" className="Navigation">
            <nav>
              {this.getDisplayItems()}
            </nav>
          </div>
          <UserDropdown />
        </React.Fragment>
      );
    }
};

export default Navigation;