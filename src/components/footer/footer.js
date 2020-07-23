import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import facebook from "../../assets/images/facebook.svg";
import youtube from "../../assets/images/youtube.svg";

const footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer-container">
      <div className="footer-column footer-first-column">
        <div className="column-header">Company</div>
        <div className="footer-text" onClick={scrollToTop}>
          <Link to="/about_us">About Us</Link>
        </div>
        <div className="footer-text" onClick={scrollToTop}>
          <Link to="/pricing">Contact Us</Link>
        </div>
        <div className="footer-text" onClick={scrollToTop}>
          <Link to="/privacy_policy">Privacy Policy</Link>
        </div>
        <div className="footer-text" onClick={scrollToTop}>
          <Link to="/term_condition">Terms &amp; Conditions</Link>
        </div>
      </div>
      <div className="footer-column footer-second-column">
        <div className="column-header">Account</div>
        <div className="footer-text" onClick={scrollToTop}>
          <Link to="/about_us">Pricing and Plans</Link>
        </div>
        <div className="footer-text" onClick={scrollToTop}>
          <Link to="/about_us">Login</Link>
        </div>
        <div className="footer-text" onClick={scrollToTop}>
          <Link to="/pricing">Forgot Password</Link>
        </div>
      </div>
      <div className="footer-column footer-third-column">
        <div className="column-header">Helpful Links</div>
        <div className="footer-text" onClick={scrollToTop}>
          <Link to="/about_us">How to pay</Link>
        </div>
        <div className="footer-text" onClick={scrollToTop}>
          <Link to="/pricing">FAQs</Link>
        </div>
        <div className="footer-text" onClick={scrollToTop}>
          <Link to="/privacy_policy">Blog</Link>
        </div>
        <div className="footer-text" onClick={scrollToTop}>
          <Link to="/term_condition">Help</Link>
        </div>
      </div>
      <div className="footer-column footer-container-right">
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
        <div className="footer-contact">
          <a
            href="mailto:info.superteacher@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            info.superteacher@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default footer;
