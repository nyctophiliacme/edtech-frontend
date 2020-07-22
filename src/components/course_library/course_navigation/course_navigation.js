import React, { Component } from "react";
import { Link } from "react-router-dom";
import { handleResize, debounce } from "../../../common/deviceDetection";
import "./course-navigation.css";

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
    const {
      checkDevice: { isMobile },
    } = this.state;
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
    // let navigationContent = (

    // );
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
    console.log(isMobile);
    return (
      <>
        {this.state.checkDevice.isMobile ? (
          <div>
            <button className="example" onClick={this.toggleBottomSheet}>
              open bottom sheet!
            </button>
            {this.state.bottomSheet ? (
              <div id="bottom-sheet" className="overlay" onClick={this.toggleBottomSheet}>
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
