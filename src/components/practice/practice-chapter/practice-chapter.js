import React from "react";
import "./practice-chapter.css";
import lock from "../../../assets/images/lock.png"
import unlock from "../../../assets/images/unlock.png"

const PracticeChapter = ({ chapters }) => {
    console.log(chapters);
  return (
    <div>
      {chapters.map((chapter, index) => {
        return (
          <div className="practice-chapter-contaier" key={chapter.chapter_id}>
            <div className="practice-right-block">
              <div className="practice-chapter-text-container">
                <img className="practice-lock-img" src={chapter.isLocked ? lock : unlock} alt="lck"></img>
                <span className="practice-chapter-title">{chapter.chapter_title}</span>
              </div>
              <div className="practice-chapter-question">{chapter.question_count} &nbsp; Questions</div>
            </div>
            <div className="practice-chapter-button-container">
                <div className="practice-chapter-button">Not Started</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default PracticeChapter;
