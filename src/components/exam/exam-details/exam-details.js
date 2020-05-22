import React from "react";
import "./exam-details.css";
import taketest from "../../../assets/images/taketest.png";
import practice from "../../../assets/images/practice.png";
import { Link } from "react-router-dom";

const ExamDetails = ({ name, examDetails }) => {
  const examdetailsdata = [
    {
      heading: "What is ECAT?",
      type: "para",
      items: [
        "Engineering College Admission Test (ECAT) is a test conducted in Punjab, Pakistan each year for admission in BE/BS/BSc Engineering degree programs. ECAT is conducted by the University of Engineering and Technology, Lahore. Each year some 45,000 students attempt this test while there are some 3,000 seats in public sector engineering institutions of the Punjab.",
        "ECAT is a prerequisite for admission in the University of Engineering and Technology, Lahore, and its affiliated institutions and all other public sector engineering institutions in the Punjab. Some private institutions also require ECAT as a prerequisite.",
      ],
    },

    {
      heading: "Eligibility",
      type: "list",
      items: [
        "Applicants who have passed or have appeared in F.Sc. / Intermediate, B.Sc., DAE, B.Tech. (Pass), or any Equivalent Examination may apply for Entry Test.",
        "OR applicants who have successfully taken the F.Sc (part-II) / equivalent A-Level exams and are awaiting are eligible to sit in the test on the basis of their 1st year marks.",
      ],
    },
    {
      heading: "Schedule",
      type: "para",
      items: ["ECAT is conducted once a year during the month of July."],
    },
    {
      heading: "Application process",
      type: "list",
      items: [
        "The Entry Test Application filled online through the web link http://admission.uet.edu.pk as the admission date announce (admission started in June probably every year)",
        "The UET exam fee is Rs 700/-",
        "UET ECAT tokens are available at the HBL designated Branches by paying a fee of Rs 700/-",
        "Login to UET admission Portal",
        "Fill out the application online according to the instructions",
        "After filling the form and read it again and then submit the application",
        "Now after submitting the form, the applicant is able to download the admit card",
        "Print the admit card for exam day",
        "Bring CNIC and Admit card on exam day",
      ],
    },
  ];
  
  return (
    <>
      <div className="action-container">
        <div className="exam-action">
          <div className="exam-action-img">
            <img src={taketest} alt="test" />
          </div>
          <div className="exam-action-text">Take a Test</div>
        </div>
        <Link to={`/practice/ ${name.toUpperCase()}`}>
          <div className="exam-action" >
            <div className="exam-action-img">
              <img src={practice} alt="test" />
            </div>
            <div className="exam-action-text">Practice by Chapter</div>
          </div>
        </Link>
      </div>

      <div>
        {examdetailsdata.map(function (ed, index) {
          if (ed.type === "para") {
            return (
              <div className="exam-details-heading" key={index}>
                {ed.heading}
                <div>
                  {ed.items.map(function (item, index) {
                    return (
                      <p className="exam-details-text" key={index}>
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          } else {
            return (
              <div className="exam-details-heading" key={index}>
                {ed.heading}{" "}
                <ul>
                  {ed.items.map(function (item, index) {
                    return (
                      <li className="exam-details-text" key={index}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
export default ExamDetails;
