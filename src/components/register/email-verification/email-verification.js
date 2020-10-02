import React, { Component } from "react";
import mail from "../../../assets/images/mailConfirmation.png";
import "./email-verification.css";
import { Left } from "react-bootstrap/lib/Media";
class EmailVerificatio extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="login-container register-container register-landing-contianer">
        <img src={mail} alt="" />
        <div className="email-verification-header" style={{ textAlign: Left }}>
          Almost there!
        </div>
        <div className="email-verification-text" style={{ textAlign: Left }}>
          You are one click away from being registered. You need to confirm your
          email.
          <span  style={{ fontSize: 11 }}>
          <br />
          <br />
          </span>
          Please check your email and click on the confirmation link
        </div>
        <div className="email-verification-button" onClick={this.props.handleModalClose}>Okay, Got it</div>
      </div>
    );
  }
}
export default EmailVerificatio;
