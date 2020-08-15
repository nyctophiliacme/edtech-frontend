import React, { Component } from "react";
import { getChaptersGuest } from "../../services/practiceService";
import { Link } from "react-router-dom";
class AddChapter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      ChapterList: [],
      formData: {
        Chapter_title: "",
      },
      exam_code: this.props.match.params.eId,
      subject_code: this.props.match.params.sId,
    };
  }
  componentDidMount() {
    // this.getChapterList();
  }
  getChapterList() {
    getChaptersGuest(this.state.exam_code, this.state.subject_code).then(
      (response) => {
        this.setState({ ChapterList: response.data });
      }
    );
  }
  render() {
    return (
      <div className="admin-page">
        <div className="admin-breadcrum">
          <Link to={`/ad/e`}> {this.state.exam_code}</Link>
          <span className="admin-brdcrm-spac"> &nbsp;&nbsp;/&nbsp;&nbsp; </span>
          <Link to={`/ad/${this.state.exam_code}/s`}>{this.state.subject_code}</Link>
         
        </div>
        <h2>
            {`Total chapters: ${ this.state.ChapterList.length}`}
        </h2>
        <div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Chapter Title</th>
                <th>No of Questions</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.ChapterList.map((chapter) => {
                return (
                  <tr key={chapter.id}>
                    <td>{chapter.title}</td>
                    <td>{`${chapter.question_count} Questions`}</td>
                    <td>{chapter.description}</td>
                    <td>
                      <Link
                        to={`/ad/${this.state.exam_code}/${this.state.subject_code}/${chapter.id}/${chapter.title}/q`}
                      >
                        <input type="submit" value="Add Questions" />
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
              
              <label>Chapter title</label>
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
              Add Chapter
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default AddChapter;
