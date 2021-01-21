import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

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

import { auth } from '../../firebase/firebase.utils'

import Cart from '../../components/Cart'

const Header = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar className="fixed-top" color="light" light expand="md">
        <NavbarBrand className="m-0">
          <Link to="/">HuwngNoSleep</Link>
        </NavbarBrand>
        <Cart/>
        <b>{`Hello ${currentUser ? currentUser.displayName : 'Guess'}`}</b>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Link className="m-0 p-0" to={{pathname: "/products/", category: '', brand: ''}}>Products</Link>
            {
              currentUser ? 
                <Link><b onClick={() => auth.signOut()}>Sign out</b></Link> 
                : 
                <Link to="/signin/"><b>Sign In</b></Link>
            }
            <UncontrolledDropdown nav inNavbar>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(Header)