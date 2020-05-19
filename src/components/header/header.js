import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/modal";
import logo from "../../assets/images/logo.png";
import down from "../../assets/images/dropdown.png";
import up from "../../assets/images/up-arrow.png";
import "./header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    // console.log("Show modal value changed", showModal);
  }, [showModal]);
  return (
    <>
      <header className="logo-header">
        <div>
          <div className="headerlogo-wrapper">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="headerbutton-wrapper">
            <div className="header-cta header-practice">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Practice
              </a>
            </div>
            <div
              className="header-cta header-login"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Log in
            </div>
          </div>
        </div>
        <div>
          <ul>
            <li className="header-dropdown">
              <a href="javascript:void(0)" className="dropbtn">
                Entry Tests
                <img className="dropdown-arrow" src={down} alt="downarrow" />
                <img className="dropup-arrow" src={up} alt="uprrow" />
              </a>
              <div className="dropdown-content ">
                <a href="#">ECAT</a>
                <a href="#">NET (NUST Entry Test)</a>
              </div>
            </li>
          </ul>
        </div>
      </header>
      <Modal
        show={showModal}
        handleClose={() => {
          setShowModal(false);
        }}
      >
        <p>Modal</p>
        <p>Data</p>
      </Modal>
    </>
  );
};
export default Header;
