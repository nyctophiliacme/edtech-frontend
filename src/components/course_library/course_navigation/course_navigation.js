import React, { Component } from "react";
import { Link } from "react-router-dom";
import { handleResize, debounce } from "../../../common/deviceDetection";
import "./course-navigation.css";
import { faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faChevronDown);

class CourseNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: this.props.selectedCourseId,
      courses: this.props.courses,
      bottomSheet: false,
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
  }

  toggleBottomSheet = () => {
    this.setState({ bottomSheet: !this.state.bottomSheet });
  };

  render() {

    let { selectedCourseName, selectedSectionName } = this.props;
    let overlay = (
      <div>
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
                              parseInt(subsection.id) ===
                              parseInt(this.props.selectedCourseId)
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
        <div
          onClick={this.toggleBottomSheet}
          className="btn-close"
          aria-hidden="true"
        >
          {/* <span className="mdi mdi-close"></span>
          <span className="sr-only">Close</span> */}
        </div>
      </div>
    );

    let obj = [];
    obj.push({
      title: "modify",
      handler: () => {
        window.alert("modify clicked!");
      },
    });
    obj.push({
      title: "delete",
      handler: () => {
        window.alert("delete clicked!");
      },
    });
    return (
      <>
        {this.state.checkDevice.isMobile ? (
          <div className="course-filter-wrapper">
            <div className="course-filter" onClick={this.toggleBottomSheet}>
              <span className="course-name">{selectedCourseName}</span>
              <span className="section-name">
                &nbsp;|&nbsp;{selectedSectionName}
              </span>
              <span className="down-icon">
                <FontAwesomeIcon
                  icon="chevron-down"
                  className=""
                />
              </span>
            </div>
            {this.state.bottomSheet ? (
              <div
                id="bottom-sheet"
                className="overlay"
                onClick={this.toggleBottomSheet}
              >
                {overlay}{" "}
              </div>
            ) : null}
          </div>
        ) : (
          overlay
        )}
      </>
    );
  }
}
export default CourseNavigation;
