import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getQuestions } from "../../services/questionService";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTrashAlt);
class ViewQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      questionList: [],
      exam_code: this.props.match.params.eId,
      subject_code: this.props.match.params.sId,
      chapter_id: this.props.match.params.cId,
      chapter_title: this.props.match.params.cTitle,
    };
  }
  componentDidMount() {
    this.getQuestionList();
  }
  getQuestionList() {
    getQuestions(this.state.chapter_id).then((response) => {
      this.setState({ questionList: response.data });
    });
  }
  render() {
    return (
      <div className="admin-page">
        <div className="admin-breadcrum">
          <Link to={`/qazwsxedcrfv/e`}>{this.state.exam_code}</Link>
          <span className="admin-brdcrm-spac"> &nbsp;&nbsp;/&nbsp;&nbsp; </span>
          <Link to={`/qazwsxedcrfv/${this.state.exam_code}/s`}>
            {this.state.subject_code}
          </Link>
          <span className="admin-brdcrm-spac"> &nbsp;&nbsp;/&nbsp;&nbsp; </span>
          <Link to={`/qazwsxedcrfv/${this.state.exam_code}/${this.state.subject_code}/c`}>
            {this.state.chapter_title}
          </Link>
        </div>
        <div className="ad-question-left">{`Total Questions: ${this.state.questionList.length}`}</div>
        <div className="ad-question-right">
          <Link to={`${this.props.match.url}a`}>
            <button> Add Question</button>
          </Link>
        </div>
        <div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Question Text</th>
                <th>Difficulty </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.questionList.map((question, index) => {
                return (
                  <tr key={question.id}>
                    <td>{index + 1}</td>
                    <td style={{ textAlign: "left", maxWidth: "240px" }}>
                      {question.question_text.length > 31
                        ? `${question.question_text.substring(0, 30)}...`
                        : question.question_text}
                    </td>
                    <td>{question.difficulty_level}</td>
                    <td style={{ color: "red" }}>
                      <FontAwesomeIcon icon="trash-alt" className="" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ViewQuestions;
