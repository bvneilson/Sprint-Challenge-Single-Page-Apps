import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from 'reactstrap';

export default function Navigation() {
  return (
    <Nav className="text-center">
      <NavItem>
        <NavLink><Link to={"/"} className="link">Home</Link></NavLink>
      </NavItem>
      <NavItem>
        <NavLink><Link to={"/characters"} className="link">Characters</Link></NavLink>
      </NavItem>
    </Nav>
  )
}
