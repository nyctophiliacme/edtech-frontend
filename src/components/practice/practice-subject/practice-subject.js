import React from "react";
import "./practice-subject.css";
import { Link } from "react-router-dom";

const PracticeSubject = ({
  examName,
  isSelected,
  subjectName,
  subjectCode,
  click,
}) => {
  return (
    <Link  to={`/practice/${examName}/${subjectCode}`}>
      <div className={`subjects-container ${isSelected ? "title-selected" : ""}`} onClick={click}>
        {subjectName}
      </div>
    </Link>
  );
};
export default PracticeSubject;
