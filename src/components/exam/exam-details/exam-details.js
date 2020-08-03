import React, { Component } from "react";
import "./exam-details.css";
import gotoTop from "../../../assets/images/gotoTop.svg";
import { getExamStaticData } from "../../../services/examService";
import { handleResize, debounce } from "../../../common/deviceDetection";


class ExamDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkDevice: handleResize(),
      examData: [],
    };
  }
  componentDidMount() {
    this.setState({
      examData: getExamStaticData(this.props.selectedSectionContionerId),
    });
    window.addEventListener(
      "resize",
      debounce(() => {
        this.setState({ checkDevice: handleResize() });
      }, 500)
    );
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.selectedSectionContionerId !==
      this.props.selectedSectionContionerId && !this.state.checkDevice.isMobile
    )
      this.setState(
        {
          examData: getExamStaticData(this.props.selectedSectionContionerId),
        },
        () => {
          if (document.getElementById(this.props.selectedSectionId)) {
            window.scrollTo({
              top:
                document.getElementById(this.props.selectedSectionId)
                  .offsetTop - 152,
              behaviour: "smooth",
            });
          }
        }
      );
  }

  render() {
    return (
      <>
        {this.state.examData && this.state.examData.sections
          ? this.state.examData.sections.map((sectionData) => {
              return (
                <div
                  id={sectionData.section_id}
                  key={sectionData.section_id}
                  dangerouslySetInnerHTML={{ __html: sectionData.section_html }}
                />
              );
            })
          : null}
        <div
          className="goto-top-floater-wrapper"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img className="goto-img-floater" src={gotoTop} alt="" />
          Top
        </div>
      </>
    );
  }
}
export default ExamDetails;
