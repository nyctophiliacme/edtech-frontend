import React, { Component } from "react";
import "./question-list.css";
import check from "../../../assets/images/check.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faCheck, faTimes);

class QuestionList extends Component {

  
  render() {
    return (
      
      <div className="questionlist-container">
        {this.props.questionList.map((question, index) => {
          return (
            <div
              className={`questionlist-item-container ${
                index === this.props.activeQuestion-1
                  ? "questionlist-item-active"
                  : ""
              }`}
              key={index}
              onClick={() => {
                this.props.click(index+1)
              }}
            >
              <div className="questionlist-item-right">
                <span className="questionlist-ques-number">{`Question  ${index+1}`}</span>
                <br />
                <span className="questionlist-ques-difficulty">
                  {question.difficulty_level?.toUpperCase()}
                </span>
              </div>
              <div className="questionlist-item-left">
              <FontAwesomeIcon className="green-check" icon="check"  />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default QuestionList;
