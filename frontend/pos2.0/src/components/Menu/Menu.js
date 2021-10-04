/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MenuItem from "../MenuItem/MenuItem";
import "./Menu.css";
import {auth , provider}  from '../../firebase.js';

const Menu = () => {
  return (
    <div className="menu_container">
        <h3 className="sub-heading">Our Dishes</h3>
        <div className="menu-items">
          {
            [...new Array(4)].map(() => (
              <MenuItem />
            ))
          }          
        </div>
    </div>
  );
};

export default Menu;