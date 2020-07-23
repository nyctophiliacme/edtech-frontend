import React, { Component } from "react";
import { login, getUserDetails } from "../../services/loginService";
import "./login.css";
import { notify } from "react-notify-toast";
import { messageService } from "../../services/notifyComponentService";
import { withRouter } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      errors: {
        email: "",
        password: "",
      },
    };
  }
  validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = this.validEmailRegex.test(value)
          ? ""
          : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm(this.state.errors)) {
      login(this.state.email, this.state.password)
        .then((response) => {
          sessionStorage.setItem("userToken", `Token ${response.data.key}`);
          getUserDetails(sessionStorage.getItem("userToken"))
            .then((response) => {
              sessionStorage.setItem("isLoggedIn", true);
              sessionStorage.setItem(
                "userDetails",
                JSON.stringify(response.data)
              );
              if (sessionStorage.getItem("targetUrl") === "practice") {
                this.props.history.push({
                  pathname: "/practice/ecat",
                });
              }else if( sessionStorage.getItem("targetUrl") && sessionStorage.getItem("targetUrl").indexOf('quiz')>-1){
                this.props.history.push(
                  {pathname: sessionStorage.getItem("targetUrl"),
                  state: JSON.parse(sessionStorage.getItem("targetUrlState"))
                });
              }
              else if (this.props.location?.pathname === "/") {
                this.props.redirect.push("/exam/ecat/home");
              }
              this.sendMessage("Logged In");
              this.props.handleModalClose();
            })
            .catch((error) => {
              sessionStorage.setItem("isLoggedIn", false);
              notify.show(
                <div className="notify-container">
                  Error in fetching your profile details.
                </div>,
                "error",
                8000
              );
            });
        })
        .catch((error) => {
          if (
            error.response.data.non_field_errors[0] ===
            "E-mail is not verified."
          ) {
            notify.show(
              <div className="notify-container">
                Your e-mail is not verified.
                <br />
                Verification e-mail sent to {this.state.email} &nbsp;. <br />
                You can login after e-mail is verified.
              </div>,
              "warning",
              8000
            );
          } else if (
            error.response.data.non_field_errors[0] ===
            "Unable to log in with provided credentials."
          ) {
            notify.show(
              <div className="notify-container">
                Login failed.Please provide correct e-mail and password.
              </div>,
              "error",
              8000
            );
          } else {
            notify.show(
              <div className="notify-container">
                Login failed. Please try again.
              </div>,
              "error",
              8000
            );
          }
        });
    } else {
      notify.show(
        <div className="notify-container">Please enter valid details.</div>,
        "error",
        8000
      );
    }
  };

  validateForm = (errors) => {
    let valid = true;
    if (this.state.email === null && this.state.password === null) {
      valid = false;
      this.setState({ errors: { email: "error", password: "error" } });
      Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    }

    return valid;
  };

  sendMessage(message) {
    messageService.sendMessage(message);
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-header"> LOGIN</div>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="login-form-container">
            <input
              className={
                this.state.errors.email.length > 0
                  ? "login-input error"
                  : "login-input"
              }
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={this.handleChange}
              noValidate
            />
            <input
              className={
                this.state.errors.password.length > 0
                  ? "login-input error"
                  : "login-input"
              }
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={this.handleChange}
              noValidate
            />
          </div>
          <div className="login-forgotpswd">Forgot password?</div>
          <input className="login-button" type="submit" value="LOGIN" />
        </form>
        <div className="login-footer">
          Don’t have a Superteacher account?&nbsp;
          <span
            className="login-signUp"
            onClick={() => {
              this.props.loadRegisterForm();
            }}
          >
            Sign up
          </span>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
