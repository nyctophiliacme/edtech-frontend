import React, { Component } from "react";
import ExamTitle from "../exam-title/exam-title";
import ExamDetails from "../exam-details/exam-details";
import "./exam-home.css";

class ExamHome extends Component {
  constructor(props) {
    super(props);
    this.state={
      selectedSectionContionerId:0,
      selectedSectionId:1
    }
  }
  updateSelectedContainerId(id){
    this.setState({
      selectedSectionContionerId:id
    })
  }
  render(){
    return (
      <>
        <div className="exam-home-header-container">
          <div className="exam-home-heading exam-static-header">ECAT Home</div>
        </div>
        <div className="examhome-container">
          <div className="exam-titlelist-Container">
            <ExamTitle selectedSectionContionerId={this.state.selectedSectionContionerId} updateSelectedContainerId={this.updateSelectedContainerId}/>
          </div>
          <div className="exam-details-Container">
            <ExamDetails
              name={this.props.match.params.examName}
              // subSection={selectedSection}
            />
          </div>
        </div>
      </>
    );
  }


}
export default ExamHome;
