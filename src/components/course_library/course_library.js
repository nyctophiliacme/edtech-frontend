import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import CourseNavigation from "./course_navigation"
import SubjectList from "./subject_list/subject_list";
class CourseLibrary extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      <div>Course Library</div>
      <div>
          <CourseNavigation />
          <SubjectList />
      </div>
    </div>;
  }
}

export default CourseLibrary;