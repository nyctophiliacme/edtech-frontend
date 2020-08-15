import React, { Component } from "react";
import { getAllExams } from "../../services/adminService";
import { Link } from "react-router-dom";
class AddExam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      examList: [],
      formData: {
        exam_code: "",
        exam_title: "",
        course_id: 0,
      },
    };
  }
  componentDidMount() {
    this.getExamList();
  }
  getExamList() {
    getAllExams().then((response) => {
      this.setState({ examList: response.data });
    });
  }

  render() {
    return (
      <>
        {this.state.showForm ? (
          <div>
            <form>
              <label>Exam code</label>
              <input type="text" />
              <label>Exam title</label>
              <input type="text" />
              <label>Course Id</label>
              <input type="number" />
              <input
                type="submit"
                value="Save"
                onClick={() => {
                  this.setState({ showForm: false });
                }}
              />
              <input
                type="submit"
                value="cancel"
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
                return(
                <tr key={exam.id}>
                  <td>{exam.exam_code}</td>
                  <td>{exam.title}</td>
                  <td>{exam.course}</td>
                  <td><Link to={`/ad/${exam.exam_code}/s`}><input type="submit" value="Add Subject"/></Link></td>
                </tr>
                )

              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default AddExam;
