import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';

function Header() {
  return (
    <>
      <div className="header">
        <div className="header__left">
          <img
            src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/04/logo-1-1-2-2.png"
            alt="logo"
          />
        </div>
        <div className="header__middle">
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="listings">Listings</Link>
            </li>
            <li>
              <Link to="activities">Activities</Link>
            </li>
            <li>
              <Link to="shop">Shop</Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="header__right">
            <ul>
              <li>
                <Link to="user"><FaUserCircle /></Link>
              </li>
              <li>
                <Link to="cart"><MdShoppingCart /></Link>
              </li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
