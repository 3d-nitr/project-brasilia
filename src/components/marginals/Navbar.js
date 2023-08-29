import { useState } from "react";
import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
//import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <img
            width="70px"
            src="/NIT_Rourkela_Colour_Logo.svg.png"
            alt="logo"
          ></img>
        </div>

        <div className={showMenu ? "menu-link mobile-menu" : "menu-link"}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#about-section">About</a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>

          <div className="hamburger-menu justify-center items-center">
            <button
              onClick={() => {
                setShowMenu((prev) => !prev);
                console.log(showMenu);
              }}
              className="text-3xl"
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
