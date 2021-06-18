import React from 'react';
import "./CartItem.css";
function CartItem(props) {
    console.log(props.image);
    return (
        <div className="CartItem">
            <div className="CartItem-image">
                <img src={process.env.PUBLIC_URL + "/items/" + props.image} alt="" />
            </div>
            <div className="CartItem-info">
                <div className="info-title">
                    <h2>{props.title}</h2>
                </div>
                <div className="info-stock">
                    {props.stock}
                </div>
                <div className="item-actions">
                    <div className="item-quantity">
                    <select value={props.quantity}>
                        <option value="1">QTY:1</option>
                        <option value="2">QTY:2</option>
                        <option value="3">QTY:3</option>
                        <option value="4">QTY:4</option>
                    </select>
                    </div>
                    <div className="item-divider"> | </div>
                    <div className="item-delete">
                        Delete
                    </div>
                </div>
            </div>
            <div className="CartItem-price">
                ${props.price}
            </div>
        </div>
    )
}

export default CartItem
