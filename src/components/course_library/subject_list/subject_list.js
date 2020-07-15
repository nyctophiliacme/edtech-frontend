import React, { Component } from "react";
import "./subject-list.css";
class SubjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      examList: [
        {
          exam_id: 1,
          exam_code: "ECAT",
        },
        {
          exam_id: 2,
          exam_code: "NET",
        },
        {
          exam_id: 3,
          exam_code: "PRUIES",
        },
        {
          exam_id: 4,
          exam_code: "ITPU",
        },
      ],
      subjectList: [
        {
          subject_id: 1,
          subject_name: "Chemestry",
          icon_url: "asa",
          background_start_color: "#DD7B34",
          background_end_color: "#E58A48",
          exam_code: "ecat",
          exam_id: 1,
          exam_fullname: "Engineering common admission test",
        },
        {
          subject_id: 2,
          subject_name: "English",
          icon_url: "asa",
          background_start_color: "#A320B9",
          background_end_color: "#AA2D7F",
          exam_code: "ecat",
          exam_id: 1,
          exam_fullname: "Engineering common admission test",
        },
        {
          subject_id: 3,
          subject_name: "Maths",
          icon_url: "asa",
          background_start_color: "#1AAE8A",
          background_end_color: "#00C067",
          exam_code: "ecat",
          exam_id: 1,
          exam_fullname: "Engineering common admission test",
        },
        {
          subject_id: 4,
          subject_name: "Physics",
          icon_url: "asa",
          background_start_color: "#DB2D67",
          background_end_color: "#E55748",
          exam_code: "ecat",
          exam_id: 1,
          exam_fullname: "Engineering common admission test",
        },
        {
          subject_id: 5,
          subject_name: "Chemestry",
          icon_url: "asa",
          background_start_color: "#DD7B34",
          background_end_color: "#E58A48",
          exam_code: "net",
          exam_id: 2,
          exam_fullname: "National entrance exam",
        },
        {
          subject_id: 6,
          subject_name: "English",
          icon_url: "asa",
          background_start_color: "#A320B9",
          background_end_color: "#AA2D7F",
          exam_code: "ecat",
          exam_id: 2,
          exam_fullname: "National entrance exam",
        },
        {
          subject_id: 7,
          subject_name: "Maths",
          icon_url: "asa",
          background_start_color: "#1AAE8A",
          background_end_color: "#00C067",
          exam_code: "itpu",
          exam_id: 3,
          exam_fullname: "Engineering common admission test",
        },
        {
          subject_id: 8,
          subject_name: "Physics",
          icon_url: "asa",
          background_start_color: "#DB2D67",
          background_end_color: "#E55748",
          exam_code: "itpu",
          exam_id: 3,
          exam_fullname: "Engineering common admission test",
        },
      ],
      sectionName: "Test Prep",
      subSectionName: "Engineering",
      selectedExamId: 0,
    };
  }
  //   componentDidUpdate(prevProps) {
  //     if (prevProps !== this.props) {
  //       this.setState({
  //         sectionName: this.props.sectionName,
  //         subSectionName: this.props.sectionName,
  //       });
  //     }
  //   }
  render() {
    return (
      <div className="subject-list-container">
        <div className="subject-list-header">
          {this.state.subSectionName} {this.state.sectionName}
        </div>
        <div className="exam-container">
          <div
            className={`exam-name ${
              this.state.selectedExamId === 0 ? "exam-selected" : ""
            }`}
            onClick={() => {
              this.setState({
                selectedExamId: 0,
              });
            }}
          >
            All
          </div>
          {this.state.examList.map((exam) => {
            return (
              <div
                className={`exam-name  ${
                  this.state.selectedExamId === exam.exam_id
                    ? "exam-selected"
                    : ""
                }`}
                onClick={() => {
                  this.setState({
                    selectedExamId: exam.exam_id,
                  });
                }}
              >
                {exam.exam_code}
              </div>
            );
          })}
        </div>
        <div className="subject-tiles-container">
          {this.state.subjectList.map((subject) => {
            if (
              this.state.selectedExamId === 0 ||
              this.state.selectedExamId === subject.exam_id
            ) {
              return (
                <div className="subject-detail-container">
                  <div
                    className="subject-icon-container"
                    style={{
                      background: `linear-gradient(to right,${subject.background_start_color},${subject.background_end_color})`,
                    }}
                  >
                    ss
                  </div>
                  <div className="subject-text-container">
                    <span className="subject-name-highlight">
                      {subject.subject_name}
                    </span>
                    {` for ${subject.exam_fullname}(${subject.exam_code.toUpperCase()})`}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default SubjectList;
