import React, { Component } from "react";
import HTML from "../../common/HTML";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { createQuestion } from "../../services/adminService";
library.add(faChevronLeft);

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question_text: "",
      option1_text: "",
      question_url: "",
      option1_url: "",
      option2_text: "",
      option2_url: "",
      option3_text: "",
      option3_url: "",
      option4_text: "",
      option4_url: "",
      explanation_text: "",
      explanation_url: "",
      correct_answer: "",
      category: "easy",
    };
  }
  updtQuestion = (e) => {
    let value = e.target.value;
    this.setState({ question_text: value });
  };
  updtQuestionUrl = (e) => {
    let value = e.target.value;
    this.setState({ question_url: value });
  };
  updtOption1 = (e) => {
    let value = e.target.value;
    this.setState({ option1_text: value });
  };
  updtOption2 = (e) => {
    let value = e.target.value;
    this.setState({ option2_text: value });
  };
  updtOption3 = (e) => {
    let value = e.target.value;
    this.setState({ option3_text: value });
  };
  updtOption4 = (e) => {
    let value = e.target.value;
    this.setState({ option4_text: value });
  };
  updtExplanation = (e) => {
    let value = e.target.value;
    this.setState({ explanation_text: value });
  };
  updtOption1Url = (e) => {
    let value = e.target.value;
    this.setState({ option1_url: value });
  };
  updtOption2Url = (e) => {
    let value = e.target.value;
    this.setState({ option2_url: value });
  };
  updtOption3Url = (e) => {
    let value = e.target.value;
    this.setState({ option3_url: value });
  };
  updtOption4Url = (e) => {
    let value = e.target.value;
    this.setState({ option4_url: value });
  };
  updtExplanationUrl = (e) => {
    let value = e.target.value;
    this.setState({ explanation_url: value });
  };
  updtCorrectOption = (e) => {
    let value = e.target.value;
    this.setState({ correct_answer: value });
  };
  updtCategory = (e) => {
    let value = e.target.value;
    this.setState({ category: value });
  };
  saveNewQuestion = () => {
    createQuestion(
      this.state.question_text,
      this.state.category,
      this.state.question_url,
      this.state.explanation_text,
      this.state.explanation_url,
      this.props.match.params.cId,
      this.state.option1_text,
      this.state.option2_text,
      this.state.option3_text,
      this.state.option4_text,
      this.state.correct_answer,
      this.state.option1_url,
      this.state.option2_url,
      this.state.option3_url,
      this.state.option4_url
    ).then(
      this.props.history.push(
        this.props.match.url.substring(0, this.props.match.url.length - 1)
      )
    );
  };
  render() {
    return (
      <div className="add-question-container">
        <Link
          to={this.props.match.url.substring(
            0,
            this.props.match.url.length - 1
          )}
        >
          <div>
            <FontAwesomeIcon
              icon="chevron-left"
              className="exam-home-left-icon"
            />
            Back to Question List
          </div>
        </Link>
        <br />
        <br />
        <form>
          <label>Question Text</label>
          <textarea rows="4" cols="80" onChange={this.updtQuestion} />
          <br />
          <br />
          <label>Preview</label>
          <div className="question-preview">
            <HTML html={this.state.question_text} />
          </div>
          <br />
          <br />
          <label>Question Image Url</label>
          <input type="text" onChange={this.updtQuestionUrl} />
          <br />
          <br />
          <label>Option 1</label>
          <textarea rows="4" cols="80" onChange={this.updtOption1} />
          <br />
          <br />
          <label>Preview</label>
          <div className="question-preview">
            <HTML html={this.state.option1_text} />
          </div>
          <br />
          <br />
          <label>Option 1 Image Url</label>
          <input type="text" onChange={this.updtOption1Url} />
          <br />
          <br />
          <label>Option 2</label>
          <textarea rows="4" cols="80" onChange={this.updtOption2} />
          <br />
          <br />
          <label>Preview</label>
          <div className="question-preview">
            <HTML html={this.state.option2_text} />
          </div>
          <br />
          <br />
          <label>Option 2 Image Url</label>
          <input type="text" onChange={this.updtOption2Url} />
          <br />
          <br />
          <label>Option 3</label>
          <textarea rows="4" cols="80" onChange={this.updtOption3} />
          <br />
          <br />
          <label>Preview</label>
          <div className="question-preview">
            <HTML html={this.state.option3_text} />
          </div>
          <br />
          <br />
          <label>Option 3 Image Url</label>
          <input type="text" onChange={this.updtOption3Url} />
          <br />
          <br />
          <label>Option 4</label>
          <textarea rows="4" cols="80" onChange={this.updtOption4} />
          <br />
          <br />
          <label>Preview</label>
          <div className="question-preview">
            <HTML html={this.state.option4_text} />
          </div>
          <br />
          <br />
          <label>Option 4 Image Url</label>
          <input type="text" onChange={this.updtOption4Url} />
          <br />
          <br />
          <label>Explanation</label>
          <textarea rows="4" cols="80" onChange={this.updtExplanation} />
          <br />
          <br />
          <label>Preview</label>
          <div className="question-preview">
            <HTML html={this.state.explanation_text} />
          </div>
          <br />
          <br />
          <label>Explanation Image Url</label>
          <input type="text" onChange={this.updtExplanationUrl} />
          <br />
          <br />
          <label>Category</label>
          <select onChange={this.updateCategory} value={this.state.category}>
            <option value="easy"> Easy </option>
            <option value="moderate"> Moderate </option>
            <option value="difficult"> Difficult </option>
          </select>
          <br />
          <br />
          <label>Correct number</label>
          <input type="number" onChange={this.updtCorrectOption} />
          <br />
          <br />
          <input type="submit" value="Save" onClick={this.SaveNewSubject} />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input type="submit" value="Cancel" />
        </form>
      </div>
    );
  }
}
export default AddQuestion;
