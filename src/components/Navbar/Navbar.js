import React from "react";
import "./Navbar.css";
import logo from "../../images/big-logo-png.jpeg";
function Navbar() {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services and Products</a>
          </li>
          <li>
            <a href="#">Customer Stories</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
