import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import facebook from "../../assets/images/facebook.png";
import youtube from "../../assets/images/youtube.png";

const footer = () => {
  const scrollToTop=() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  return (
    <div className="footer-container">
      <div className="footer-container-left">
        <div className="footer-text" onClick={scrollToTop}>
          <Link to="/about_us">ABOUT US</Link>
        </div>
        <div className="footer-text" onClick={scrollToTop}>
          <Link to="/privacy_policy">PRIVACY POLICY</Link>
        </div>
        <div className="footer-text" onClick={scrollToTop}>
          <Link to="/term_condition">TERMS &amp; CONDITIONS</Link>
        </div>
      </div>
      <div className="footer-container-right">
        <div className="footer-contact" onClick={scrollToTop}>
        <Link to="/home">CONTACT US</Link>
        </div>
        <div className="footer-address">
          131 B, DHA Phase 1,
          <br />
          Lahore Cantt, Lahore
        </div>
        <div className="footer-icons">
          <a
            href="https://www.facebook.com/superteacher.pk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="facebook" src={facebook} alt="facebook" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC4lqvTvbFpuP-yu2PlohbEg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="youtube" src={youtube} alt="youtube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default footer;
