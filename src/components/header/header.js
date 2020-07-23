import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { messageService } from "../../services/notifyComponentService";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../modal/modal";
import logo from "../../assets/images/ST_logo.png";
import "./header.css";
import { faUserCircle, faAngleDown } from "@fortawesome/free-solid-svg-icons";

library.add(faUserCircle, faAngleDown);

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
      firstText: (
        <div
          className="header-cta header-practice"
          onClick={() => {
            this.setState({
              modalType: "register",
              showModal: true,
            });
          }}
        >
          Register
        </div>
      ),
    };
  }
  // startPractice = () => {
  //   // if (!sessionStorage.getItem("isLoggedIn")) {
  //   //   this.setState({ modalType: "login", showModal: true });
  //   //   sessionStorage.setItem("targetUrl", "practice");
  //   // } else {
  //   //   this.props.history.push({
  //   //     pathname: "/practice/ecat",
  //   //   });
  //   // }
  // };
  checkUpgradePractice = () => {
    if (sessionStorage.getItem("isLoggedIn")) {
      this.setState({
        firstText: (
          <div
            className="header-cta header-practice"
            onClick={() => {
              this.setState({
                modalType: "register",
                showModal: true,
              });
            }}
          >
            Register
          </div>
        ),
      });
    }
    // else if (
    //   this.props.location.pathname.split("/")[1] === "" ||
    //   this.props.location.pathname.split("/")[1] === "exam" ||
    //   this.props.location.pathname.split("/")[1] === "pricing"
    // ) {

    // }
    else {
      this.setState({
        firstText: (
          <div
            className="header-cta header-practice"
            onClick={() => {
              this.setState({ modalType: "upgrade", showModal: true });
            }}
          >
            Upgrade
          </div>
        ),
      });
    }
  };

  componentDidMount() {
    this.subscription = messageService.getMessage().subscribe((message) => {
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
      } else if (
        message.text === "user trying to access without login" ||
        message.text === "login Clicked"
      ) {
        this.setState({
          modalType: "login",
          showModal: true,
        });
      } else if (message.text === "user trying to access locked chapter") {
        this.setState({
          modalType: "upgrade",
          showModal: true,
        });
      } else if (message.text === "verified successful login now") {
        this.setState({
          modalType: "login",
          showModal: true,
        });
      }
    });
    this.checkUpgradePractice();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname !== prevProps.location.pathname ||
      this.props.isMobile !== prevProps.isMobile
    ) {
      this.checkUpgradePractice();
    }
  }

  render() {
    return (
      <>
        <header
          className={`logo-header ${this.props.isMobile ? "hide-header" : ""}`}
        >
          <div className="logo-cta-container">
            <div className="headerlogo-wrapper">
              <Link to="/">
                <img className="img-logo" src={logo} alt="logo" />
              </Link>
            </div>
            <div className="headerbutton-wrapper">
              {/* {this.state.firstText} */}
              {!this.state.isLoggedIn ? (
                <>
                  <div
                    className="header-cta header-practice"
                    onClick={() => {
                      this.setState({
                        modalType: "register",
                        showModal: true,
                      });
                    }}
                  >
                    Register
                  </div>
                  <div
                    className="header-cta header-login"
                    onClick={() => {
                      this.setState({ showModal: true });
                    }}
                  >
                    Login
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="header-cta header-practice"
                    onClick={() => {
                      this.setState({ modalType: "upgrade", showModal: true });
                    }}
                  >
                    Upgrade
                  </div>
                  <div className="header-usee-detail">
                    <FontAwesomeIcon icon="user-circle" size="lg" />
                    &nbsp;
                    {this.state.userName}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="header-menu">
            <Link className="header-menu-item" to="/courses/1">
              Courses
            </Link>
            <div className="header-menu-item dropdown-menu-item">
              <span>
                Exams{" "}
                <FontAwesomeIcon className="dropdown-arrow" icon="angle-down" />
              </span>
              <div className="dropdown-content">
                <Link to="/exam/ecat/home">ECAT</Link>
                {/* <Link to="#">NET</Link>
                <Link to="#">ITU</Link> */}
              </div>
            </div>
            <Link to="/videos" className="header-menu-item">
              Videos
            </Link>
            <Link to="/career_center" className="header-menu-item">
              Career Center
            </Link>
            <Link to="/resources" className="header-menu-item">
              Resources
            </Link>
            <Link to="/blog" className="header-menu-item">
              Blog
            </Link>
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
