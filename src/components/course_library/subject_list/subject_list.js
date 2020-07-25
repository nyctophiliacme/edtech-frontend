import React, { Component } from "react";
import "./subject-list.css";
import { Link, withRouter } from "react-router-dom";
import {
  getAllSubjectForCourse,
  getAllExamForCourse,
} from "../../../services/courseService";

class SubjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      examList: [],
      subjectList: [],
      selectedSectionName: "",
      selectedCourseName: "",
      selectedCourseId: this.props.selectedCourseId,
      selectedExamCode: "",
    };
  }
  componentDidMount() {
    this.getExamList();
    this.getSubjectList();
    this.updateName();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.selectedCourseId !== this.props.selectedCourseId) {
      this.reloadData();
      this.updateName();
    } else if (prevProps !== this.props) {
      this.updateName();
    }
  }

  updateName = () => {
    this.setState({
      selectedCourseName: this.props.selectedCourseName,
      selectedSectionName: this.props.selectedSectionName,
    });
  };
  reloadData = () => {
    this.setState(
      {
        selectedCourseId: this.props.selectedCourseId,
      },
      () => {
        this.getExamList();
        this.getSubjectList();
      }
    );
  };

  getSubjectList = () => {
    getAllSubjectForCourse(this.state.selectedCourseId)
      .then((response) => {
        this.setState({
          subjectList: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getExamList = () => {
    getAllExamForCourse(this.state.selectedCourseId)
      .then((response) => {
        this.setState({
          examList: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="subject-list-container">
        <div className="subject-list-header">
          {this.state.selectedCourseName}{" "}
          {this.state.selectedSectionName.toLowerCase()}
        </div>
        {this.state.examList && this.state.examList.length > 0 ? (
          <>
            <div className="exam-container">
              <div
                className={`exam-name ${
                  this.state.selectedExamCode === "" ? "exam-selected" : ""
                }`}
                onClick={() => {
                  this.setState({
                    selectedExamCode: "",
                  });
                }}
              >
                All
              </div>
              {this.state.examList.map((exam) => {
                return (
                  <div
                    key={exam.id}
                    className={`exam-name  ${
                      this.state.selectedExamCode === exam.exam_code
                        ? "exam-selected"
                        : ""
                    }`}
                    onClick={() => {
                      this.setState({
                        selectedExamCode: exam.exam_code,
                      });
                    }}
                  >
                    {exam.exam_code.toUpperCase()}
                  </div>
                );
              })}
            </div>
            {this.state.subjectList && this.state.subjectList.length > 0 ? (
              <div className="subject-tiles-container">
                {this.state.subjectList.map((subject) => {
                  if (
                    this.state.selectedExamCode === "" ||
                    this.state.selectedExamCode === subject.exam_code
                  ) {
                    return (
                      // <Link
                      //   key={subject.id}
                      //   to={`/practice/${subject.exam_code.toLowerCase()}/${subject.subject_code}`}
                      // >
                      <Link
                        key={subject.id}
                        to={`/examHome/${subject.exam_code.toLowerCase()}/practice/${subject.subject_code}`}
                      >
                        <div className="subject-detail-container">
                          <div
                            className="subject-icon-container"
                            style={{
                              background: `linear-gradient(to right,${subject.background_start_color},${subject.background_end_color})`,
                            }}
                          >
                            <div className="subject-icon-wrapper">
                              <img className="subject-icon-img" src={subject.image_url} alt="imga"/>
                            </div>
                          </div>
                          <div className="subject-text-container">
                            <div className="subject-text-wrapper">
                            <span className="subject-name-highlight">
                              {subject.title}
                            </span>
                            {` for ${
                              subject.exam_title
                            }(${subject.exam_code.toUpperCase()})`}
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  }
                })}
              </div>
            ) : (
              <div className="coming-soon">
                No Subject available for {this.state.selectedCourseName} Coming
                Soon....
              </div>
            )}
          </>
        ) : (
          <div className="coming-soon">
            No Subject available for {this.state.selectedCourseName}. Coming
            Soon...
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(SubjectList);
