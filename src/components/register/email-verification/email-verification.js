import React, { Component } from "react";
import mail from "../../../assets/images/mailConfirmation.png";

import { Left } from "react-bootstrap/lib/Media";
class EmailVerificatio extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="login-container register-container register-landing-contianer">

        <img src={mail} alt="" />
        <div className="login-header register-landing-header" style={{textAlign:Left}}>
          Almost there
        </div>
        <div className="continue-with-fb">
          <div className="continue-with-fb-text">
          You are one click away from being registered. You need to confirm your email.
          <br/>
            Please check your email and click on the confirmation link
          </div>
        </div>
        <div className="continue-with-fb continue-with-email">
          <div className="continue-with-fb-text">
            Sign up with Email
          </div>
        </div>
      </div>
    );
  }
}
export default EmailVerificatio;
