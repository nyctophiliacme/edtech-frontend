import React, { Component } from "react";
import PracticeSubject from "../practice-subject/practice-subject";
import "./practice-home.css";
import PracticeChapter from "../practice-chapter/practice-chapter";
import { getSubjects } from "../../../services/practiceService";
import { Switch, Route, withRouter } from "react-router-dom";

class PracticeHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exam_code: props.match.params.examName.toLowerCase(),
      chapterList: [],
      subjectList: [],
      selectedSubjectCode: "",
    };
  }

  componentDidMount() {
    this.getSubjectList();
  }

  paths=this.props.location.pathname.split("/");
  getSubjectList() {
    getSubjects(this.state.exam_code)
      .then((response) => {
        this.setState(
          {
            subjectList: response.data,
            selectedSubjectCode: this.paths[3]
              ? this.paths[3]
              : response.data[0].subject_code,
          },
          () => {
            this.props.history.push(
              `/practice/${this.state.exam_code}/${this.state.selectedSubjectCode}`
            );
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setSelectedSubjectCode(subject_code) {
    this.setState({
      selectedSubjectCode: subject_code,
    });
  }

  render() {
    return (
      <>
        <div className="practice-header">
          <div className="practice-header-text">
            {this.state.exam_code.toUpperCase() + " "} Practice by Chapter
          </div>
          <div className="practice-header-search-container">
            <input
              className="practice-header-search"
              type="text"
              name="search"
              placeholder="Search..."
              required
            />
          </div>
        </div>
        <div className="practice-container">
          <div className="practice-subject-container">
            {this.state.subjectList.map((subject, index) => {
              return (
                <PracticeSubject
                  examName={this.state.exam_code}
                  key={index}
                  click={() => {
                    this.setSelectedSubjectCode(subject.subject_code);
                  }}
                  subjectName={subject.title}
                  subjectCode={subject.subject_code}
                  isSelected={
                    subject.subject_code === this.state.selectedSubjectCode
                  }
                />
              );
            })}
          </div>
          <div className="practice-chapter-container">
            <Switch>
              <Route
                path="/practice/:name/:subjectName"
                component={PracticeChapter}
              />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(PracticeHome);
