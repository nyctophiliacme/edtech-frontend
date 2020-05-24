import React, { Component } from "react";
import { login, getUserDetails } from "../../services/loginService";
import "./login.css";
import { notify } from "react-notify-toast";
import { withStore } from "@spyna/react-store";
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
          this.props.store.set("userToken", `Token ${response.data.key}`);
          getUserDetails(this.props.store.get("userToken"))
            .then((response) => {
              this.props.store.set("isLoggedIn", true);
              this.props.store.set("userDetails", response.data);
              this.props.redirect.push("/exam/ecat");
              this.props.handleParentClose();
            })
            .catch((error) => {
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
          } else{
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
      Object.values(errors).forEach(
        // if we have an error string set valid to false
        (val) => val.length > 0 && (valid = false)
      );
    }

    return valid;
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-header"> Log In</div>
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
          <input className="login-button" type="submit" value="Log In" />
        </form>
        <div className="login-footer">
          Don’t have a Superteacher account?&nbsp;
          <span
            className="login-signUp"
            onClick={() => {
              this.props.handleRegister();
            }}
          >
            Sign up
          </span>
        </div>
      </div>
    );
  }
}
export default withStore(Login);
