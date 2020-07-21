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
<<<<<<< HEAD
      selectedCourseId: "",
=======
      subjects: {},
      selectedCourseId: this.props.match.params.courseId,
>>>>>>> 8c9fc233d55849b70c841ec85ba56900ef5a9414
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
<<<<<<< HEAD
            selectedCourseId: response.data[0].courses[0].id,
            selectedCourseName: response.data[0].courses[0].course_title,
            selectedSectionName: response.data[0].course_container_title,
          }
        );
=======
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
>>>>>>> 8c9fc233d55849b70c841ec85ba56900ef5a9414
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
<<<<<<< HEAD
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
=======
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
>>>>>>> 8c9fc233d55849b70c841ec85ba56900ef5a9414
      </div>
    );
  }
}

export default CourseLibrary;
