import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Cart.css";

const Cart = () => {

  return (
    <div className="cart_container">
      <h1>Your cart (1)</h1>
      <div>
            <div className="item">
                <img src="/images/menu-1.jpg" atl="food-item-img"/>
                <div>
                    <span>FOODNAME</span>
                    <div className="qty">
                        <span className="minor">-</span><span> 1 </span><span className="add">+</span>
                    </div>
                </div>
                <span className="price">$15.99</span>
            </div>
            <div className="item">
                <img src="/images/menu-1.jpg" atl="food-item-img"/>
                <div>
                    <span>FOODNAME</span>
                    <div className="qty">
                        <span className="minor">-</span><span> 1 </span><span className="add">+</span>
                    </div>
                </div>
                <span className="price">$15.99</span>
            </div>
            <div className="item">
                <img src="/images/menu-1.jpg" atl="food-item-img"/>
                <div>
                    <span>FOODNAME</span>
                    <div className="qty">
                        <span className="minor">-</span><span> 1 </span><span className="add">+</span>
                    </div>
                </div>
                <span className="price">$15.99</span>
            </div>
            <div className="item">
                <img src="/images/menu-1.jpg" atl="food-item-img"/>
                <div>
                    <span>FOODNAME</span>
                    <div className="qty">
                        <span className="minor">-</span><span> 1 </span><span className="add">+</span>
                    </div>
                </div>
                <span className="price">$15.99</span>
            </div>
        </div>
        <div className="total">
            Subtotal (4 items): <b>$51.15</b>
        </div>
    </div>
  );
};

export default Cart;