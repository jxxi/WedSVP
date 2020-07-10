import React from 'react';
import { Link } from 'react-router-dom';

class HeroNavigation extends React.Component{
    render() {
      return (
        <div id="navigation" className="Navigation">
          <nav>
            <ul>
              <li><Link to='/signup'>Sign Up</Link></li>
              <li>WedSVP Samples</li>
            </ul>
          </nav>
        </div>
      );
    }
};

export default HeroNavigation;