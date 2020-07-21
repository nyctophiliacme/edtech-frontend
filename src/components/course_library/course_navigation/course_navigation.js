import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./course-navigation.css";

class CourseNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: this.props.selectedCourseId,
      courses: this.props.courses,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="course-navigation">
        {this.state.courses.length !== 0
          ? this.state.courses.map((category, index) => {
              return (
                <div key={index} className="section">
                  <div className="section-title">
                    {category.course_container_title}
                  </div>
                  <div className="sub-section">
                    {category.courses.map((subsection) => {
                      return (
                        <div
                          className={`subsection-item ${
                            parseInt(subsection.id) === parseInt(this.props.selectedCourseId)
                              ? "active"
                              : ""
                          }`}
                          key={subsection.id}
                        >
                          <Link to={`/courses/${subsection.id}/`}>
                            {subsection.course_title}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}
export default CourseNavigation;
