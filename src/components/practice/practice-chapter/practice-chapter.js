import React, { Component } from "react";
import "./practice-chapter.css";
import lock from "../../../assets/images/lock.png";
import unlock from "../../../assets/images/unlock.png";
import { messageService } from "../../../services/notifyComponentService";
import { getChapters,getChaptersGuest } from "../../../services/practiceService";

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
  // paths = this.props.location.pathname.split("/");
  getChapterList = () => {
    // this.paths = this.props.location.pathname.split("/");
    if(sessionStorage.getItem("isLoggedIn"))
    {
      getChapters(this.props.match.params.examcode, this.props.match.params.subjectName)
      .then((response) => {
        this.setState({
          chapters: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    }
    else
    {
      getChaptersGuest(this.props.match.params.examcode, this.props.match.params.subjectName)
      .then((response) => {
        this.setState({
          chapters: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    }
    
  };

  render() {
    return (
      <>
        {this.state.chapters.map((chapter, index) => {
          let correctPercentage = Math.round(
            (chapter.user_correct_attempts / chapter.question_count) * 100
          );
          return (
            <div
              className="practice-chapter-subcontainer"
              key={chapter.id}
              onClick={() => {
                if (!sessionStorage.getItem("isLoggedIn")) {
                  messageService.sendMessage(
                    "user trying to access without login"
                  );
                  sessionStorage.setItem("targetUrl",`/quiz/${this.props.match.params.examcode}/${this.props.match.params.subjectName}/${chapter.id}`);
                  sessionStorage.setItem("targetUrlState",JSON.stringify({ chapterTitle: chapter.title }));
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
                    pathname: `/quiz/${this.props.match.params.examcode}/${this.props.match.params.subjectName}/${chapter.id}`,
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
                  {chapter.user_total_attempts > 0
                    ? chapter.user_total_attempts + "/"
                    : null}
                  {chapter.question_count} &nbsp; Questions
                </div>
              </div>
              <div className="practice-chapter-button-container">
                {chapter.user_total_attempts > 0 ? (
                  <div
                    className={`practice-chapter-button ${
                      chapter.user_total_attempts > 0
                        ? correctPercentage < 50
                          ? "learning"
                          : correctPercentage < 70
                          ? "passing"
                          : correctPercentage < 100
                          ? "proficient"
                          : "mastery"
                        : ""
                    }`}
                  >
                    <div className="practice-status-value">
                      {chapter.user_total_attempts > 0 ? (
                        correctPercentage < 50 ? (
                          <span>Learning</span>
                        ) : correctPercentage < 70 ? (
                          <span>Passing</span>
                        ) : correctPercentage < 100 ? (
                          <span>Proficient</span>
                        ) : (
                          <span>Mastered</span>
                        )
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="practice-percentage-value">
                      {`${correctPercentage}%`}
                    </div>
                  </div>
                ) : (
                  <div className="practice-chapter-button practice-not-started">Not Started</div>
                )}
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
export default PracticeChapter;
