import React from 'react';
import "./CartTotal.css";

function CartTotal() {
    return (
        <div className="Cart-total">
          <h3>Subtotal(5 items):
            <span className="CartTotalPrice">$2172.38</span>
          </h3>
          <button>Proceed to checkout</button>
        </div>
    )
}

export default CartTotal;
