import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

import Link from "next/link";

function MainNavbar(props) {
  let [toggle, setToggle] = useState(false);

  const changeToggle = (e) => {
    setToggle((prevToggle) => {
      if (prevToggle) {
        return false;
      } else {
        return true;
      }
    });
  };

  return (
    <div>
      <Navbar scrolling dark expand="md" fixed="top">
        <NavbarToggler onClick={(e) => changeToggle(e)} />
        <Collapse navbar isOpen={toggle}>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className="nav-item" href="/#Home">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-item" href="/#Projects">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-item"
                href="https://github.com/jordantwells42"
              >
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle className="nav-item" caret nav>
                About
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem className="nav-item-dark" href="/#About Me">
                  About Me
                </DropdownItem>
                <DropdownItem
                  className="nav-item-dark"
                  href="https://www.linkedin.com/in/jordantwells/"
                >
                  LinkedIn
                </DropdownItem>
                <DropdownItem
                  className="nav-item-dark"
                  href="https://medium.com/@jordantwells"
                >
                  Medium Blog
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="nav-item-dark" href="/jtw_resume.pdf">
                  Resume
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MainNavbar;
