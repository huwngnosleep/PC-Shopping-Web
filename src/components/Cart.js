import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

import {Link} from 'react-router-dom'

import {CartContext} from '../contexts/CartContext'

const Cart = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <a className="m-0">
      <span id="TooltipExample">
        <Link to="/payment/">
          <ion-icon name="cart-outline"></ion-icon>
          <CartContext.Consumer>
            {({inCart}) => <b>{`Cart: ${inCart.length}`}</b>}
          </CartContext.Consumer>
        </Link>
      </span>
      <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
        <ul className="list-group">
          <CartContext.Consumer>
            {({inCart}) => inCart.length ? inCart.map(
              (item, index) => <li>{`${index + 1} - ${item.name}`}</li>
            ) : <b>No items in cart yet!</b>} 
          </CartContext.Consumer>
        </ul>
      </Tooltip>
      
    </a>
  )
}

export default Cart
