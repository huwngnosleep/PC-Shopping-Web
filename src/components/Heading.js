import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import Cart from './Cart'

const Heading = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="fixed-top" color="light" light expand="md">
        <NavbarBrand className="m-0">
          <Link to="/">HuwngNoSleep</Link>
        </NavbarBrand>
        <Link className="nav-link m-0 p-0" to={{pathname: "/products/", category: '', brand: ''}}>Products</Link>
        <Cart/>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Contact
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="https://www.facebook.com/huwngnosleep/">FaceBook</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="https://github.com/huwngnosleep">Github</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="https://github.com/huwngnosleep/PCShoppingWeb">This project on Github</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      {/* the navbar below is used as before pseudo class */}
      <Navbar color="light" light expand="md">
        <NavbarBrand className="m-0">
          <Link to="/">HuwngNoSleep</Link>
        </NavbarBrand>
        <Link className="nav-link m-0 p-0" to={{pathname: "/products/", category: '', brand: ''}}>Products</Link>
        <Cart/>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Contact
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="https://www.facebook.com/huwngnosleep/">FaceBook</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="https://github.com/huwngnosleep">Github</NavLink>
                </DropdownItem>
                
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Heading