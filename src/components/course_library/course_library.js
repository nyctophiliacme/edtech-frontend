import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import SubjectList from "./subject_list/subject_list";
import "./course-library.css";
import CourseNavigation from "./course_navigation/course_navigation";

class CourseLibrary extends Component {
  constructor(props) {
    super(props);
    
  }
  

  render() {
    return (
      <div>
        <div className="course-library-header">Course Library</div>
        <div className="course-library-container">
          <CourseNavigation />
          <SubjectList />
        </div>
      </div>
    );
  }
}

export default CourseLibrary;
