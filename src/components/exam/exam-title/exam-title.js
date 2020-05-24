import React from "react";
import "./exam-title.css";
const ExamTitle = ({examTitle,isSelected, click}) => {
    
  return (
    <div className={`exam-title-container ${isSelected?'title-selected':''}`} onClick={click} >
    <div className="title-img-container">
      <img className="exam-title-img" src={require(`../../../assets/images/${examTitle.imgUrl}.png`)} alt="tick" />

    </div>
    <div className="title-text">{examTitle.title}</div>
    </div>
  )
};
export default ExamTitle;
