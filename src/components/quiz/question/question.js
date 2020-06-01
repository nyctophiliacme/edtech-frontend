import React, { Component } from "react";
import "./question.css";
import HTML from "../../../common/HTML";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faCheck, faTimes);

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      slectedOption: null,
      showSolution: false,
    };
  }
  selectedIndex = "";
  componentDidUpdate(prevProp) {
    if (this.props.activeQuestion !== prevProp.activeQuestion) {
      this.selectedIndex="";
      this.setState({
        isSubmitted: false,
        slectedOption: null,
        showSolution: false,
      });
    }
  }
  
  render() {
    return (
      <div className="question-container">
        <div className="question-header-container">
          <div className="question-header-leftblock">
            {`Q${this.props.activeQuestion}`} &nbsp;&nbsp;
            {this.state.isSubmitted &&
            this.state.slectedOption.is_right_choice ? (
              <FontAwesomeIcon className="green-check" icon="check" />
            ) : this.state.isSubmitted &&
              !this.state.slectedOption.is_right_choice ? (
              <FontAwesomeIcon className="red-cross" icon="times" />
            ) : null}
          </div>
          <div className="question-header-rightblock">
            {this.props.activeQuestion > 1 ? (
              <div
                className="question-prevnext  question-prev"
                onClick={this.props.prevClick}
              >
                PREV
              </div>
            ) : (
              ""
            )}
            {this.props.activeQuestion < this.props.totalQuestions ? (
              <div className="question-prevnext" onClick={this.props.nextClick}>
                NEXT
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="question-text">
          {this.props.questionDetails ? (
            <HTML html={this.props.questionDetails.question_text} />
          ) : null}
          <br />
          <img src={this.props.questionDetails?.question_img_url} alt="" />
        </div>
        {this.props.questionDetails ? (
          <div>
            {this.props.questionDetails?.question_choice.map(
              (option, index) => {
                let charIndex = 97 + index;
                console.log(option.is_right_choice)
                console.log(String.fromCharCode(charIndex))
                if(option.is_right_choice){
                  this.selectedIndex=String.fromCharCode(charIndex)
                }
                return (
                  <div
                    key={index}
                    className={`question-option-container ${
                      this.state.slectedOption === option &&
                      !this.state.isSubmitted
                        ? " question-option-select-container"
                        : this.state.slectedOption === option &&
                          this.state.isSubmitted
                        ? this.state.slectedOption?.is_right_choice
                          ? "question-option-correct-container"
                          : "question-option-incorrect-container"
                        : ""
                    }`}
                    onClick={() => {
                      if (!this.state.isSubmitted) {
                        this.setState({
                          slectedOption: option,
                        });
                      }
                    }}
                  >
                    <div
                      className={`option-index ${
                        this.state.slectedOption === option &&
                        !this.state.isSubmitted
                          ? " option-selected"
                          : this.state.slectedOption === option &&
                            this.state.isSubmitted
                          ? this.state.slectedOption.is_right_choice
                            ? "option-correct"
                            : "option-incorrect"
                          : ""
                      }`}
                    >
                      {String.fromCharCode(charIndex)}
                    </div>
                    <HTML html={option.choice_text} className={"option-text"} />
                  </div>
                );
              }
            )}
          </div>
        ) : (
          <></>
        )}
        {this.state.slectedOption && !this.state.isSubmitted ? (
          <input
            className="login-button right-align"
            type="submit"
            value="SUBMIT ANSWER"
            onClick={() => {
              this.setState({
                isSubmitted: true,
                showSolution: this.state.slectedOption.is_right_choice,
              });
            }}
          />
        ) : null}
        {this.state.isSubmitted && !this.state.slectedOption.is_right_choice ? (
          <div className="wrong-choice-wrapper right-align">
            <input
              className="login-button try-again"
              type="button"
              value="TRY AGAIN"
              onClick={() => {
                this.setState({
                  isSubmitted: false,
                  slectedOption: null,
                  showSolution: false,
                });
              }}
            />
            <input
              className="login-button"
              type="button"
              value={
                this.state.showSolution ? "HIDE SOLUTION" : "SHOW SOLUTION"
              }
              onClick={() => {
                this.setState({
                  showSolution: !this.state.showSolution,
                });
              }}
            />
          </div>
        ) : null}

        {this.state.showSolution ? (
          <div className="solution-wrapper">
            <div className="solution-header">Solution</div>
            <div className="solution-text">
              <div className="solution-answer">
                {`Answer: (${this.selectedIndex})`}
                <HTML
                  html={
                    this.props.questionDetails.question_choice.filter(
                      (item) => {
                        return item.is_right_choice;
                      }
                    )[0].choice_text
                  }
                />
              </div>
              <br />
              <HTML html={this.props.questionDetails.explanation} />
              <br />
              <img
                src={this.props.questionDetails?.explanation_img_url}
                alt=""
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Question;
