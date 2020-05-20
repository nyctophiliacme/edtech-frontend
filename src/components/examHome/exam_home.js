import React from "react";
import "./exam-home.css";

const ExamHome = (props) => {
  debugger;
  return( 
  <div className="examhome-Container">
    {props.match.params.name}
    </div>
    );
};
export default ExamHome;
