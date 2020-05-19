import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import down from "../../assets/images/dropdown.png";
import up from "../../assets/images/up-arrow.png"
import "./header.css";

const header = () => {
  return (
    <header className="logo-header">
      <div>
        <div className="headerlogo-wrapper">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="headerbutton-wrapper">
          <div className="header-cta header-practice">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeHcR1uoEa852yTnXGuu84Nu8cv9KwMODQ5ErW8i7i0Bgv73Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Practice
            </a>
          </div>
          <div className="header-cta header-login">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeHcR1uoEa852yTnXGuu84Nu8cv9KwMODQ5ErW8i7i0Bgv73Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Log in
            </a>
          </div>
        </div>
      </div>

      <div>
        <ul>
          <li class="header-dropdown">
            <a href="javascript:void(0)" class="dropbtn">
            Entry Tests
              <img className="dropdown-arrow" src={down} alt="downarrow"/>
              <img className="dropup-arrow" src={up} alt="uprrow"/>
            </a>
            <div className="dropdown-content ">
              <a href="#">ECAT</a>
              <a href="#">NET (NUST Entry Test)</a>


            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default header;
