import React from "react";
import "./report-problem.css";

const ReportProblem = () => {
  return (
    <div className="report-problem-container">
      <div className="report-problem-header">Report a mistake</div>
      <div className="report-problem-content">
        Have an issue with the question? Let us know.
      </div>
      <div className="report-problem-subheader">What’s wrong?</div>
      <div className="report-problem-content">
        <label className="radio-button">
          <input
            type="radio"
            className="radio-button__input"
            id="choice1-1"
            name="choice1"
          />
          <span className="radio-button__control"></span>
          <span className="radio-button__label">The answer is wrong</span>
        </label>
        <label className="radio-button">
          <input
            type="radio"
            className="radio-button__input"
            id="choice1-2"
            name="choice1"
          />
          <span className="radio-button__control"></span>
          <span className="radio-button__label">I cought a typo</span>
        </label>
      </div>
      <div className="report-problem-subheader">
        Description of the issue (optional)
      </div>
      <div className="report-problem-textarea">   <textarea /></div>       
      <div className="report-problem-button">
          Submit Report
      </div>
    </div>
  );
};
export default ReportProblem;
