import React, { Component } from "react";
import { getAllExams, createExam } from "../../services/adminService";
import { Link } from "react-router-dom";
import { getAllCourses } from "../../services/courseService";
class AddExam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      examList: [],
      CourseList: [],
      exam_code: "",
      exam_title: "",
      course_id: 1,
    };
  }
  componentDidMount() {
    this.getExamList();
    this.getCourseList();
  }
  getExamList() {
    getAllExams().then((response) => {
      this.setState({ examList: response.data });
    });
  }
  getCourseList() {
    getAllCourses().then((response) => {
      this.setState({
        CourseList: response.data,
      });
    });
  }
  ExamCodeUpdate = (e) => {
    this.setState({ exam_code: e.target.value });
  };
  ExamTitleUpdate = (e) => {
    this.setState({ exam_title: e.target.value });
  };
  updateCourse = (e) => {
    let value = e.target.value;
    this.setState({ course_id: value });
  };
  SaveNewExam() {
    createExam(
      this.state.exam_code,
      this.state.exam_title,
      this.state.course_id
    ).then((response) => {
      this.setState({ showForm: false });
      this.getExamList();
    });
  }
  render() {
    return (
      <div className="admin-page">
        <div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Exam Code</th>
                <th>Exam Title</th>
                <th>Course Id</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.examList.map((exam) => {
                return (
                  <tr key={exam.id}>
                    <td>{exam.exam_code}</td>
                    <td>{exam.title}</td>
                    <td>{exam.course}</td>
                    <td>
                      <Link to={`/qazwsxedcrfv/${exam.exam_code}/s`}>
                        <input type="submit" value="Add Subject" />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <br />
        {this.state.showForm ? (
          <div>
            <form>
              <label>Exam code</label>
              <input type="text" onChange={this.ExamCodeUpdate} />
              <br />
              <br />
              <label>Exam title</label>
              <input type="text" onChange={this.ExamTitleUpdate} />
              <br />
              <br />
              <label>Course Id</label>
              <select onChange={this.updateCourse} value={this.state.course_id}>
                {this.state.CourseList.map((courseHeader) => {
                  return courseHeader.courses.map((course) => {
                    return (
                      <option key={course.id} value={course.id}>
                        {course.course_title}
                      </option>
                    );
                  });
                })}
              </select>
              <br />
              <br />
              <input type="submit" value="Save" onClick={this.SaveNewExam} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="submit"
                value="Cancel"
                onClick={() => {
                  this.setState({
                    showForm: false,
                    course_id: 1,
                    exam_code: "",
                    exam_title: "",
                  });
                }}
              />
            </form>
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                this.setState({ showForm: true });
              }}
            >
              Add Exam
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default AddExam;
