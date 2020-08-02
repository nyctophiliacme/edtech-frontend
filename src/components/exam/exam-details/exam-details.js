import React, { Component } from "react";
import "./exam-details.css";
import { getExamStaticData } from "../../../services/examService";

class ExamDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      examData: [],
    };
  }
  componentDidMount() {
    this.setState({
      examData: getExamStaticData(this.props.selectedSectionContionerId),
    });
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.selectedSectionContionerId !==
      this.props.selectedSectionContionerId
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
      </>
    );
  }
}
export default ExamDetails;
