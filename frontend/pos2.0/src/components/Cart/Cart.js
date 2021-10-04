import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Cart.css";
import Item from '../CartItem/Item';
import { useSelector, useDispatch } from 'react-redux';
const Cart = () => {
    const cart = useSelector(state => state.item);
    return (
        <div className="cart_container">
            {
                cart.numberCart > 0 ? (
                    <div>
                        <h1>Your cart ({cart.numberCart})</h1>
                        <div>
                        {
                            cart.Carts.map((item) => (
                                <Item value={item} id={item.id}></Item>    
                            ))
                        }
                        </div>
                        <div className="total">
                            Subtotal ({cart.numberCart} items): <b>${cart.Carts.reduce((a, b) => a + b.quantity * b.price, 0).toFixed(2)}</b>
                            <button className="payment">PAYMENT</button>
                        </div>
                    </div>
                ) : <h2>Your cart is empty</h2>
            }
        </div>
    );
};

export default Cart;