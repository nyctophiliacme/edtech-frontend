import React, { Component } from "react";
import "./register.css";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null,
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
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
      case "firstName":
        errors.firstName =
          value.length < 5 ? "Full Name must be 5 characters long!" : "";
        break;
      case "lastName":
        errors.lastName =
          value.length < 5 ? "Full Name must be 5 characters long!" : "";
        break;
      case "email":
        errors.email = this.validEmailRegex.test(value)
          ? ""
          : "Email is not valid!";
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

    this.setState({ errors, [name]: value }, () => {
      // console.log(errors);
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };

  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-header"> Create Account</div>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="login-form-container">
            <input
              className={
                this.state.errors.firstName.length > 0
                  ? "login-input error"
                  : "login-input"
              }
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              onChange={this.handleChange}
              noValidate
            />
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
              onClick={this.props.handleParentClose}
            >
              <Link to="/term_condition">Terms of Service</Link>
            </span>
            &nbsp;and&nbsp;
            <span
              className="login-signUp"
              onClick={this.props.handleParentClose}
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
