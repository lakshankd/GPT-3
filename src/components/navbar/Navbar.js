import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="container">
      <button className="nav-btn">Home</button>
      <button className="nav-btn">Skills</button>
      <button className="nav-btn">Projects</button>
      <button className="nav-btn">Education</button>
      <button className="nav-btn">Contact</button>
    </nav>
  );
}

export default Navbar;
