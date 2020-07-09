import React from 'react';
import { Link } from 'react-router-dom';

var Navigation = React.createClass({
    render: function() {
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
});

export default Navigation;