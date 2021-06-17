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

                </div>
                <div className="item-actions">
                    <div className="item-quantity">

                    </div>
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
