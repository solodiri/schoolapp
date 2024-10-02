import React from "react";
import { Link } from "react-router-dom";
import "./mobileMenu.css";

const MobileMenu1 = () => {
  return (
    <div className="mobileMenu">
      {/* <span className="times">x</span> */}
      <div>
        <ul className="mobile">
          <li className="mobile-list">
            <Link to="/">HOME</Link>
          </li>
          <li className="mobile-list">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="mobile-list">
            <Link to="/courses">COURSES</Link>
          </li>
          <li className="mobile-list">
            <Link to="/project">PROJECT</Link>
          </li>
          <li className="mobile-list">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu1;
