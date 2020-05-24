import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStore } from "@spyna/react-store";
import { messageService } from "../../services/notifyComponentService";

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
      isLoggedIn: sessionStorage.getItem("isLoggedIn")?sessionStorage.getItem("isLoggedIn"):false,
      userName: sessionStorage.getItem("userDetails")?JSON.parse(sessionStorage.getItem("userDetails")).first_name:""
    };
  }

  componentDidMount() {
    this.subscription = messageService.getMessage().subscribe((message) => {
      if (message.text === "Logged In") {
        this.setState({
          isLoggedIn: sessionStorage.getItem("isLoggedIn"),
          userName: JSON.parse(sessionStorage.getItem("userDetails"))
            .first_name,
        });
      }
    });
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
              {!this.state.isLoggedIn ? (
                <div
                  className="header-cta header-login"
                  onClick={() => {
                    this.setState({ showModal: true });
                  }}
                >
                  Log in
                </div>
              ) : (
                <div
                  className="header-cta header-login"
                  onClick={() => {
                    this.setState({ showModal: true });
                  }}
                >
                  {this.state.userName}
                </div>
              )}
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
                  <Link to="/exam/ecat">ECAT</Link>
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
