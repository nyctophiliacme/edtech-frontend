import React from "react";
import "./under-construction.css";
import underConstruction from "../../assets/images/underConstruction.png";
import line from "../../assets/images/Line.png"
import { Link } from "react-router-dom";
const construction = () => {
  return (
    <div className="construction-container">

      <div className="construction-text-container">
          <div className="construction-text1"> Hey, You've found</div>
           <div className="construction-text2">a page under construction.</div>
          <div className="construction-text3">
              <img src={line} alt=""/>
          </div>
          <div className="construction-text4">We are working on this  particular URL.<br/> The page will be up and running soon.</div>
          <Link to="/"   ><div className="construction-cta">Go to Home page </div></Link>
      </div>
      <div className="construction-image-container">
          <img src={underConstruction} alt="ss"></img>
      </div>
    </div>
  );
};

export default construction;
