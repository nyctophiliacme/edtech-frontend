import React, { useState, useEffect } from "react";
import ExamTitle from "../exam-title/exam-title";
import ExamDetails from "../exam-details/exam-details";
import "./exam-home.css";
import {examTitles} from '../exam-ecat-data'

const ExamHome = (props) => {
  
  const [selectedTitle, setselectedTitle] = useState(0);
  const [subSection,setSubSection]=useState('home');
  return (
    <div className="examhome-container">
      <div className="exam-titlelist-Container">
        {examTitles.map(function (et, index) {
          return (
            <ExamTitle
              examTitle={et}
              key={index}
              click={() => {
                setSubSection(et.id);
                setselectedTitle(index);
              }}
              isSelected={index === selectedTitle}
            />
          );
        })}
      </div>
      <div className="exam-details-Container">
        <ExamDetails name={props.match.params.name} subSection={subSection} />
      </div>
    </div>
  );
};
export default ExamHome;
