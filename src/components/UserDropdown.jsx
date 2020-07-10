import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import { Link } from 'react-router-dom';

class UserDropdown extends Component {
	render() {
		return (
      <Dropdown className="UserDropdown">
          <DropdownToggle className="dropdown">
            <Link to='/my-profile'>
              <div className="User">
                <div className="name">Sandra Dee</div>
                <div className="image"><img src="http://68.media.tumblr.com/597a93f9a5d314cb01a9aebc2ae17216/tumblr_ntt5dof1oy1qadpa6o1_1280.jpg" alt="profile" /></div>
              </div>
            </Link>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="/my-profile">My Profile</DropdownItem>
            <DropdownItem href="#">My Site</DropdownItem>
            <DropdownItem href="#">Designer</DropdownItem>
            <DropdownItem className="divider-before" href="#">Sign out</DropdownItem>
          </DropdownMenu>
      </Dropdown>
		)
	}
}

export default UserDropdown;