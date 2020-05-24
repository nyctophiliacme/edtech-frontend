import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStore } from "@spyna/react-store";

import Modal from "../modal/modal";
import logo from "../../assets/images/logo.png";
import down from "../../assets/images/dropdown.png";
import up from "../../assets/images/up-arrow.png";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  componentDidMount() {
    console.log(this.props.store.getState());
  }

  render() {
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
                  this.setState({ showModal: true });
                }}
              >
                Log in
              </div>
            </div>
          </div>
          <div>
            <ul className="header-ul">
              <li className="header-dropdown">
                <a href="#" className="dropbtn">
                  Entry Tests
                  <img className="dropdown-arrow" src={down} alt="downarrow" />
                  <img className="dropup-arrow" src={up} alt="uprrow" />
                </a>
                <div className="dropdown-content ">
                  <Link to="/exam/ecat/home">ECAT</Link>
                  <Link to="/exam/net">NET (NUST Entry Test)</Link>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <Modal
          show={this.state.showModal}
          handleClose={() => {
            this.setState({ showModal: false });
          }}
        ></Modal>
      </>
    );
  }
}
export default withStore(Header);
