import React, { Component } from "react";
import { getChaptersGuest } from "../../services/practiceService";
import { Link } from "react-router-dom";
import { createChapter } from "../../services/adminService";
class AddChapter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      ChapterList: [],
      chapter_title: "",
      chapter_code: "",
      description: "",
      isLocked: false,
      exam_code: this.props.match.params.eId,
      subject_code: this.props.match.params.sId,
    };
  }
  componentDidMount() {
    this.getChapterList();
  }
  getChapterList() {
    getChaptersGuest(this.state.exam_code, this.state.subject_code).then(
      (response) => {
        this.setState({ ChapterList: response.data });
      }
    );
  }

  updateTitle = (e) => {
    let value = e.target.value;
    this.setState({
      chapter_title: value,
      chapter_code: value.replace(/\s/g, "").toLowerCase(),
    });
  };

  updateDescription = (e) => {
    let value = e.target.value;
    this.setState({ description: value });
  };
  updateisLocked = (e) => {
    this.setState({ isLocked: !this.state.isLocked });
  };

  saveNewChapter = () => {
    createChapter(
      this.state.chapter_code,
      this.state.chapter_title,
      this.state.subject_code,
      this.state.exam_code,
      this.state.isLocked
    ).then((response) => {
      this.getChapterList();
      this.setState({ showForm: false });
    });
  };
  render() {
    return (
      <div className="admin-page">
        <div className="admin-breadcrum">
          <Link to={`/ad/e`}> {this.state.exam_code}</Link>
          <span className="admin-brdcrm-spac"> &nbsp;&nbsp;/&nbsp;&nbsp; </span>
          <Link to={`/ad/${this.state.exam_code}/s`}>
            {this.state.subject_code}
          </Link>
        </div>
        <h2>{`Total chapters: ${this.state.ChapterList.length}`}</h2>
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
              <input type="text" onChange={this.updateTitle} />
              <br />
              <br />
              <label>Description</label>
              <textarea rows="4" cols="50" onChange={this.updateDescription} />
              <br />
              <br />
              <label>Is Locked</label>
              <input type="checkbox" onChange={this.updateisLocked} />
              <br />
              <br />
              <input type="submit" value="Save" onClick={this.saveNewChapter} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="submit"
                value="Cancel"
                onClick={() => {
                  this.setState({
                    showForm: false,
                    chapter_title: "",
                    chapter_code: "",
                    isLocked: false,
                    description: "",
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
              Add Chapter
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default AddChapter;
