import React from "react";
import "./login.css";

const Login = ({handleRegister}) => {
  return (
    <div className="login-container">
      <div className="login-header"> Log In</div>
      <form>
        <div className="login-form-container">
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
        </div>
        <div className="login-forgotpswd">Forgot password?</div>
        <div className="login-button" type="submit">
          Log In
        </div>
      </form>
      <div className="login-footer">
        Don’t have a Superteacher account?<span className="login-signUp" onClick={handleRegister}>
        Sign up
        </span>
      </div>
    </div>
  );
};
export default Login;
