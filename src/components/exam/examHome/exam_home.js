import React from "react";
import ExamTitle from "../exam-title/exam-title";
import ExamDetails from "../exam-details/exam-details";
import "./exam-home.css";

const ExamHome = (props) => {
  const selectedSection = props.match.params.sectionContainerId;
  
  return (
    <>
      <div className="exam-home-header-container">
        <div className="exam-home-heading exam-static-header">ECAT Home</div>
      </div>
      <div className="examhome-container">
        <div className="exam-titlelist-Container">
          <ExamTitle />
        </div>
        <div className="exam-details-Container">
          <ExamDetails
            name={props.match.params.examName}
            subSection={selectedSection}
          />
        </div>
      </div>
    </>
  );
};
export default ExamHome;
