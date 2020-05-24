import React, { useState, useEffect } from "react";
import ExamTitle from "../exam-title/exam-title";
import ExamDetails from "../exam-details/exam-details";
import "./exam-home.css";
import {examTitles} from '../exam-ecat-data'

const ExamHome = (props) => {


  const selectedSection= props.match.params.defaultSection

  return (
    <div className="examhome-container">
      <div className="exam-titlelist-Container">
        {examTitles.map(function (et, index) {
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
        <ExamDetails name={props.match.params.name} subSection={props.match.params.defaultSection} />
      </div>
    </div>
  );
};
export default ExamHome;
