import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

import {CartContext} from '../contexts/CartContext'

export default Cart = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <span id="TooltipExample">
        <ion-icon style={{minWidth: "30px"}} name="cart-outline"></ion-icon>
        <CartContext.Consumer>
          {({inCart}) => <b>{`Cart: ${inCart.length}`}</b>}
        </CartContext.Consumer>
      </span>
      <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
        <CartContext.Consumer>
          {({inCart}) => <b>{`Cart: ${inCart.length}`}</b>}
        </CartContext.Consumer>
      </Tooltip>
    </div>
  )
}
