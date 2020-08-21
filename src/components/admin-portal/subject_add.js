import React, { Component } from "react";
import { getSubjects } from "../../services/practiceService";
import { Link } from "react-router-dom";
import { createSubject } from "../../services/adminService";
class AddSubject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      subjectList: [],
      subject_title: "",
      subject_code: "",
      backgrount_start_color: "",
      backgrount_end_color: "",
      exam_code: this.props.match.params.eId,
    };
  }
  componentDidMount() {
    this.getSubjectList();
  }
  getSubjectList() {
    getSubjects(this.state.exam_code).then((response) => {
      this.setState({ subjectList: response.data });
    });
  }
  updateSubjectTitle = (e) => {
    let value = e.target.value;
    this.setState({
      subject_title: value,
      subject_code:value.replace(/\s/g,'').toLowerCase(),
    });
  };
  
  updateBgStrtClr = (e) => {
    let value = e.target.value;
    this.setState({ backgrount_start_color: value });
  };
  updateBgEndClr = (e) => {
    let value = e.target.value;
    this.setState({ backgrount_end_color: value });
  };

  SaveNewSubject = () => {
    createSubject(
      this.state.subject_code,
      this.state.subject_title,
      this.state.exam_code,
      this.state.backgrount_start_color,
      this.state.backgrount_end_color
    ).then((response) => {
      this.getSubjectList();
      this.setState({ showForm: false });
    });
  };
  render() {
    return (
      <div className="admin-page">
        <div className="admin-breadcrum">
          <Link to={`/ad/e`}> {this.state.exam_code}</Link>
        </div>

        <div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Subject Code</th>
                <th>Subject Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.subjectList.map((subject) => {
                return (
                  <tr key={subject.subject_code}>
                    <td>{subject.subject_code}</td>
                    <td>{subject.title}</td>
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
              <label>Subject title</label>
              <input type="text" onChange={this.updateSubjectTitle} />
              <br />
              <br />
              <label>Start Color</label>
              <input type="text" onChange={this.updateBgStrtClr} />
              <br />
              <br />
              <label>End Color</label>
              <input type="text" onChange={this.updateBgEndClr} />
              <br />
              <br />
              <input type="submit" value="Save" onClick={this.SaveNewSubject} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="submit"
                value="Cancel"
                onClick={() => {
                  this.setState({
                    showForm: false,
                    exam_code: "",
                    subject_code: "",
                    subject_title: "",
                    backgrount_end_color: "",
                    backgrount_start_color: "",
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
              Add Subject
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default AddSubject;
