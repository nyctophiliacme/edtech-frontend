import React, { Component } from "react";
import "./question.css";
import HTML from "../../../common/HTML";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { submitAnswer } from "../../../services/questionService";
import { withRouter } from "react-router-dom";
import { notify } from "react-notify-toast";

library.add(faCheck, faTimes);

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: props.questionDetails?.user_question_choice_id
        ? true
        : false,
      slectedOption: props.questionDetails?.user_question_choice_id
        ? props.questionDetails?.question_choice.filter((choice) => {
            return choice.id === props.questionDetails?.user_question_choice_id;
          })[0]
        : null,
      showSolution: props.questionDetails?.user_attempt_is_correct
        ? true
        : false,
    };
    this.submitAnswer = this.submitAnswer.bind(this);
  }
  selectedIndex = "";

  componentDidUpdate(prevProp) {
    if (this.props !== prevProp) {
      this.selectedIndex = "";
      this.setState({
        isSubmitted: this.props.questionDetails?.user_question_choice_id
          ? true
          : false,
        slectedOption: this.props.questionDetails?.user_question_choice_id
          ? this.props.questionDetails?.question_choice.filter((choice) => {
              return (
                choice.id ===
                this.props.questionDetails?.user_question_choice_id
              );
            })[0]
          : null,

        showSolution: this.props.questionDetails?.user_attempt_is_correct
          ? true
          : false,
      });
    }
  }
  submitAnswer() {
    let pathItems = this.props.location.pathname.split("/");
    submitAnswer(
      JSON.parse(sessionStorage.getItem("userDetails"))?.pk,
      this.props.questionDetails.id,
      this.state.slectedOption.id,
      pathItems[4],
      pathItems[3],
      pathItems[2],
      this.state.slectedOption.is_right_choice
    )
      .then(() => {
        this.setState({
          isSubmitted: true,
          showSolution: this.state.slectedOption.is_right_choice,
        });
        this.props.updateQuestionStatus(
          this.state.slectedOption.id,
          this.state.slectedOption.is_right_choice
        );
      })
      .catch(() => {
        notify.show(
          <div className="notify-container">Error in Submitting Question.</div>,
          "error",
          8000
        );
      });
  }
  render() {
    return (
      <div className="question-container">
        <div className="question-header-container">
          <div className="question-header-leftblock">
            {`Q${this.props.activeQuestion}`} &nbsp;&nbsp;
            {(this.state.isSubmitted &&
              this.state.slectedOption.is_right_choice) ||
            this.props.questionDetails?.user_attempt_is_correct ? (
              <FontAwesomeIcon className="green-check" icon="check" />
            ) : (this.state.isSubmitted &&
                !this.state.slectedOption.is_right_choice) ||
              this.props.questionDetails?.user_attempt_is_correct === false ? (
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
        <div className="question-body-container">
          <div className="question-text">
            {this.props.questionDetails ? (
              <HTML html={this.props.questionDetails.question_text} />
            ) : null}
            <img src={this.props.questionDetails?.question_img_url} alt="" />
          </div>
          {this.props.questionDetails ? (
            <div>
              {this.props.questionDetails?.question_choice.map(
                (option, index) => {
                  let charIndex = 97 + index;
                  if (option.is_right_choice) {
                    this.selectedIndex = String.fromCharCode(charIndex);
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
                      <HTML
                        html={option.choice_text}
                        className={"option-text"}
                      />
                      <img src={option?.choice_img_url} alt="" />
                    </div>
                  );
                }
              )}
            </div>
          ) : (
            <></>
          )}
        </div>

        {this.state.slectedOption && !this.state.isSubmitted ? (
          <input
            className="login-button right-align submit-answer-button"
            type="submit"
            value="SUBMIT ANSWER"
            onClick={this.submitAnswer}
          />
        ) : null}
        {this.state.isSubmitted && !this.state.slectedOption.is_right_choice ? (
          <div className="wrong-choice-wrapper right-align">
            <input
              className="login-button try-again try-again-button"
              type="button"
              value="TRY AGAIN"
              onClick={() => {
                this.setState({
                  isSubmitted: false,
                  slectedOption: null,
                  showSolution: false,
                });
                this.props.updateQuestionStatus(null, null);
              }}
            />
            <input
              className="login-button show-solution-button"
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
              <div >
                <div className="solution-answer">{`Answer: (${this.selectedIndex})`}</div>
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
              <HTML html={this.props.questionDetails.explanation} />

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
export default withRouter(Question);
