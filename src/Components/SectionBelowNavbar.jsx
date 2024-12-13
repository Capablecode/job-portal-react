import React from "react";
import hero from "../images/hero-image.png";
import paystack from "../images/paystack.png";
import google from "../images/google.png";
import kpmg from "../images/kpmg.png";
import "../Styles/SectionBelowNavbar.css";

const SectionBelowNavbar = () => {
  return (
    <div className="container">
      <div className="background"></div>
      <div className="content">
        <div className="text">
          <h1>
            Find a <span className="highlight-text">job</span> easily
          </h1>
          <p>
            With verified, up-to-date job listings directly from employer
            websites, we create a premium experience for job seekers, employers,
            and data seekers alike.
          </p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Enter keywords, skill, interest"
              className="first-input"
            />
            <input
              type="text"
              placeholder="Location"
              className="second-input"
            />
            <button>Search</button>
          </div>
          <div className="brands">
            <p className="trust-text">Trusted By</p>
            <div className="brand-logo">
              <img src={paystack} alt="Logo 1" className="paystack" />
              <img src={google} alt="Logo 2" className="google" />
              <img src={kpmg} alt="Logo 3" className="kmpg" />
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={hero} alt="Smiling person in a workplace" />
        </div>
      </div>
    </div>
  );
};
export default SectionBelowNavbar;
