import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = ({
  toggleStatus,
  setToggleStatus,
  toggleLogin,
  setToggleLogin,
  toggleFavorite,
  setToggleFavorite,
  showMobileMenu,
  setShowMobileMenu,
  size,
  handleSearch,
  search,
}) => {
  function handleToggleStatus() {
    setToggleStatus(!toggleStatus);
  }

  function handleToggleLogin() {
    setToggleLogin(!toggleLogin);
  }

  function handleTogglefavorite() {
    setToggleFavorite(!toggleFavorite);
  }
  function handleToggleMenu() {
    setShowMobileMenu(!showMobileMenu);
  }

  // console.log(search);
  return (
    <>
      <div className="nav">
        <div className="logo">
          <Link to="/">VOCSCHOOL </Link>
        </div>
        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            name="searchbar"
            onChange={handleSearch}
          />
          <button type="submit" className="search-btn">
            🔍
          </button>
        </div>
        <div>
          <ul className="menu">
            <li className="menu-list">
              <Link to="/">HOME</Link>
            </li>
            <li className="menu-list">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="menu-list">
              <Link to="/courses">COURSES</Link>
            </li>
            <li className="menu-list">
              <Link to="/project">PROJECT</Link>
            </li>
            <li className="menu-list">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="profile" onClick={handleToggleStatus}>
          🙅‍♂️
        </div>
        <div className="favarite-counter">
          <div className="favarite" onClick={handleTogglefavorite}>
            ❤
          </div>
          <div className="counter">{size}</div>
        </div>

        <div className="menu-Toggle" onClick={handleToggleMenu}>
          <span>=</span>
        </div>
      </div>
    </>
  );
};

export default NavBar;
