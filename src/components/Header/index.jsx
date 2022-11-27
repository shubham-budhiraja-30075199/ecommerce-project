import React from "react";
import './index.css'

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="container">
          <nav className="navigate">
            <ul className="nav-list nav-list-mobile">
              <li className="nav-item">
                <div className="hamburger">
                  <span className="line line-top"></span>
                  <span className="line line-btm"></span>
                </div>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link nav-logo">
                  Logo
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link nav-cart">
                  <i class="fa-solid fa-bag-shopping"></i>
                </a>
              </li>
            </ul>
            <ul className="nav-list nav-list-large">
              <li className="nav-item nav-item-hidden">
                <a href="/" className="nav-link nav-logo">
                  Logo
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Feedback
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link nav-search">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link nav-cart">
                  <i class="fa-solid fa-bag-shopping"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
