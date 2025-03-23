import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import '../styles/index.css'
import '../styles/reset1.css'
import '../styles/variables.css'


function Header(){
    console.log("Header render")
    return(
        <header className="header">
        <img className="header__logo" src="/icons/logo.svg" alt="" />
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to={"/"} className="nav__link">Home</Link>
            </li>
            <li className="nav__item">
              <a className="nav__link">About Us</a>
            </li>
            <li className="nav__item">
              <Link to={"/cities"} className="nav__link">Popular Destinations</Link>
            </li>
            <li className="nav__item">
              <a className="nav__link">Our Packages</a>
            </li>
            <li className="nav__item">
              <a className="nav__link">Help</a>
            </li>
          </ul>
          <button className="nav__button">Sign In</button>
        </nav>
      </header>
    );
}

export default Header;