import React, { Component } from "react";
import QuestionList from "./question-list/question-list";
import { getQuestions } from "../../services/questionService";
import "./quiz.css";
import unlock from "../../assets/images/unlock.png";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList:[]
    }
  }
  componentDidMount(){
    this.getQuestions();
  }
  getQuestions(){
    getQuestions(48).then((response)=>{
        this.setState({
          questionList:response.data
        })
    }).catch((error)=>{
      console.log(error)
    })
  }
  render() {
    console.log(this.props);
    return(
      <>
      <div className="quiz-header">

      </div>
      <QuestionList questionList={this.state.questionList}/>
      </>
    )
  }
}
export default Quiz; 