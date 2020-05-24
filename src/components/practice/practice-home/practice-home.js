import React, { useState } from "react";
import PracticeSubject from "../practice-subject/practice-subject";
import "./practice-home.css";
import PracticeChapter from "../practice-chapter/practice-chapter";

const PracticeHome = (props) => {
  const chapterList = [
    {
      subject_code: "Maths",
      chapters: [
        {
          chapter_id: 1,
          chapter_title: "M1:Number System",
          isLocked: false,
          question_count: 12,
        },
        {
          chapter_id: 2,
          chapter_title: "M2:Calculas",
          isLocked: true,
          question_count: 12,
        },
      ],
    },
    {
      subject_code: "Physics",
      chapters: [
        {
          chapter_id: 1,
          chapter_title: "P1:Mechanics",
          isLocked: false,
          question_count: 12,
        },
        {
          chapter_id: 2,
          chapter_title: "P2:Thermodynamics",
          isLocked: true,
          question_count: 12,
        },
      ],
    },
  ];

  const subjectList = [
    { subject_title: "Maths", subject_code: "Maths" },
    { subject_title: "Physics", subject_code: "Physics" },
    { subject_title: "Chemestry", subject_code: "Chemestry" },
    {
      subject_title: "English",
      subject_code: "English",
    },
  ];
  const [selectedSubject, setSelectedSubject] = useState(0);
  const [subject, setSubject] = useState("Maths");

  return (
    <>
      <div className="practice-header">
        <div className="practice-header-text">
          {props.match.params.name.toUpperCase() + " "} Practice by Chapter
        </div>
          <div className="practice-header-search-container">
            <input
              className="practice-header-search"
              type="text"
              name="search"
              placeholder="Search..."
              required
            />
          </div>
      </div>
      <div className="practice-container">
        <div className="practice-subject-container">
          {subjectList.map((subject, index) => {
            return (
              <PracticeSubject
                examName={props.match.params.name}
                key={index}
                click={() => {
                  setSubject(subject.subject_code);
                  setSelectedSubject(index);
                }}
                subjectName={subject.subject_title}
                isSelected={index === selectedSubject}
              />
            );
          })}
        </div>
        <div className="practice-chapter-container">
          <PracticeChapter chapters={chapterList.filter((chapters)=>{return chapters.subject_code===subject})[0].chapters }/>
        </div>
      </div>
    </>
  );
};
export default PracticeHome;
