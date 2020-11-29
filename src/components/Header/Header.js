import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <div className='ui nav'>
      <Link to='/'>Invoice Digitization</Link>
      <Link>About us</Link>
      <Link>Services</Link>
      <Link>Contact us</Link>
    </div>
  );
};

export default Header;
