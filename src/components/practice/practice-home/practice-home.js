import React, { Component } from "react";
import PracticeSubject from "../practice-subject/practice-subject";
import "./practice-home.css";
import PracticeChapter from "../practice-chapter/practice-chapter";
import { getSubjects } from "../../../services/practiceService";
import { Switch, Route, withRouter } from "react-router-dom";
import { handleResize, debounce } from "../../../common/deviceDetection";

class PracticeHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exam_code: props.match.params.examcode.toLowerCase(),
      chapterList: [],
      subjectList: [],
      selectedSubjectCode: props.match.params.subjectName.toLowerCase(),
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
    this.getSubjectList();
  }

  paths = this.props.location.pathname.split("/");
  getSubjectList() {
    getSubjects(this.state.exam_code)
      .then((response) => {
        this.setState(
          {
            subjectList: response.data,
            selectedSubjectCode:this.props.match.params.subjectName.toLowerCase()
              // ? this.paths[3]
              // : response.data[0].subject_code,
          }
          // ,
          // () => {
          //   this.props.history.push(
          //     `/practice/${this.state.exam_code}/${this.state.selectedSubjectCode}`
          //   );
          // }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setSelectedSubjectCode(subject_code) {
    this.setState({
      selectedSubjectCode: subject_code,
    });
  }

  LoadChapter = (e) => {
    let value=e.target.value;
    this.setState({
      selectedSubjectCode : value
    },()=>{
      this.props.history.push(`/examHome/${this.state.exam_code}/practice/${value}`)}
      );    
  };

  render() {
    return (
      <>
        {/* <div className="practice-header">
          <div className="practice-header-text">
            {this.state.exam_code.toUpperCase() + " "} Practice by Chapter
          </div>
          <div className="practice-header-search-container">
            { <input
              className="practice-header-search"
              type="text"
              name="search"
              placeholder="Search..."
              required
            /> }
          </div>
        </div> */}
        <div className="practice-container">
          <div className="practice-subject-container">
            {!this.state.checkDevice.isMobile ? (
              this.state.subjectList.map((subject, index) => {
                return (
                  <PracticeSubject
                    examName={this.state.exam_code}
                    key={index}
                    click={() => {
                      this.setSelectedSubjectCode(subject.subject_code);
                    }}
                    subjectName={subject.title}
                    subjectCode={subject.subject_code}
                    isSelected={
                      subject.subject_code === this.state.selectedSubjectCode
                    }
                  />
                );
              })
            ) : (
              <div className="subject-select-container">
                <select
                  className="subject-select"
                  onChange={this.LoadChapter}
                  value={this.state.selectedSubjectCode}
                >
                  {this.state.subjectList.map((subject, index) => {
                    return (
                      <option
                        key={subject.subject_code}
                        value={subject.subject_code}
                      >
                        {subject.title}
                      </option>
                    );
                  })}
                </select>
              </div>
            )}
          </div>
          <div className="practice-chapter-container">
            <Switch>
              <Route
                path={this.url}
                component={PracticeChapter}
              />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(PracticeHome);
