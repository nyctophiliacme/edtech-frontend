import React, { Component } from "react";
import "./question.css";
import { check } from "../../../assets/images/check.png";
class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      slectedOption: null,
    };
  }
  componentDidUpdate(prevProp) {
    if (this.props.activeQuestion !== prevProp.activeQuestion) {
      this.setState({
        isSubmitted: false,
        slectedOption: null,
      });
    }
  }
  render() {
    return (
      <div className="question-container">
        <div className="question-header-container">
          <div className="question-header-leftblock">{`Q${this.props.activeQuestion}`}</div>
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
          {this.props.questionDetails?.question_text}
        </div>
        {this.props.questionDetails ? (
          <div>
            {this.props.questionDetails?.question_choice.map(
              (option, index) => {
                let charIndex = 97 + index;
                return (
                  <div
                    key={index}
                    // className={`question-option-container ${
                    //   (this.state.slectedOption === option && ! this.state.isSubmitted)
                    //     ? "question-option-select-container"
                    //     : this.state.slectedOption === option &&
                    //       this.state.isSubmitted
                    //     ? "question-option-correct-container"
                    //     : this.state.slectedOption === option &&
                    //       !this.state.isCorrect
                    //     ? "question-option-incorrect-container"
                    //     : ""
                    // }`}
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
                        this.setState(
                          {
                            slectedOption: option,
                          },
                          () => {
                            console.log(this.state);
                          }
                        );
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
                    <div className="option-text">{option.choice_text}</div>
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
            className="login-button"
            type="submit"
            value="Submit"
            onClick={() => {
              this.setState({
                isSubmitted: true,
              });
            }}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}
export default Question;
