import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 110) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <div className={isScrolled ? 'scrolled-header' : 'header'}>
        <div className="header__left scrolled-header__left">
          <img className="first-logo"
            src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/04/logo-1-1-2-2.png"
            alt="logo"
          />
          <img className="second-logo"
            src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/04/logo-grey-1-1-2-2.png"
            alt="logo" />
        </div>
        <div className="header__middle scrolled-header__middle">
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
        <div className="header__right scrolled-header__right">
          <ul>
            <li>
              <Link to="login"><FaUserCircle /></Link>
            </li>
            <li>
              <Link to="cart"><MdShoppingCart /></Link>
            </li>
          </ul>
        </div>
        <div className="header__hamburger scrolled-header__hamburger">
          <RxHamburgerMenu className="hamburger" />
        </div>
      </div>
    </>
  );
}

export default Header;
