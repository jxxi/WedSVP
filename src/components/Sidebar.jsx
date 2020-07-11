import React from "react";
import { withRouter } from "react-router";
import '../../static/css/App.css';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

const Side = props => {
    return (
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
        activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
            <div className="sidebar-sticky"></div>
        <NavItem>
            <NavLink href="/home">Active</NavLink>
        </NavItem>
        <NavItem>
            <NavLink eventKey="link-1">Link</NavLink>
        </NavItem>
        <NavItem>
            <NavLink eventKey="link-2">Link</NavLink>
        </NavItem>
        <NavItem>
            <NavLink eventKey="disabled" disabled>
            Disabled
            </NavLink>
        </NavItem>
        </Nav>
    );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar