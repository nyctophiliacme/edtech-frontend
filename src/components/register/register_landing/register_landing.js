import "./register_landing.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { notify } from "react-notify-toast";
import { signup } from "../../services/loginService";
import Register from "../register";
class RegisterLanding extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div></div>;
  }
}
export default RegisterLanding;
