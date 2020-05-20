import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

const Register = ({handleParentClose}) => {
  return (
    <div className="login-container">
      <div className="login-header"> Create Account</div>
      <form>
        <div className="login-form-container">
          <input
            className="login-input"
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
          <input
            className="login-input"
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
          />
          <input
            className="login-input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <input
            className="login-input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="signup-footer">
          By joining, you agree to the
          <span className="login-signUp" onClick={handleParentClose}>
            <Link to="/term_condition">Terms of Service</Link>
          </span>
          and
          <span className="login-signUp" onClick={handleParentClose}>
            <Link to="/privacy_policy" >Privacy Policy.</Link>
          </span>
        </div>
        <div className="login-button" type="submit">
        Sign Up
        </div>
      </form>
    </div>
  );
};
export default Register;
