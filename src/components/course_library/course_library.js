import React, { Component } from "react";
import SubjectList from "./subject_list/subject_list";
import { getAllCourses } from "../../services/courseService";
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

  componentDidMount() {
    this.getCoursesList();
  }

  getCoursesList = () => {
    getAllCourses()
      .then((response) => {
        this.setState({
          courses: response.data
        },()=>{
          this.getNames();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidUpdate(prevProp) {
    if (prevProp.match.params.courseId !== this.props.match.params.courseId) {
     this.getNames();
    }
  }

  getNames=()=>{
    let CourseName="";
    let tempSection = this.state.courses.filter((course) => {
      let crs = course.courses.filter((subCourse) => {
        if(
          parseInt(subCourse.id) ===
          parseInt(this.props.match.params.courseId)
        ){
          CourseName=subCourse.course_title;
          return subCourse;
        }
      })[0];
      if (crs) {
        return course;
      }
    })[0];
    if (tempSection ) {
      this.setState({
        selectedSectionName: tempSection.course_container_title,
        selectedCourseName: CourseName,
      });
    }
  }
  componentWillUnmount(){
    
  }
  render() {
    return (
      <div>
        {this.state.courses.length > 0 ? (
          <>
            <div className="course-library-header">Course Library</div>
            <div className="course-library-container">
              <CourseNavigation
                courses={this.state.courses}
                selectedCourseId={this.props.match.params.courseId}
                selectedCourseName={this.state.selectedCourseName}
                selectedSectionName={this.state.selectedSectionName}
              />
              <SubjectList
                selectedCourseId={this.props.match.params.courseId}
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
