import React, { useState } from "react";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logoUI from './logoUI.jpg'

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
    <div>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
            <figure><img src={logoUI} alt="#"/></figure>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <a to="/">Service</a>
            </li>
            <li>
              <a to="/">Product</a>
            </li>
            <li>
              <a to="/">Technology</a>
            </li>
            <li>
              <a to="/">About</a>
            </li>
            <li>
              <a to="/">Client</a>
            </li>
            <li>
              <a to="/">Partner</a>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="#"
                target="">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
      </div>
    </>
  );
};

export default Navbar;