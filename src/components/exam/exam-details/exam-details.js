import React from "react";
import "./exam-details.css";
import taketest from "../../../assets/images/taketest.png";
import practice from "../../../assets/images/practice.png";
import { Link } from "react-router-dom";
import { examDetailsCompleteData } from "../exam-ecat-data";

const ExamDetails = ({ name, subSection }) => {
  const examDetailsData = examDetailsCompleteData.filter((item) => {
    return item.subSection === subSection;
  })[0]?.data;
 console.log(examDetailsData);
  const renderActionDiv = () => {
    if (subSection === "home") {
      return (
        <div className="action-container">
          <div className="exam-action">
            <div className="exam-action-img">
              <img src={taketest} alt="test" />
            </div>
            <div className="exam-action-text">Take a Test</div>
          </div>
          <Link to={`/practice/ ${name.toUpperCase()}`}>
            <div className="exam-action">
              <div className="exam-action-img">
                <img src={practice} alt="test" />
              </div>
              <div className="exam-action-text">Practice by Chapter</div>
            </div>
          </Link>
        </div>
      );
    }
  };

  const listItems = (items) => {
    return (
      <ul className="details-ul">
        {items.map(function (item, index) {
          return (
            <li className="exam-details-text" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    );
  };

  const renderTableType = (ed) => {
    console.log(ed);
    return (
      // <div className="exam-details-table-container">
      //   <div className="exam-details-table-header">{ed.heading}</div>
      //   <div className="exam-details-table-content">
      //     {ed.items.map(function (item, index) {
      //       return (
      //         <div className="exam-details-table-subcontent" key={index}  >
      //           {item.columnText}
      //           <br />
      //           {item.columnValue}
      //         </div>
      //       );
      //     })}
      //   </div>
      // </div>
      <table className="exam-details-table-container">
        <tr className="exam-details-table-header">
          <th colSpan={ed.items.length}>{ed.heading}</th>
        </tr>
        <tr className="exam-details-table-content">
          {ed.items.map(function (item, index) {
            return (
              <td className="exam-details-table-subcontent" key={index}>
                {item.columnText}
                <br />
                {item.columnValue}
              </td>
            );
          })}
        </tr>
      </table>
    );
  };
  return (
    <>
      {renderActionDiv()}
      <div>
        {examDetailsData.map(function (ed, index) {
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
          } else if (ed.type === "list") {
            return (
              <div className="exam-details-heading" key={index}>
                {ed.heading}
                {ed.listHeader ? (
                  <h2 className="exam-details-text">{ed.listHeader}</h2>
                ) : (
                  ""
                )}
                {listItems(ed.items)}
              </div>
            );
          } else if (ed.type === "table") {
            return (
              <div>
              {renderTableType(ed)}
              </div>
              );                  
          }
        })}
      </div>
    </>
  );
};
export default ExamDetails;
