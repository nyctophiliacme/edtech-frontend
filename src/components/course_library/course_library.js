import React, { Component } from "react";
import SubjectList from "./subject_list/subject_list";
import {
  getAllCourses
} from "../../services/courseService";
import "./course-library.css";
import CourseNavigation from "./course_navigation/course_navigation";

class CourseLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: {},
      selectedCourseId: "",
      selectedCourseName: "",
      selectedSectionName: "",
    };
  }

  couseChanged = () => {};

  componentDidMount() {
    this.getCoursesList();
  }

  getCoursesList = () => {
    getAllCourses()
      .then((response) => {
        this.setState(
          {
            courses: response.data,
            selectedCourseId: response.data[0].courses[0].id,
            selectedCourseName: response.data[0].courses[0].course_title,
            selectedSectionName: response.data[0].course_container_title,
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log(
      `Logged Output: CourseLibrary -> constructor -> courses`,
      this.state.courses
    );
    console.log(
      `Logged Output: SubjectLibrary -> render -> this.state.subjects`,
      this.state.subjects
    );
    return (
      <div>
        <div className="course-library-header">Course Library</div>
        <div className="course-library-container">
          <CourseNavigation
            courses={this.state.courses}
            selectedCourseId={this.state.selectedCourseId}
          />
          <SubjectList
            selectedCourseId={this.state.selectedCourseId}
            selectedCourseName={this.state.selectedCourseName}
            selectedSectionName={this.state.selectedSectionName}
          />
        </div>
      </div>
    );
  }
}

export default CourseLibrary;
