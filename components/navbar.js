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
              <NavLink href="/#Home">
                <div className="nav-item">Home</div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#Projects">
                <div className="nav-item">Projects</div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/jordantwells42">
                <div className="nav-item">Github</div>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                About
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem href="/#About Me">
                  <div className="nav-item-dark">About Me</div>
                </DropdownItem>
                <DropdownItem href="https://www.linkedin.com/in/jordantwells/">
                  <div className="nav-item-dark">LinkedIn</div>
                </DropdownItem>
                <DropdownItem href="https://medium.com/@jordantwells">
                  <div className="nav-item-dark">Medium Blog</div>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/jtw_resume.pdf">
                  <div className="nav-item-dark">Resume</div>
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
