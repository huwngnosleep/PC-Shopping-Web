import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

import {Link} from 'react-router-dom'

import {CartContext} from '../contexts/CartContext'

const Cart = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <span id="TooltipExample">
        <Link to="/payment/">
          <ion-icon style={{minWidth: "30px"}} name="cart-outline"></ion-icon>
          <CartContext.Consumer>
            {({inCart}) => <b>{`Cart: ${inCart.length}`}</b>}
          </CartContext.Consumer>
        </Link>
      </span>
      <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
        <ul className="list-group">
          <CartContext.Consumer>
            {({inCart}) => inCart.map(
              (item, index) => <li>{`${index + 1} - ${item.name}`}</li>
            )}
          </CartContext.Consumer>
        </ul>
      </Tooltip>
    </div>
  )
}

export default Cart
