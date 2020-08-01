import React from "react";
import ExamTitle from "../exam-title/exam-title";
import ExamDetails from "../exam-details/exam-details";
import "./exam-home.css";
import { examTitles } from "../exam-ecat-data";

const ExamHome = (props) => {
  const selectedSection = props.match.params.defaultSection;

  return (
    <>
      <div className="exam-home-header-container">
        <div className="exam-home-heading exam-static-header">ECAT Home</div>
      </div>
      <div className="examhome-container">
        <div className="exam-titlelist-Container">
          {examTitles.map(function (et) {
            return (
              <ExamTitle
                examTitle={et}
                key={et.id}
                isSelected={et.id === selectedSection}
              />
            );
          })}
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
