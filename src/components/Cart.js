import React, { useState } from 'react';

import {Link} from 'react-router-dom'

import { Tooltip } from 'reactstrap';

import { connect } from 'react-redux'

const Cart = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  const { cartItems } = props
  return (
    <a>
      <span id="TooltipExample">
        <Link style={styles.wrapper} to="/payment/">
          <ion-icon style={styles.icon} name="cart-outline"></ion-icon>
          <b>{`Cart: ${cartItems.length}`}</b>
        </Link>
      </span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
        <ul className="list-group">
          { 
            cartItems.length ? cartItems.map(
              (item, index) => <li>{`${index + 1} - ${item.name}`}</li>
            ) 
            : 
            <b>No items in cart yet!</b>
          } 
        </ul>
      </Tooltip>
    </a>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    height: '1.5rem',
    width: '1.5rem',
    margin: '0 2px',
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems
  }
}

export default connect(mapStateToProps)(Cart)
