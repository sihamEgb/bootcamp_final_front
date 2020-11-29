import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div className='ui nav'>
      <div className='footer__social'>
        <i>instagram</i>
        <i>facebook</i>
        <i>youtube</i>
        <i>twitter</i>
      </div>
      <div>
        <p>Copyright 2020 Siham Egbaria. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
