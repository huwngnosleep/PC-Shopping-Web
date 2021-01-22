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
  NavbarText
} from 'reactstrap';

import { auth } from '../../firebase/firebase.utils'

import Cart from '../../components/Cart'
import SignInWithGoogle from '../../components/SignInWithGoogle'

const Header = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
    <Navbar className="fixed-top" color="light" light expand="md">
      <Cart />
      <NavbarBrand>HuwngNoSleep</NavbarBrand>
      <NavbarToggler onClick={toggle}/>
      <Collapse isOpen={isOpen}  navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavbarText>{`Hello ${currentUser ? currentUser.displayName : 'Guess'}!`}</NavbarText>
          </NavItem>
          <NavItem onClick={toggle}>
            <Link to="/"><NavbarText>Home</NavbarText></Link>
          </NavItem>
          <NavItem onClick={toggle}>
            <Link className="m-0 p-0" to={{pathname: "/products/", category: '', brand: ''}}>
              <NavbarText>Products</NavbarText>
            </Link>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Account
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                {
                  currentUser ? 
                    <Link><b onClick={() => auth.signOut()}>Sign out</b></Link> 
                    : 
                    <SignInWithGoogle />
                }
              </DropdownItem>
            </DropdownMenu>
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