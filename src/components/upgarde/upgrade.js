import React from "react";
import "./upgrade.css";
import check from "../../assets/images/check.png";
import { Link } from "react-router-dom";

const Upgrade = (handleModalClose) => {
  const upgradeBenifts = [
    "Access to all practice questions",
    "Detailed explanations for every question",
    "Unlimited attempts per question",
  ];
  return (
    <div className="upgrade-container">
      <div className="upgrade-heading">
        Upgrade now and get everything you need to prepare for the<br />
        <span className="upgrade-Highlight">ECAT exam</span> 
      </div>
      <div className="upgrade-points-container">
        {upgradeBenifts.map((benifit, index) => {
          return (
            <div className="upgrade-points" key={index}>
              <img className="upgrade-img" src={check} alt="chk" />
              <span>{benifit}</span>
            </div>
          );
        })}
      </div>
      <div className="upgrade-button">
        <Link to="/pricing">
          <input
            className="login-button"
            value="Upgrade Now"
            onClick={handleModalClose()}
          />
        </Link>
      </div>
    </div>
  );
};
export default Upgrade;
