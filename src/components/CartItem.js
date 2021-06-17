import React from 'react';
import "./CartItem.css";
function CartItem() {
    return (
        <div className="CartItem">
            <div className="CartItem-image">
                <img src="https://www.gizmochina.com/wp-content/uploads/2018/10/Apple-iPad-Pro-11-2018-600x576.jpg" alt="" />
            </div>
            <div className="CartItem-info">
                <div className="info-title">
                    <h2>Apple IPad Pro</h2>
                </div>
                <div className="info-stock">
                    In Stock
                </div>
                <div className="item-actions">
                    <div className="item-quantity">
                    <select>
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
                $769.00
            </div>
        </div>
    )
}

export default CartItem
