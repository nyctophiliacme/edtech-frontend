import React, { Component } from "react";
import { login } from "../../services/loginService";
import "./login.css";

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
      // console.info("Valid Form");
      login(this.state.email, this.state.password).then((response) => {
        sessionStorage.setItem("userToken", `Token${response.data.key}`);
      });
    } else {
      // console.error("Invalid Form");
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
export default Login;
