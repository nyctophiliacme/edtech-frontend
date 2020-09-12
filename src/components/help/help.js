import React, { Component } from "react";
import "./help.css";
import { help } from "../../services/helpService";
import { notify } from "react-notify-toast";

class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalName:sessionStorage.getItem("userDetails")
      ? JSON.parse(sessionStorage.getItem("userDetails")).first_name
      : "",
      modalEmailId:sessionStorage.getItem("userDetails")
      ? JSON.parse(sessionStorage.getItem("userDetails")).email
      : "",
      modalMessage: "",
      validForm: false,
      errors: {
        name: "",
        email: "",
        message: "",
      },
      isGuestUser:!JSON.parse(sessionStorage.getItem("isLoggedIn")),
    };
  }
  
  
  submitHelp = () => {
    help(
      this.state.isGuestUser,
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

  validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  fieldValidator = (target) => {
    if (target.id === "help-name") {
      target.value.length > 0
        ? this.setState({ errors: { ...this.state.errors, name: "" } })
        : this.setState({
            errors: { ...this.state.errors, name: "Please enter name." },
          });
    } else if (target.id === "help-email") {
      this.validEmailRegex.test(target.value)
        ? this.setState({
            errors: { ...this.state.errors, email: "" },
          })
        : this.setState({
            errors: {
              ...this.state.errors,
              email: "Please enter valid email address.",
            },
          });
    } else {
      target.value.length > 10
        ? this.setState({
            errors: { ...this.state.errors, message: "" },
          })
        : this.setState({
            errors: {
              ...this.state.errors,
              message: "Please enter a valid message.",
            },
          });
    }
    console.log(this.state.errors);
  };

  handleChange = (stateVariable, e) => {
    this.setState(
      { [stateVariable]: e.target.value },
      this.fieldValidator(e.target)
    );
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
            disabled={!this.state.isGuestUser}
            value={this.state.modalName}
            onChange={(e) => this.handleChange("modalName", e)}
          />
          <label htmlFor="help-email">Email ID</label>
          <input
            id="help-email"
            type="text"
            disabled={!this.state.isGuestUser}
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
