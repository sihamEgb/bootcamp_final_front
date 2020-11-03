import React from "react";
import { Link } from "react-router-dom";
import app_settings from "../../app_settings";

import "./Homepage.css";

const Homepage = (props) => {
  return (
    <div className='homepage__container'>
      <div className='homepage__container__left'>
        <div className='homepage_container__left__title'>
          {app_settings.get("app_homepage_title")}
        </div>
        <div className='homepage_container__left__content'>
          {app_settings.get("app_homepage_content")}
        </div>
        <div className='homepage_container__left__action'>
          {app_settings.get("app_homepage_action")}
        </div>
      </div>
      <div className='homepage__container__right'></div>
    </div>
  );
};

export default Homepage;
