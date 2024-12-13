// Import required libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div
        className={`navbar-links ${isMobile ? "mobile" : ""}`}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/companies" className="nav-item">
          Companies
        </Link>
        <Link to="/candidates" className="nav-item">
          Candidates
        </Link>
        <Link to="/assessment" className="nav-item">
          Assessment
        </Link>
        <Link to="/post-job" className="nav-item">
          Post a Job
        </Link>
        <Link to="/career-advice" className="nav-item">
          Career Advice
        </Link>
        <Link to="/sign-up" className="nav-item nav-signup">
          Sign Up
        </Link>
        <Link to="/login" className="nav-item nav-login">
          Log In
        </Link>
      </div>
      <div className="navbar-toggle" onClick={handleMenuToggle}>
        {isMobile ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </nav>
  );
};

export default Navbar;
