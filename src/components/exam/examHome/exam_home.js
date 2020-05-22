import React, { useState, useEffect } from "react";
import ExamTitle from "../exam-title/exam-title";
import ExamDetails from "../exam-details/exam-details";
import "./exam-home.css";

const ExamHome = (props) => {
  
  const examTitles=[{
    imgUrl:'../../../assets/images/tick.png',
    title:'ECAT Home',
    subtitle: null
  },
  {
    imgUrl:'../../../assets/images/up-arrow.png',
    title:'Sylabus',
    subtitle: [{
      imgUrl:'../../../assets/images/up-arrow.png',
      title:'Sylabus'
      }  ]
  }
]
const [selectedTitle, setselectedTitle] = useState(0);


  return( 
  <div className="examhome-container">
    <div className="exam-titlelist-Container">
      {
        examTitles.map(function(et,index) {
          return <ExamTitle examTitle={et} key={index} click={()=>{setselectedTitle(index);}} isSelected={index===selectedTitle} />;
        })
      }
    </div>
    <div className="exam-details-Container">
       <ExamDetails name={props.match.params.name}/>
    </div>
    </div>
    );
};
export default ExamHome;
