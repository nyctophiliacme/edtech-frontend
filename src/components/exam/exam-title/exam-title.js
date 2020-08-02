import React, { Component } from "react";
import { Link } from "react-router-dom";
import { handleResize, debounce } from "../../../common/deviceDetection";
import "./exam-title.css";
import { getAllCourses } from "../../../services/courseService";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faChevronRight);

class ExamTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      examId: "",
      examsItemsList: [],
      checkDevice: handleResize(),
    };
  }

  componentDidMount() {
    window.addEventListener(
      "resize",
      debounce(() => {
        this.setState({ checkDevice: handleResize() });
      }, 500)
    );
    getAllCourses().then((response) => {
      console.log(response);
      this.setState({ examsItemsList: response.data });
    });
  }

  render() {
    let overlay = (
      <div>
        <div className="course-navigation exam-tiles">
          {this.state.examsItemsList.length !== 0
            ? this.state.examsItemsList.map((category, index) => {
                return (
                  <div key={index} className="section exam-tile-section">
                    <div className="section-title exam-section-title">
                      {category.course_container_title}
                      <span className="right-icon">
                        <FontAwesomeIcon icon="chevron-right" className="" />
                      </span>
                    </div>
                    <div className="sub-section exam-sub-sections-mobile">
                      {category.courses.map((subsection) => {
                        return (
                          <div
                            className={`subsection-item ${
                              parseInt(subsection.id) ===
                              parseInt(this.props.selectedCourseId)
                                ? "active"
                                : ""
                            }`}
                            key={subsection.id}
                          >
                            {subsection.course_title}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
    return <>{overlay}</>;
  }
}
export default ExamTitle;
