import React, { Component } from "react";
import ExamTitle from "../exam-title/exam-title";
import { handleResize, debounce } from "../../../common/deviceDetection";
import ExamDetails from "../exam-details/exam-details";
import "./exam-home.css";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faChevronLeft);

class ExamHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkDevice: handleResize(),
      selectedSectionContionerId: this.props.match.params.sectionContainerId,
      selectedSectionId: this.props.location.pathname.split("/")[4]
        ? this.props.location.pathname.split("/")[4]
        : "",
    };
  }
  componentDidMount() {
    window.addEventListener(
      "resize",
      debounce(() => {
        this.setState({ checkDevice: handleResize() });
      }, 500)
    );
    if(this.state.selectedSectionId==="")
    {
      this.setState({
          selectedSectionContionerId: this.state.checkDevice.isMobile ? 0 : this.state.selectedSectionContionerId,
        }
      );
    }
    this.navigateToSection();
  }
  
  updateRoute = (selectedSectionContionerId, selectedSectionId) => {
    this.setState({
      selectedSectionContionerId: selectedSectionContionerId,
      selectedSectionId: selectedSectionId,
    },()=>{this.navigateToSection()});
  };

  navigateToSection = () => {
    this.props.history.push({
      pathname: `/exam/${this.props.match.params.examName}/${this.state.selectedSectionContionerId}/${this.state.selectedSectionId}`,
    });
    if (
      document.getElementById(this.state.selectedSectionId) &&
      !this.state.checkDevice.isMobile
    ) {
      window.scrollTo(
        0,
        document.getElementById(this.state.selectedSectionId).offsetTop - 152
      );
    }
  };
  render() {
    return (
      <>
        <div className={`exam-home-header-container `}>
          <div className="exam-home-heading exam-static-header">ECAT Home</div>
        </div>
        <div
          className={`examhome-container ${
            this.state.selectedSectionContionerId === 0
              ? "examconatainer-padding"
              : ""
          }`}
        >
          <div
            className={`exam-titlelist-Container ${
              this.state.checkDevice.isMobile &&
              this.state.selectedSectionContionerId !== 0
                ? "mobile-hide"
                : ""
            }`}
          >
            <ExamTitle
              selectedSectionId={this.state.selectedSectionId}
              updateRoute={this.updateRoute}
            />
          </div>
          <div
            onClick={() => {
              this.setState({
                selectedSectionContionerId: 0,
              });
            }}
            className={`exam-back-tohome ${
              this.state.checkDevice.isMobile &&
              this.state.selectedSectionContionerId === 0
                ? "mobile-hide"
                : ""
            }`}
          >
            <FontAwesomeIcon
              icon="chevron-left"
              className="exam-home-left-icon"
            />
            Back to ECAT Home
          </div>
          {/* <div className={`exam-section-list-mobile ${
              this.state.checkDevice.isMobile &&
              this.state.selectedSectionContionerId === 0
                ? "mobile-hide"
                : ""
            }`}>
              {this.state.}
            </div> */}
          <div
            className={`exam-details-Container ${
              this.state.checkDevice.isMobile &&
              this.state.selectedSectionContionerId === 0
                ? "mobile-hide"
                : ""
            }`}
          >
            <ExamDetails
              name={this.props.match.params.examName}
              selectedSectionContionerId={this.state.selectedSectionContionerId}
              selectedSectionId={this.state.selectedSectionId}
            />
          </div>
        </div>
      </>
    );
  }
}
export default ExamHome;
