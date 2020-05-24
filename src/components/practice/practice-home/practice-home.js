import React from "react";
import PracticeSubject from "../practice-subject/practice-subject"
import "./practice-home.css";

const PracticeHome = (props) => {
  const subjects=['Maths','Physics','Chemestry','English'];

  return (
    <>
      <div className="practice-header">
        <div className="practice-header-text">
          {props.match.params.name + " "} Practice by Chapter
        </div>
        {/* <div className="practice-header-search-container">
          <input
            className="practice-header-search"
            type="text"
            name="search"
            placeholder="Search..."
            required
          />
        </div> */}
      </div>
      <div className="practice-container">
          <div className="practice-subject-container">
          <PracticeSubject examName={props.match.params.name}/>
          </div>
          <div className="practice-chapter-container"> dd</div>
      </div>
    </>
  );
};
export default PracticeHome;
