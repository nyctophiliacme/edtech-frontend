import React, { Component } from "react";
import "./help.css";
import { help } from "../../services/helpService";
import { notify } from "react-notify-toast";

class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalName: "",
      modalEmailId: "",
      modalMessage: "",
    };
  }
  isGuestUser;
  submitHelp = () => {
    console.log(sessionStorage.getItem("isLoggedIn"));
    if (sessionStorage.getItem("isLoggedIn") === null) {
      this.isGuestUser = true;
    } else {
      this.isGuestUser = false;
    }
    help(
      this.isGuestUser,
      this.state.modalName,
      this.state.modalEmailId,
      this.state.modalMessage
    )
      .then((response) => {
        this.props.handleModalClose();
        notify.show(
          <div className="notify-container">
            Help request registered successfully.
          </div>,
          "success",
          4000
        );
      })
      .catch((error) => {
        this.props.handleModalClose();
        notify.show(
          <div className="notify-container">
            Unable to connect with server. Please try again later.
          </div>,
          "error",
          4000
        );
      });
  };

  handleChange = (stateVariable, e) => {
    this.setState({ [stateVariable]: e.target.value });
  };

  render() {
    return (
      <div className="help-modal">
        <div className="help-title">Super teacher help</div>
        <div className="help-description">
          Having trouble logging, registering or any other question related to
          the website. Enter a short desription of your question or issue.
          Typically, response will be one business day.
        </div>
        <form className="help-form">
          <label htmlFor="help-name">Name</label>
          <input
            id="help-name"
            type="text"
            value={this.state.modalName}
            onChange={(e) => this.handleChange("modalName", e)}
          />
          <label htmlFor="help-email">Email ID</label>
          <input
            id="help-email"
            type="text"
            value={this.state.modalEmailId}
            onChange={(e) => this.handleChange("modalEmailId", e)}
          />
          <label htmlFor="help-message">Message</label>
          <textarea
            id="help-message"
            rows="5"
            value={this.state.modalMessage}
            onChange={(e) => this.handleChange("modalMessage", e)}
          />
          <div className="help-submit" onClick={this.submitHelp}>
            Submit
          </div>
        </form>
      </div>
    );
  }
}

export default Help;
