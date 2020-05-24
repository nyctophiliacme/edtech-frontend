import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStore } from "@spyna/react-store";
import { messageService } from "../../services/notifyComponentService";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../modal/modal";
import logo from "../../assets/images/logo.png";
import down from "../../assets/images/dropdown.png";
import up from "../../assets/images/up-arrow.png";
import "./header.css";
import { faUserCircle, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(faUserCircle, faCoffee);

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalType: "login",
      isLoggedIn: sessionStorage.getItem("isLoggedIn")
        ? sessionStorage.getItem("isLoggedIn")
        : false,
      userName: sessionStorage.getItem("userDetails")
        ? JSON.parse(sessionStorage.getItem("userDetails")).first_name
        : "",
    };
  }

  componentDidMount() {
    this.subscription = messageService.getMessage().subscribe((message) => {
      console.log(message);
      if (message.text === "Logged In") {
        this.setState({
          isLoggedIn: sessionStorage.getItem("isLoggedIn"),
          userName: JSON.parse(sessionStorage.getItem("userDetails"))
            .first_name,
        });
      } else if (message.text === "v2 RegiterButton clicked") {
        this.setState({
          modalType: "register",
          showModal: true,
        });
      }else if(message.text==="user trying to access without login"){
        this.setState({
          modalType: "login",
          showModal: true,
        });
      }else if(message.text==="user trying to access locked chapter"){
        this.setState({
          modalType: "upgrade",
          showModal: true,
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
              <Link to="/practice/ecat">
                <div className="header-cta header-practice">
                    Practice
                </div>
              </Link>
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
                <div className="header-usee-detail ">
                  <FontAwesomeIcon icon="user-circle" />
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
            this.setState({ showModal: false, modalType: "login" });
          }}
          type={this.state.modalType}
        ></Modal>
      </>
    );
  }
}
export default withStore(Header);
