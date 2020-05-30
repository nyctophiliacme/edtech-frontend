import React from "react";
import "./email-verified.css";
import { messageService } from "../../services/notifyComponentService";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faCheckCircle);

const EmailVerified = () => {
  return (
    <div className="verified-container">
      <FontAwesomeIcon icon="check-circle" className="verified-icon   " />
      <br />
      <span className="verified-heading"> Congratulation!</span>
      <br />
      <br />
      <span> Your account is successfully verified.</span>
      <br />
      <br />
      <span> You can login now and start studying.</span>
      <br />
      <br />
      <input
        className="login-button verified-login"
        type="submit"
        value="LOGIN"
        onClick={() => {
          messageService.sendMessage("verified successful login now");
        }}
      />
    </div>
  );
};
export default EmailVerified;
