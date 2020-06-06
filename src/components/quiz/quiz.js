import React, { Component } from "react";
import { Link } from "react-router-dom";
import QuestionList from "./question-list/question-list";
import { getQuestions } from "../../services/questionService";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Question from "./question/question";
import unlock from "../../assets/images/unlock.png";
import "./quiz.css";

library.add(faArrowLeft);
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
    getQuestions(this.props.location.pathname.split("/")[4])
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
  updateQuestionStatus=(choiceId,isCorrect)=>{
    let tempList=this.state.questionList;
    tempList[this.state.activeQuestion-1].user_question_choice_id=choiceId;
    tempList[this.state.activeQuestion-1].user_attempt_is_correct=isCorrect;
    this.setState({
      questionList:tempList
    })

  }
  render() {
    return (
      <>
        <div className="quiz-header">
        <Link to={`/practice/${this.props.location.pathname.split("/")[2]}/${this.props.location.pathname.split("/")[3]}`}>
          <span className="quiz-header-back-button">
          <FontAwesomeIcon icon="arrow-left" />
          </span>
          </Link>
          <img className="quiz-header-image" src={unlock} alt="unlocked" />
          <span className="quiz-header-title">
            {this.props.location.state.chapterTitle}
          </span>
          <span className="quiz-header-title quiz-header-number">{`${this.state.questionList.length} Qs`}</span>
        </div>
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
            updateQuestionStatus={this.updateQuestionStatus}
          />
        </div>
      </>
    );
  }
}
export default Quiz;
