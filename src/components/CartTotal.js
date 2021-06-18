import React from 'react';
import "./CartTotal.css";

function CartTotal(props) {
    const getTotalPrice = () => {
        let total = 0;
        props.items.forEach((item) => {
            total += (item.price * item.quantity);
        })
        return total;
    }
    return (
        <div className="Cart-total">
          <h3>Subtotal({props.items.length} items):
            <span className="CartTotalPrice">${getTotalPrice()}</span>
          </h3>
          <button>Proceed to checkout</button>
        </div>
    )
}

export default CartTotal;
