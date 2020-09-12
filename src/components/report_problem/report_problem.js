import React, { Component } from "react";
import "./report-problem.css";
import { submitMistake } from "../../services/questionService";
import { notify } from "react-notify-toast";

class ReportProblem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bug_title: "I cought a typo",
      bug_description: "",
      bug_tiltes: ["I cought a typo", "The answer is wrong"],
    };
  }
  updatDescription = (e) => {
    let value = e.target.value;
    this.setState({ bug_description: value });
  };
  SubmitMistake = () => {
    submitMistake(
      sessionStorage.getItem("QID"),
      this.state.bug_title,
      this.state.bug_description,
      JSON.parse(sessionStorage.getItem("userDetails")).pk
    )
      .then((response) => {
        this.props.handleModalClose();
        notify.show(
          <div className="notify-container">
            Mistake reported Successfully. Thanks for your input .
          </div>,
          "success",
          4000
        );
      })
      .catch((error) => {
        this.props.handleModalClose();
        notify.show(
          <div className="notify-container">
            Unable to report the mistake . Please try again later.
          </div>,
          "error",
          4000
        );
      });
  };
  render() {
    return (
      <div className="report-problem-container">
        <div className="report-problem-header">Report a mistake</div>
        <div className="report-problem-content">
          Have an issue with the question? Let us know.
        </div>
        <div className="report-problem-subheader">What’s wrong?</div>
        <div className="report-problem-content">
          {this.state.bug_tiltes.map((title, index) => {
            return (
              <label
                key={index}
                className="radio-button"
                onClick={() => {
                  this.setState({ bug_title: title });
                }}
              >
                <input
                  type="radio"
                  className="radio-button__input"
                  id="choice1-1"
                  name="choice1"
                  key={index}
                  checked={this.state.bug_title===title}
                />
                <span className="radio-button__control"></span>
                <span className="radio-button__label">{title}</span>
              </label>
            );
          })}
        </div>
        <div className="report-problem-subheader">
          Description of the issue (optional)
        </div>
        <div className="report-problem-textarea">
          <textarea onChange={this.updatDescription} />
        </div>
        <div className="report-problem-button" onClick={this.SubmitMistake}>Submit Report</div>
      </div>
    );
  }
}
export default ReportProblem;
