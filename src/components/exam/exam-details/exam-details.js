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
    getExamStaticData(this.props.selectedSectionContionerId).then(
      (response) => {
        this.setState({ examData: response.data }, () => {
          console.log(this.state.examData);
        });
      }
    );
    window.addEventListener(
      "resize",
      debounce(() => {
        this.setState({ checkDevice: handleResize() });
      }, 500)
    );
  }

  inPageNavigate = (id) => {
    let headerOffset = this.state.checkDevice.isMobile ? 56 : 152;
    window.scrollTo({
      top: document.getElementById(id).offsetTop - headerOffset,
      behaviour: "smooth",
    });
  };
  componentDidUpdate(prevProps) {
    if (
      prevProps.selectedSectionContionerId !==
      this.props.selectedSectionContionerId
    )
      getExamStaticData(this.props.selectedSectionContionerId).then(
        (response) => {
          this.setState({ examData: response.data }, () => {
            if (
              document.getElementById(this.props.selectedSectionId) &&
              !this.state.checkDevice.isMobile
            ) {
              this.inPageNavigate(this.props.selectedSectionId);
            }
          });
        }
      );
  }

  render() {
    return (
      <>
        <div className="header-section-exam-details">
          <div className="heading-exam-details">On this page</div>
          <div className="in-page-nav">
            {this.state.examData
              ? this.state.examData.map((section) => {
                  return (
                    <div key={section.id}>
                      <div
                        className="in-page-nav-item"
                        
                        onClick={() => {
                          this.inPageNavigate(section.id);
                        }}
                      >
                        {section.section_title}
                      </div>
                      <div className="in-nav-bullet">&nbsp;</div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
        <div className="exam-details-content">
          {this.state.examData 
            ? this.state.examData.map((sectionData) => {
                return (
                  <div
                    id={sectionData.id}
                    key={sectionData.id}
                    dangerouslySetInnerHTML={{
                      __html: sectionData.section_html,
                    }}
                  />
                );
              })
            : null}
        </div>
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
