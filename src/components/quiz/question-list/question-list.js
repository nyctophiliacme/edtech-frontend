import React, { Component } from "react";
import "./question-list.css";
import check from "../../../assets/images/check.png";

class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: 0,
    };
  }
  
  render() {
    return (
      
      <div className="questionlist-container">
        {this.props.questionList.map((question, index) => {
          return (
            <div
              className={`questionlist-item-container ${
                index === this.state.activeQuestion
                  ? "questionlist-item-active"
                  : ""
              }`}
              key={index}
              onClick={() => {
                this.setState({
                  activeQuestion: index,
                });
              }}
            >
              <div className="questionlist-item-right">
                <span className="questionlist-ques-number">{`Question  ${index}`}</span>
                <br />
                <span className="questionlist-ques-difficulty">
                  {question.difficulty_level?.toUpperCase()}
                </span>
              </div>
              <div className="questionlist-item-left">
                <img src={check} alt="tem" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default QuestionList;
