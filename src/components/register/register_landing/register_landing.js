import "./register_landing.css";
import React, { Component } from "react";
import register from "../../../assets/images/register.png";
import fb from "../../../assets/images/facebookNew.png";
import envelope from "../../../assets/images/envelope.png";
import "./register_landing.css";
class RegisterLanding extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="login-container register-container register-landing-contianer">
        <div className="login-header register-landing-header">
          {" "}
          Join Super Teacher for free
        </div>
        <img src={register} alt="" />
        <div className="continue-with-fb">
          <div className="continue-with-fb-text">
            <img src={fb} className="continue-with-fb-img" alt="" />
            Continue with Facebook
          </div>
        </div>
        <div className="continue-with-fb continue-with-email">
          <div className="continue-with-fb-text">
            <img src={envelope} className="continue-with-fb-img" alt="" />
            Sign up with Email
          </div>
        </div>
        <div className="register-footer">
        Already have an account? <span className="register-footer-highlight">Register</span>
        </div>
      </div>
    );
  }
}
export default RegisterLanding;
