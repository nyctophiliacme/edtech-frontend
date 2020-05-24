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

  const renderActionDiv = () => {
    if (subSection === "home") {
      return (
        <div className="action-parent-container">
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
    return (
      <table className="exam-details-table-container">
        <thead className="exam-details-table-container">
          <tr className="exam-details-table-header">
            <th colSpan={ed.items.length}>{ed.heading}</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    );
  };

  const renderPaperList = (items) => {
    return(
      <div>
        {items.map((item,index)=>{
          return (
          <div className="exam-details-download-container exam-details-text " key={index}>
              <a href={item.link}  className="exam-detail-download" target="_self" download>{item.text}</a>
          </div>)
        })
        }
      </div>
    )
  };

  return (
    <>
      {renderActionDiv()}
      <div className="exam-details-container">
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
                  <div>
                    {ed.listHeader.split('</br>').map((lh,index)=>{
                      return <h2 key={index} className="exam-details-text">{lh}</h2>
                    })}
                  </div>
                  
                ) : (
                  ""
                )}
                {listItems(ed.items)}
              </div>
            );
          } else if (ed.type === "table") {
            return <div key={index}>{renderTableType(ed)}</div>;
          } else if (ed.type === "paper") {
            return (
              <div className="exam-details-heading" key={index}>
                {ed.heading}
                {renderPaperList(ed.items)}
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
export default ExamDetails;
