import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
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
        firstText:"Practice"
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
      } else if (message.text === "user trying to access without login") {
        this.setState({
          modalType: "login",
          showModal: true,
        });
      } else if (message.text === "user trying to access locked chapter") {
        this.setState({
          modalType: "upgrade",
          showModal: true,
        });
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      if (
        this.props.location.pathname.split("/")[1] === "" ||
        this.props.location.pathname.split("/")[1] === "exam" ||
        this.props.location.pathname.split("/")[1] === "home"
      ) {
        this.setState({firstText :"Practice"});
      } else {
        this.setState({firstText :"Upgrade"});
      }
    }
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
                  {this.state.firstText}
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
                <div className="header-usee-detail">
                  <FontAwesomeIcon icon="user-circle" size="lg" />
                  &nbsp;
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
export default withRouter((props) => <Header {...props} />);
