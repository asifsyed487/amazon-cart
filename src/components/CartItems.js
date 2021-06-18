import React from 'react';
import "./CartItems.css";
import CartItem from "./CartItem";

function CartItems(props) {
    return (
        <div className="CartItems">
          <h1>Shopping Cart</h1>
          <hr />
          <div className="CartItems-item">
          {props.items.map((item) => {
            return (<CartItem 
              image={item.image}
              price={item.price}
              quantity={item.quantity}
              stock={item.stock}
              title={item.title}
            />);
          })}
          </div>
        </div>
    )
}

export default CartItems;
