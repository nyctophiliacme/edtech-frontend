import React from "react";
import "./practice-subject.css";

const PracticeSubject = ({examName}) => {
    return(
    <div className="subjects-container">
        {examName}
    </div>
    )
}
export default PracticeSubject;