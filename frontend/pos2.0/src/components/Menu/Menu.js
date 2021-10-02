/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Menu.css";
import {auth , provider}  from '../../firebase.js';

const Menu = () => {
  return (
    <div className="menu_container">
        <h3 className="sub-heading">Our Dishes</h3>
        <div className="menu-items">
          <div className="item">
            <img src="/images/menu-1.jpg" atl="food-item-img"/>
            <h3>Food Name</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
            <span className="price">$15.99</span>
            <Link className="btn">Add to cart</Link>
          </div>
          <div className="item">
            <img src="/images/menu-1.jpg" atl="food-item-img"/>
            <h3>Food Name</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
            <span className="price">$15.99</span>
            <Link className="btn">Add to cart</Link>
          </div>
          <div className="item">
            <img src="/images/menu-1.jpg" atl="food-item-img"/> 
            <h3>Food Name</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
            <span className="price">$15.99</span>
            <Link className="btn">Add to cart</Link>
          </div>
          <div className="item">
            <img src="/images/menu-1.jpg" atl="food-item-img"/>
            <h3>Food Name</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
            <span className="price">$15.99</span>
            <Link className="btn">Add to cart</Link>
          </div>
          <div className="item">
            <img src="/images/menu-1.jpg" atl="food-item-img"/>
            <h3>Food Name</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
            <span className="price">$15.99</span>
            <Link className="btn">Add to cart</Link>
          </div>
          <div className="item">
            <img src="/images/menu-1.jpg" atl="food-item-img"/>
            <h3>Food Name</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
            <span className="price">$15.99</span>
            <Link className="btn">Add to cart</Link>
          </div>
        </div>
    </div>
  );
};

export default Menu;