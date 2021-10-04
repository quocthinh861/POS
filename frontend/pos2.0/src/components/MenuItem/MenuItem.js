import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeToCart} from '../../Slices/itemSlice'

function MenuItem() {

    const dispatch = useDispatch();    

    const item = {
        id: 2,
        quantity: 1,
        name: "FOODNAME",
        image: "/images/menu-1.jpg",
        price: 7.33,
    };

    return (
            <div className="item">
                <img src="/images/menu-1.jpg" atl="food-item-img"/>
                <h3>Food Name</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                <span className="price">$15.99</span>
                <button className="btn" onClick={() => dispatch(addToCart(item))}>Add to cart</button>
            </div>
    )
}

export default MenuItem
