import { useLocation, useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./practice-chapter.css";
import lock from "../../../assets/images/lock.png";
import unlock from "../../../assets/images/unlock.png";
import { messageService } from "../../../services/notifyComponentService";
import { useLocation } from "react-router-dom";
import { getChapters } from "../../../services/practiceService";

const PracticeChapter = () => {
  const [chapters, SetChapters] = useState([]);
  let location = useLocation();
  let history = useHistory();
  let paths = location.pathname.split("/");
  const getChapterList = () => {
    getChapters(paths[2], paths[3])
      .then((response) => {
        SetChapters(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getChapterList();
  if (chapters.length === 0) {
    return null;
  } else {
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
                  !JSON.parse(sessionStorage.getItem("userDetails"))
                    ?.is_paid_user
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
};
export default PracticeChapter;
