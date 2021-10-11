import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuList } from "./MenuList";
import "./Header.css";
import Badge from '@mui/material/Badge';

import { useSelector, useDispatch } from 'react-redux';

const Header = () => {

  const user = useSelector(state => state.user);
  const [clicked, setClicked] = useState(false);
  const cart = useSelector(state => state.item);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <div className="logo">
        SE<font>&#160;Ordering Food System</font>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>
        {
          user.name && <li>Hi, {user.name}</li>
        }
        <li>
          <NavLink exact to='/admin' activeClassName="active">
            Admin
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/menu' activeClassName="active">
            Menu
          </NavLink>
        </li>
        <Badge badgeContent={cart.numberCart} color="primary">
          <li>
            <NavLink exact to='/cart' activeClassName="active">
              Cart
            </NavLink>
          </li>
        </Badge>
        {
          user.name ? (
            <li>
              <NavLink exact to='/signin' activeClassName="active">
                Logout
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink exact to='/signin' activeClassName="active">
                Sign In
              </NavLink>
            </li>
          )
        }
      </ul>
    </nav>
  );
};

export default Header;