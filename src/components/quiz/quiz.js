import React, { Component } from "react";
import QuestionList from "./question-list/question-list";
import { getQuestions } from "../../services/questionService";
import Question from "./question/question";
import "./quiz.css";
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: [],
      activeQuestion: 1,
    };
  }
  componentDidMount() {
    this.getQuestions();
  }
  getQuestions() {
    getQuestions(48)
      .then((response) => {
        this.setState({
          questionList: response.data,
          activeQuestion: 1,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <>
        <div className="quiz-header"></div>
        <div className="quiz-container">
          <QuestionList
            questionList={this.state.questionList}
            activeQuestion={this.state.activeQuestion}
            click={(questionNumber) => {
              this.setState({
                activeQuestion: questionNumber,
              });
            }}
          />
          <Question
            activeQuestion={this.state.activeQuestion}
            totalQuestions={this.state.questionList.length}
            questionDetails={
              this.state.questionList[this.state.activeQuestion - 1]
            }
            prevClick={() =>
              this.setState({
                activeQuestion: this.state.activeQuestion - 1,
              })
            }
            nextClick={() =>
              this.setState({
                activeQuestion: this.state.activeQuestion + 1,
              })
            }
          />
        </div>
      </>
    );
  }
}
export default Quiz;
