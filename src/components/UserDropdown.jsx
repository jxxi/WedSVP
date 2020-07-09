import React, { Component } from 'react';

class UserDropdown extends Component {
	render() {
		return (
      <dropdown className="UserDropdown">
        <toggle id="dropdown-basic">
          <div className="User">
            <div className="name">Sandra Dee</div>
            <div className="image"><img src="http://68.media.tumblr.com/597a93f9a5d314cb01a9aebc2ae17216/tumblr_ntt5dof1oy1qadpa6o1_1280.jpg" alt="profile" /></div>
          </div>
        </toggle>

        <dropdownMenu className="menu">
          <dropdownItem href="#/action-1">Action</dropdownItem>
          <dropdownItem href="#/action-2">Another action</dropdownItem>
          <dropdownItem href="#/action-3">Something else</dropdownItem>
        </dropdownMenu>
      </dropdown>
		)
	}
}

export default UserDropdown;