import React, { Component } from "react";
import ExamTitle from "../exam-title/exam-title";
import { handleResize, debounce } from "../../../common/deviceDetection";
import ExamDetails from "../exam-details/exam-details";
import "./exam-home.css";

class ExamHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkDevice: handleResize(),
      selectedSectionContionerId: 1,
      selectedSectionId: "",
    };
  }
  updateRoute = (selectedSectionContionerId, selectedSectionId) => {
    this.setState(
      {
        selectedSectionContionerId: selectedSectionContionerId,
        selectedSectionId: selectedSectionId,
      },
      () => {
        this.props.history.push({
          pathname: `/exam/${this.props.match.params.examName}/${selectedSectionContionerId}/${selectedSectionId}`,
        });
        if (document.getElementById(selectedSectionId)) {
          window.scrollTo(
            0,
            document.getElementById(selectedSectionId).offsetTop - 152
          );
        }
      }
    );
  };
  componentDidMount() {
    window.addEventListener(
      "resize",
      debounce(() => {
        this.setState({ checkDevice: handleResize() });
      }, 500)
    );
    this.setState({
      selectedSectionId: this.state.checkDevice.isMobile ? 0 : 1
    });
  }
  render() {
    console.log(this.state.checkDevice.isMobile, this.state.selectedSectionId);
    return (
      <>
        <div className="exam-home-header-container">
          <div className="exam-home-heading exam-static-header">ECAT Home</div>
        </div>
        <div className="examhome-container">
          <div className={`exam-titlelist-Container ${this.state.checkDevice.isMobile && this.state.selectedSectionId !== 0?"mobile-hide":""}`}>
            <ExamTitle
              selectedSectionId={this.state.selectedSectionId}
              updateRoute={this.updateRoute}
            />
          </div>
          <div className={`exam-details-Container ${this.state.checkDevice.isMobile && this.state.selectedSectionId === 0?"mobile-hide":""}`}>
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
