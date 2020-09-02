import React, { Component, Fragment } from "react";
import "./exam-details.css";
import gotoTop from "../../../assets/images/gotoTop.svg";
import { getExamStaticData } from "../../../services/examService";
import { handleResize, debounce } from "../../../common/deviceDetection";
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 50px;
`;


class ExamDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkDevice: handleResize(),
      examData: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.setState(
      {
        loading: true,
      },
      () => {
        getExamStaticData(this.props.selectedSectionContionerId).then(
          (response) => {
            this.setState({
              examData: response.data,
              loading: false,
            });
          }
        );
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
    ) {
      this.setState(
        {
          loading: true,
        },
        () => {
          getExamStaticData(this.props.selectedSectionContionerId).then(
            (response) => {
              this.setState({ examData: response.data, loading: false }, () => {
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
      );
    }
  }

  render() {
    return this.state.loading ? (
      <BounceLoader
        css={override}
        size={60}
        color={"#123abc"}
        loading={this.state.loading}
      />
    ) : (
      <>
        <div className="header-section-exam-details">
          <div className="heading-exam-details">On this page</div>
          <div className="in-page-nav">
            {this.state.examData
              ? this.state.examData.map((section) => {
                  return (
                    <Fragment key={section.id}>
                      <div
                        className="in-page-nav-item"
                        onClick={() => {
                          this.inPageNavigate(section.id);
                        }}
                      >
                        {section.section_title}
                      </div>
                      <div className="in-nav-bullet">&nbsp;</div>
                    </Fragment>
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
