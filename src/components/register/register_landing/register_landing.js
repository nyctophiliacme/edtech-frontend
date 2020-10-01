import "./register_landing.css";
import React, { Component } from "react";
import register from "../../../assets/images/register.png";
import fb from "../../../assets/images/facebookNew.png";
import envelope from "../../../assets/images/envelope.png";
import "./register_landing.css";
import { loginWithFb } from "../../../services/loginService";
import { messageService } from "../../../services/notifyComponentService";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

class RegisterLanding extends Component {
  constructor(props) {
    super(props);
  }
  continueWithEmail=()=>{
    messageService.sendMessage(
      "email sign up"
    );
  }
  openLogin=()=>{
    messageService.sendMessage(
      "login Clicked"
    );
  }
  responseFacebook = (response) => {
    console.log(response);
    // loginWithFb
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  render() {
    return (
      <div className="login-container register-container register-landing-contianer">
        <div className="login-header register-landing-header">
          Join Super Teacher for free
        </div>
        <img src={register} alt="" />
        <FacebookLogin
          appId="3117276751703273"
          autoLoad
          callback={this.responseFacebook}
          render={() => (
            <div className="continue-with-fb">
              <div className="continue-with-fb-text">
                <img src={fb} className="continue-with-fb-img" alt="" />
                Continue with Facebook
              </div>
            </div>
          )}
        />
        <div className="continue-with-fb continue-with-email" onClick={this.continueWithEmail}>
          <div className="continue-with-fb-text">
            <img src={envelope} className="continue-with-fb-img" alt="" />
            Sign up with Email
          </div>
        </div>
        <div className="register-footer">
          Already have an account? &nbsp;&nbsp;&nbsp;
          <span className="register-footer-highlight" onClick={this.openLogin}>Login</span>
        </div>
      </div>
    );
  }
}
export default RegisterLanding;
