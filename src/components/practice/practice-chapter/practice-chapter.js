import React from "react";
import "./practice-chapter.css";
import lock from "../../../assets/images/lock.png";
import unlock from "../../../assets/images/unlock.png";
import { messageService } from "../../../services/notifyComponentService";

const PracticeChapter = ({ chapters }) => {
  return (
    <>
      {chapters.map((chapter, index) => {
        return (
          <div
            className="practice-chapter-subcontainer"
            key={chapter.chapter_id}
            onClick={() => {
              if (!sessionStorage.getItem("isLoggedIn")) {
                messageService.sendMessage(
                  "user trying to access without login"
                );
              } else if (chapter.isLocked) {
                messageService.sendMessage(
                  "user trying to access locked chapter"
                );
              }
            }}
          >
            <div className="practice-right-block">
              <div className="practice-chapter-text-container">
                <img
                  className="practice-lock-img"
                  src={chapter.isLocked ? lock : unlock}
                  alt="lck"
                ></img>
                <span className="practice-chapter-title">
                  {chapter.chapter_title}
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
};
export default PracticeChapter;
