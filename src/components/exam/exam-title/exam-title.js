import React from "react";
import "./exam-title.css";
import { Link } from "react-router-dom";
const ExamTitle = ({ examTitle, isSelected, click }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link to={`/examHome/ecat/info/${examTitle.id}`}>
      <div
        className={`exam-title-container ${isSelected ? "title-selected" : ""}`}
        onClick={scrollToTop}
      >
        {examTitle.isChild ? <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> : ""}
        <div className="title-img-container">
          <img
            className="exam-title-img"
            src={require(`../../../assets/images/${examTitle.imgUrl}.png`)}
            alt="tick"
          />
        </div>
        <div className="title-text">{examTitle.title}</div>
      </div>
    </Link>
  );
};
export default ExamTitle;
