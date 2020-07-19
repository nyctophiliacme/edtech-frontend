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
      selectedCourseId: "",
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
        this.setState({
          courses: response.data,
        },this.getSubjectList());        
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
    console.log(`Logged Output: CourseLibrary -> constructor -> courses`, this.state.courses);
    console.log(`Logged Output: SubjectLibrary -> render -> this.state.subjects`, this.state.subjects);    
    return (
      <div>
        <div className="course-library-header">Course Library</div>
        <div className="course-library-container">
          <CourseNavigation courses={this.state.courses} selectedCourseId={this.state.selectedCourseId}/>
          <SubjectList subjects={this.state.subjects} selectedCourseName={this.state.selectedCourseName} selectedSectionName={this.state.selectedSectionName}/>
        </div>
      </div>
    );
  }
}

export default CourseLibrary;
