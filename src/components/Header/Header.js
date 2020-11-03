import React from "react";
import { Link } from "react-router-dom";
import app_settings from "../../app_settings";

import "./Header.css";

const Header = (props) => {
  return (
    <div className='header__navbar'>
      <Link className='header__navbar__logo' to='/'>
        {app_settings.get("app_name")}
      </Link>
      <nav className='header__navbar__items'>
        <Link className='header__navbar__items__item'>Home</Link>
        <Link className='header__navbar__items__item'>About us</Link>
        <Link className='header__navbar__items__item'>Contact us</Link>
      </nav>
    </div>
  );
};

export default Header;
