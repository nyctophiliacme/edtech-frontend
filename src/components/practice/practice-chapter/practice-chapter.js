import React, {Component } from "react";
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

  getChapterList = () => {
    let paths = this.props.location.pathname.split("/");
    getChapters(paths[2], paths[3])
      .then((response) => {
        this.setState({
          chapters: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  handleChpaterClick(chapter){
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
    }else {
      history.push(
        `/quiz/${location.pathname.split("/")[2]}/${chapter.id}`
      );
    }
  }
  render() {
    return (
      <>
        {this.state.chapters.map((chapter, index) => {
          return (
            <div
              className="practice-chapter-subcontainer"
              key={chapter.id}
              onClick={this.handleChpaterClick(chapter)}
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
