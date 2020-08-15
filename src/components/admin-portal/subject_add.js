import React, { Component } from "react";
import { getSubjects } from "../../services/practiceService";
import { Link } from "react-router-dom";
class AddSubject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      subjectList: [],
      formData: {
        Subject_title: "",
        Subject_code: "",
        backgrount_start_color: "",
        backgrount_end_color: "",
      },
      exam_code: this.props.match.params.eId,
    };
  }
  componentDidMount() {
    console.log(this.props);

    this.getSubjectList();
  }
  getSubjectList() {
    getSubjects(this.state.exam_code).then((response) => {
      this.setState({ subjectList: response.data });
    });
  }

  render() {
    return (
      <div className="admin-page">
        <div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Subject Title</th>
                <th>Subject Code</th>
                <th>No of Chapter</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.subjectList.map((subject) => {
                return (
                  <tr key={subject.subject_code}>
                    <td>{subject.subject_code}</td>
                    <td>{subject.title}</td>
                    <td>0 chapters</td>
                    <td>
                      <Link
                        to={`/ad/${this.state.exam_code}/${subject.subject_code}/c`}
                      >
                        <input type="submit" value="Add Chapters" />
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
              <label>Subject code</label>
              <input type="text" />
              <br />
              <br />
              <label>Subject title</label>
              <input type="text" />
              <br />
              <br />
              <label>bg_start_color Id</label>
              <input type="text" />
              <br />
              <br />
              <label>bg_end_color Id</label>
              <input type="text" />
              <br />
              <br />
              <input
                type="submit"
                value="Save"
                onClick={() => {
                  this.setState({ showForm: false });
                }}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="submit"
                value="Cancel"
                onClick={() => {
                  this.setState({ showForm: false });
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

export default AddSubject;
