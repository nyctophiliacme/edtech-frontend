import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getQuestions } from "../../services/questionService";
class ViewQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      questionList: [],
      exam_code: this.props.match.params.eId,
      subject_code: this.props.match.params.sId,
      chapter_id:this.props.match.params.cId,
      chapter_title:this.props.match.params.cTitle
    };
  }
  componentDidMount() {
    this.getQuestionList();
  }
  getQuestionList() {
    getQuestions(this.state.chapter_id).then(
      (response) => {
        this.setState({ ChapterList: response.data });
      }
    );
  }
  render() {
    return (
      <div className="admin-page">
        <div className="admin-breadcrum">
          <Link to={`/ad/e`}>
             {this.state.exam_code}
          </Link>
          <span className="admin-brdcrm-spac"> &nbsp;&nbsp;/&nbsp;&nbsp; </span>
          <Link to={`/ad/${this.state.exam_code}/s`}>
            {this.state.subject_code}
          </Link>
          <span className="admin-brdcrm-spac"> &nbsp;&nbsp;/&nbsp;&nbsp; </span>
          <Link to={`/ad/${this.state.exam_code}/${this.state.subject_code}/c`}>
            {this.state.chapter_title}
          </Link>
        </div>
      </div>
    );
  }
}
export default ViewQuestions;
