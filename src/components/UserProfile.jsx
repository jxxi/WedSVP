import React from 'react';

var UserProfile = React.createClass({
    render: function() {
      return (
        <div className="UserProfile">
          <div className="User">
            <div className="name">Sandra Dee</div>
            <div className="image"><img src="http://68.media.tumblr.com/597a93f9a5d314cb01a9aebc2ae17216/tumblr_ntt5dof1oy1qadpa6o1_1280.jpg" alt="profile" /></div>
          </div>
        </div>
      );
    }
});

export default UserProfile;