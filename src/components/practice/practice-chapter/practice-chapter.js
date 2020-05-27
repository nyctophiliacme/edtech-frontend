import React, { Component } from "react";
import "./practice-chapter.css";
import lock from "../../../assets/images/lock.png";
import unlock from "../../../assets/images/unlock.png";
import { messageService } from "../../../services/notifyComponentService";
import { getChapters } from "../../../services/practiceService";

class PracticeChapter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chapters: [],
    };
  }

  componentDidMount() {

    this.getChapterList();
  }
  componentDidUpdate(prevProps) {

    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.getChapterList();
    }
  }
  paths = this.props.location.pathname.split("/");
  getChapterList = () => {
    this.paths=this.props.location.pathname.split("/")
    getChapters(this.paths[2], this.paths[3])
      .then((response) => {
        this.setState({
          chapters: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        {this.state.chapters.map((chapter, index) => {
          return (
            <div
              className="practice-chapter-subcontainer"
              key={chapter.id}
              onClick={() => {
                if (!sessionStorage.getItem("isLoggedIn")) {
                  messageService.sendMessage(
                    "user trying to access without login"
                  );
                } else if (
                  chapter.is_locked &&
                  !JSON.parse(sessionStorage.getItem("userDetails"))
                    ?.is_paid_user
                ) {
                  messageService.sendMessage(
                    "user trying to access locked chapter"
                  );
                } else {
                  this.props.history.push({
                    pathname: `/quiz/${this.paths[2]}/${this.paths[3]}/${chapter.id}`,
                    state: { chapterTitle: chapter.title },
                  });
                }
              }}
            >
              <div className="practice-right-block">
                <div className="practice-chapter-text-container">
                  <img
                    className="practice-lock-img"
                    src={chapter.is_locked ? lock : unlock}
                    alt="lck"
                  ></img>
                  <span className="practice-chapter-title">
                    {chapter.title}
                  </span>
                </div>
                <div className="practice-chapter-question">
                  {chapter.question_count} &nbsp; Questions
                </div>
              </div>
              <div className="practice-chapter-button-container">
                <div className="practice-chapter-button">Not Started</div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
export default PracticeChapter;
