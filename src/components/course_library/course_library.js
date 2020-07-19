import React, { Component } from "react";
import SubjectList from "./subject_list/subject_list";
import "./course-library.css";
import CourseNavigation from "./course_navigation/course_navigation";

class CourseLibrary extends Component {
  constructor(props) {
    super(props);
    this.state={
      courseId: props.match.params.courseId?props.match.params.courseId:1
    }
  }
  

  render() {
    console.log(this.state.courseId);
    return (
      <div>
        <div className="course-library-header">Course Library</div>
        <div className="course-library-container">
          <CourseNavigation course={this.state.courseId}/>
          <SubjectList course={this.state.courseId}/>
        </div>
      </div>
    );
  }
}

export default CourseLibrary;
