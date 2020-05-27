import React, { Component } from "react";
import "./question.css";
import { check } from "../../../assets/images/check.png";
class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmited: false,
      slectedOption: null,
    };
  }

  render() {
    return (
      <div className="question-container">
        <div className="question-header-container">
    <div className="question-header-rightblock">{`Q${this.props.activeQuestion}`}</div>
          <div className="question-header-leftblock">
            {this.props.activeQuestion>1?<div onClick={this.props.prevClick}>PREV</div>:""}
            {this.props.activeQuestion<this.props.totalQuestions?<div onClick={this.props.nextClick}>NEXT</div>:""} 
          </div>
        </div>
        <div className="question-text">
          {this.props.questionDetails?.question_text}
        </div>
        {this.props.questionDetails ? (
          <div >
            {this.props.questionDetails?.question_choice.map(
              (option, index) => {
                let charIndex = 97 + index;
                return (
                  <div key={index} className="question-option-container">
                    <div className="option-index">
                      {String.fromCharCode(charIndex)}
                    </div>
                    <div className="option-text">{option.choice_text}</div>
                  </div>
                );
              }
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}
export default Question;
