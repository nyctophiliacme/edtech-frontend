import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAllExams } from "../../../services/courseService";
import "./course-navigation.css";

class CourseNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exams: null,
      courseId:props.courseId
    };
  }

  componentDidMount() {
    this.getExamsList();
  }

  getExamsList = () => {
    getAllExams()
      .then((response) => {
        this.setState({
          exams: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="course-navigation">
        {this.state.exams != null
          ? this.state.exams.map((category, index) => {
              return (
                <div key={index} className="section">
                  <div className="section-title">{category.section}</div>
                  <div className="sub-section">
                    {category.subsections.map((subsection) => {
                      return (
                        <div
                          className="subsection-item"
                          key={subsection.subsection_id}
                        >
                          <Link to={`/courses/${subsection.subsection_id}/`}>
                          {/* {subsection.subsection_id} */}
                            {subsection.subsection_Name}
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
