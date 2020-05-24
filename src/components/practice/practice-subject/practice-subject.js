import React from "react";
import "./practice-subject.css";

const PracticeSubject = ({examName,isSelected,subjectName,SubjectId,click}) => {
    return(
    <div className={`subjects-container ${isSelected?'title-selected':''}`} onClick={click}>
        {subjectName}
    </div>
    )
}
export default PracticeSubject;