import React, { useState, Component } from "react";
import PracticeSubject from "../practice-subject/practice-subject";
import "./practice-home.css";
import PracticeChapter from "../practice-chapter/practice-chapter";
import { getSubjects, getChapters } from "../../../services/practiceService";

class PracticeHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exam_code: props.match.params.name.toLowerCase(),
      chapterList: [],
      subjectList: [],
      selectedSubjectCode: "",
    };
  }

  componentDidMount() {
    this.getSubjectList();
  }
  getSubjectList() {
    getSubjects(this.state.exam_code)
      .then((response) =>
        {
          this.setState({
            subjectList: response.data,
            selectedSubjectCode:response.data[0]?.subject_code
          });
          this.getChapterList();
        }
      ).catch((error) => {
        console.log(error);
      });
  }
  getChapterList() {
    getChapters(this.state.exam_code, this.state.selectedSubjectCode)
      .then((response) => {
        this.setState({
          chapterList: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setSelectedSubjectCode(subject_code) {
    this.setState({
      selectedSubjectCode: subject_code
    },()=>{
      this.getChapterList();
    });
  }

  render() {
    return (
      <>
        <div className="practice-header">
          <div className="practice-header-text">
            {this.state.exam_code.toUpperCase() + " "} Practice by Chapter
          </div>
          <div className="practice-header-search-container">
            <input
              className="practice-header-search"
              type="text"
              name="search"
              placeholder="Search..."
              required
            />
          </div>
        </div>
        <div className="practice-container">
          <div className="practice-subject-container">
            {this.state.subjectList.map((subject, index) => {
              return (
                <PracticeSubject
                  examName={this.state.exam_code}
                  key={index}
                  click={() => {
                    this.setSelectedSubjectCode(subject.subject_code);
                  }}
                  subjectName={subject.title}
                  isSelected={
                    subject.subject_code === this.state.selectedSubjectCode
                  }
                />
              );
            })}
          </div>
          <div className="practice-chapter-container">
            <PracticeChapter chapters={this.state.chapterList} />
          </div>
        </div>
      </>
    );
  }
}
export default PracticeHome;
