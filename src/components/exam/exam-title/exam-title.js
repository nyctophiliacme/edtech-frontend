import React, { Component } from "react";
import { Link } from "react-router-dom";
import { handleResize, debounce } from "../../../common/deviceDetection";
import "./exam-title.css";
import { getExamSideNav } from "../../../services/examService";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faChevronRight);

class ExamTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // exam_code: this.props.match.params.examName,
      exam_code:"",
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
    getExamSideNav(1).then((response)=>{
      this.setState({ examsItemsList: response.data })
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
                    <div className="section-title exam-section-title" onClick={()=>{
                              this.props.updateRoute(category.section_container_1d, category.section_details[0].id)}}>
                      {category.section_container_title}
                      <span className="right-icon">
                        <FontAwesomeIcon icon="chevron-right" className="" />
                      </span>
                    </div>
                    <div className="sub-section exam-sub-sections-mobile">
                      {category.section_details.map((subsection) => {
                        return (
                          <div
                            className={`subsection-item ${
                              parseInt(subsection.id) ===
                              parseInt(this.props.selectedCourseId)
                                ? "active"
                                : ""
                            }`}
                            key={subsection.id} onClick={()=>{
                              this.props.updateRoute(category.id,subsection.id)}}
                          >
                            {subsection.section_title.replace(/\:/g, "")}
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
