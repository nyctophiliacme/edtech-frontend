import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import Quiz from "../../quiz/quiz";
import "./practice-chapter.css";
import lock from "../../../assets/images/lock.png";
import unlock from "../../../assets/images/unlock.png";
import { messageService } from "../../../services/notifyComponentService";

const PracticeChapter = ({ chapters }) => {
  let location = useLocation();
  let history = useHistory();
  return (
    <>
      {chapters.map((chapter, index) => {
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
                !JSON.parse(sessionStorage.getItem("userDetails"))?.is_paid_user
              ) {
                messageService.sendMessage(
                  "user trying to access locked chapter"
                );
              } else {
                history.push(
                  `/quiz/${location.pathname.split("/")[2]}/${chapter.id}`
                );
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
                <span className="practice-chapter-title">{chapter.title}</span>
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
};
export default PracticeChapter;
