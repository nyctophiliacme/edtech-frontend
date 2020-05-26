import React, { Component } from "react";
import "./question.css";
import { check } from "../../../assets/images/check.png";
class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
          questionDetails: null,
          isSubmited: false,
          slectedOption:null
        };
      }
    
      componentDidMount() {
        this.setState({
          questionList: this.props.question,
        });
      }
      render(){
          return(
              <div className="question-container" >

              </div>
          )
      }
}
export default Question
