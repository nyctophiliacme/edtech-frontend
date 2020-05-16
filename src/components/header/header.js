import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.css";

const header = () => {
  return (
    <header className="logo-header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </header>
  );
};
export default header;
