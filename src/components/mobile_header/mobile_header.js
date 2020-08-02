import React, { Component } from "react";
import logo from "../../assets/images/ST_logo.png";
import {
  faBars,
  faArrowLeft,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, withRouter } from "react-router-dom";
import "./mobile_header.css";
import { messageService } from "../../services/notifyComponentService";

library.add(faBars, faArrowLeft, faAngleDown, faAngleUp);

class MobileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      ShowEntryTestList: false,
      isLoggedIn: sessionStorage.getItem("isLoggedIn")
        ? sessionStorage.getItem("isLoggedIn")
        : false,
    };
  }
  componentDidMount() {
    this.subscription = messageService.getMessage().subscribe((message) => {
      if (message.text === "Logged In") {
        this.setState({
          isLoggedIn: sessionStorage.getItem("isLoggedIn"),
        });
      }
    });
  }
  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  };
  startPractice = () => {
    if (!sessionStorage.getItem("isLoggedIn")) {
      messageService.sendMessage("user trying to access without login");
      sessionStorage.setItem("targetUrl", "practice");
    } else {
      this.props.history.push({
        pathname: "/practice/ecat",
      });
    }
    this.toggleMenu();
  };

  render() {
    return (
      <>
        <div
          className={`mob-hdr-container ${
            this.props.isMobile ? "" : "hide-header"
          }`}
        >
          <div className="mob-hdr-menuIcon">
            <FontAwesomeIcon icon="bars" onClick={this.toggleMenu} />
          </div>
          <div className="mob-hdr-logo">
            <Link to="/">
              <img className="img-logo" src={logo} alt="logo" />
            </Link>
          </div>
          <>
            {sessionStorage.getItem("userDetails") ? (
              <div className="mbl-hdr-user-name">
                {JSON.parse(
                  sessionStorage.getItem("userDetails")
                ).first_name.charAt(0) +
                  JSON.parse(
                    sessionStorage.getItem("userDetails")
                  ).last_name.charAt(0)}
              </div>
            ) : (
              ""
            )}
          </>
        </div>
        <div
          className={`side-panel ${
            this.state.showMenu ? "side-panel-show" : ""
          }`}
        >
          <div className="mbl-hdr-back-arrow" onClick={this.toggleMenu}>
            <FontAwesomeIcon icon="arrow-left" />
          </div>
          <Link to="/">
            <div className="mbl-hdr-menu-item" onClick={this.toggleMenu}>
              Home
            </div>
          </Link>
          <Link to="/courses/1">
            <div className="mbl-hdr-menu-item" onClick={this.toggleMenu}>
              Courses
            </div>
          </Link>
          <div
            className="mbl-hdr-menu-item"
            onClick={() => {
              this.setState({
                ShowEntryTestList: !this.state.ShowEntryTestList,
              });
            }}
          >
            Entry Tests
            <FontAwesomeIcon
              className="mbl-hdr-menu-item-arrow"
              icon={this.state.ShowEntryTestList ? "angle-up" : "angle-down"}
            />
          </div>
          {this.state.ShowEntryTestList ? (
            <Link to="/exam/ecat/1">
              <div
                className="mbl-hdr-menu-item mbl-hdr-sub-item"
                onClick={this.toggleMenu}
              >
                ECAT
              </div>
            </Link>
          ) : (
            ""
          )}
          {!this.state.isLoggedIn ? (
            <>
              <div
                className="mbl-hdr-menu-item "
                onClick={() => {
                  messageService.sendMessage("v2 RegiterButton clicked");
                  this.setState({ showMenu: !this.state.showMenu });
                }}
              >
                Register
              </div>
              <div
                className="mbl-hdr-menu-item last-item"
                onClick={() => {
                  messageService.sendMessage("login Clicked");
                  this.setState({ showMenu: !this.state.showMenu });
                }}
              >
                Login
              </div>
            </>
          ) : (
            <div
              className="mbl-hdr-menu-item last-item"
              onClick={() => {
                messageService.sendMessage(
                  "user trying to access locked chapter"
                );
                this.setState({ showMenu: !this.state.showMenu });
              }}
            >
              Upgrade
            </div>
          )}
        </div>
      </>
    );
  }
}
export default withRouter(MobileHeader);
