import React from 'react';
import logo from "../../assets/images/logo.png";
import './header.css'

const header = () => {
   return (
      <header className="logo-header">
      <img src={logo} alt="logo" />
    </header>
   
   );
}
export default header;