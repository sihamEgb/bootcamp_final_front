import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <div className='header-container'>
      this is header
      {/* <Link className='header-logo header-nav-item' to='/'>
      
        Homepage
      </Link>
      <div className='header-nav'>
        <Link
          className='header-nav-item'
          to={{
            pathname: "/poses",
            state: { poses: props.poses },
          }}>
          All Poses
        </Link>
        <Link
          className='header-nav-item'
          to={{
            pathname: "/workouts",
            state: { poses: props.poses },
          }}>
          Workouts
        </Link> */}
      {/* </div> */}
    </div>
  );
};

export default Header;
