import React, { Component } from "react";
import { Link } from "react-router-dom";
import { notify } from "react-notify-toast";
import { signup } from "../../services/loginService";
import "./register.css";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      phoneNumber: null,
      password: null,
      confirmPassword: null,
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
        confirmPassword: "",
      },
    };
  }

  isDirty = false;
  validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  handleChange = (event) => {
    this.isDirty = true;
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "firstName":
        errors.firstName =
          value.length <= 0 ? "First Name must not be blank!" : "";
        break;
      case "lastName":
        errors.lastName =
          value.length <= 0 ? "Last Name must not be blank!" : "";
        break;
      case "email":
        errors.email = this.validEmailRegex.test(value)
          ? ""
          : "Email is not valid!";
        break;
      case "phoneNumber":
        errors.phoneNumber =
          value.length < 10
            ? "Phone Number must be greater than 10 digits long!"
            : "";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      case "confirmPassword":
        errors.confirmPassword =
          value !== this.state.password
            ? "Confirm Password must match Password!"
            : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm(this.state.errors)) {
      signup(this.state)
        .then((response) => {
          notify.show(
            <div className="notify-container">
              Verification e-mail sent to {this.state.email} &nbsp;. <br />
              You can login after e-mail is verified.
            </div>,
            "success",
            8000
          );
          this.props.handleModalClose();
        })
        .catch((error) => {
          if (
            error.response.data.email[0] ===
            "A user is already registered with this e-mail address."
          ) {
            notify.show(
              <div className="notify-container">
                A user is already registered with this e-mail address.
                <br />
                Please try diiferent e-mail.
              </div>,
              "error",
              5000
            );
          } else if (
            error.response.data.password1[0] === "This password is too common."
          ) {
            notify.show(
              <div className="notify-container">
                Password is too common .Please use the strong password.
              </div>,
              "error",
              5000
            );
          }
        });
    } else {
      notify.show(
        <div className="notify-container">Please enter valid data</div>,
        "error",
        3000
      );
    }
  };

  validateForm = (errors) => {
    let valid = true;
    if (
      this.state.email === null &&
      this.state.password === null &&
      this.state.email === null &&
      this.state.password === null &&
      this.state.email === null &&
      this.state.password === null
    ) {
      valid = false;
      this.setState({
        errors: {
          firstName: "error",
          lastName: "error",
          email: "error",
          password: "error",
          phoneNumber: "error",
          confirmPassword: "error",
        },
      });
      Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    }
    return valid;
  };

  render() {
    return (
      <div className="login-container register-container">
        <div className="login-header"> Create Account</div>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="login-form-container">
            <div className="login-input-container">
              <div className="login-input-header">
                  First Name
              </div>
              <input
                className={
                  this.state.errors.firstName.length > 0
                    ? "login-input error"
                    : "login-input"
                }
                type="text"
                name="firstName"
                required
                onChange={this.handleChange}
                noValidate
              />
            </div>

            <input
              className={
                this.state.errors.lastName.length > 0
                  ? "login-input error"
                  : "login-input"
              }
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              onChange={this.handleChange}
              noValidate
            />
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
                this.state.errors.phoneNumber.length > 0
                  ? "login-input error"
                  : "login-input"
              }
              type="number"
              name="phoneNumber"
              placeholder="Phone Number (without country code)"
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
            <input
              className={
                this.state.errors.confirmPassword.length > 0
                  ? "login-input error"
                  : "login-input"
              }
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              onChange={this.handleChange}
              noValidate
            />
          </div>
          <div className="signup-footer">
            By joining, you agree to the&nbsp;
            <span
              className="login-signUp"
              onClick={this.props.handleModalClose}
            >
              <Link to="/term_condition">Terms of Service</Link>
            </span>
            &nbsp;and&nbsp;
            <span
              className="login-signUp"
              onClick={this.props.handleModalClose}
            >
              <Link to="/privacy_policy">Privacy Policy.</Link>
            </span>
          </div>
          <input className="login-button" type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}
export default Register;
