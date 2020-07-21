import React, { Component } from "react";
import SubjectList from "./subject_list/subject_list";
import { getAllCourses, getAllSubjects } from "../../services/courseService";
import "./course-library.css";
import CourseNavigation from "./course_navigation/course_navigation";

class CourseLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: {},
      subjects: {},
      selectedCourseId: this.props.match.params.courseId,
      selectedCourseName: "",
      selectedSectionName: "",
    };
  }

  couseChanged = () => {};

  componentDidMount() {
    this.getCoursesList();
    // this.getSubjectList();
  }

  getCoursesList = () => {
    getAllCourses()
      .then((response) => {
        this.setState(
          {
            courses: response.data,
          },
          this.getSubjectList()
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getSubjectList = () => {
    getAllSubjects()
      .then((response) => {
        this.setState({
          subjects: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log(this.props.match.params.courseId);
    return (
      <div>
        {this.state.courses.length > 0 ? (
          <>
            <div className="course-library-header">Course Library</div>
            <div className="course-library-container">
              <CourseNavigation
                courses={this.state.courses}
                selectedCourseId={this.props.match.params.courseId}
              />
              <SubjectList
                subjects={this.state.subjects}
                selectedCourseName={this.state.selectedCourseName}
                selectedSectionName={this.state.selectedSectionName}
              />
            </div>
          </>
        ) : null}
      </div>
    );
  }
}

export default CourseLibrary;
