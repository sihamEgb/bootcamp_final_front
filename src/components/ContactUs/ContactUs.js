import React from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";

const ContactUs = (props) => {
  return (
    <div className='ui'>
      <div className='contact-us'>
        <h2>Get Latest Updates!</h2>
        <p>Start saving the planet and not losing your invoices</p>
        <Form>
          <input>Name</input>
          <input>Email</input>
          <button>Subscribe</button>
        </Form>
      </div>
      <div>
        <p>Copyright 2020 Siham Egbaria. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default ContactUs;
