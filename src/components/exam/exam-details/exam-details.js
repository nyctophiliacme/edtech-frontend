import React from "react";
import "./exam-details.css";
import taketest from "../../../assets/images/taketest.png";
import practice from "../../../assets/images/practice.png";
import pdfIcon from "../../../assets/images/Pdf_icon.png";
import { examDetailsCompleteData } from "../exam-ecat-data";
import { notify } from "react-notify-toast";
import { messageService } from "../../../services/notifyComponentService";

const ExamDetails = ({ name, subSection }) => {
  const examDetailsData = examDetailsCompleteData.filter((item) => {
    return item.subSection === subSection;
  })[0]?.data;

  const startPractice = () => {
    if (!sessionStorage.getItem("isLoggedIn")) {
      messageService.sendMessage("user trying to access without login");
      sessionStorage.setItem("targetUrl","practice");
    } else {
      this.props.history.push({
        pathname: "/practice/"+name,
      });
    }
  };

  const renderActionDiv = () => {
    if (subSection === "home") {
      return (
        <div className="action-parent-container">
          <div className="action-container">
            <div className="exam-action">
              <div className="exam-action-img">
                <img src={taketest} alt="test" />
              </div>
              <div
                className="exam-action-text"
                onClick={() => {
                  notify.show(
                    <div className="notify-container">Coming Soon...</div>,
                    "success",
                    8000
                  );
                }}
              >  Take a Test
              </div>
            </div>
              <div className="exam-action" onClick={startPractice}>
                <div className="exam-action-img">
                  <img src={practice} alt="test" />
                </div>
                <div className="exam-action-text">Practice by Chapter</div>
              </div>
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
    return (
      <div>
        {items.map((item, index) => {
          return (
            <div
              className="exam-details-download-container exam-details-text-paper "
              key={index}
            >
              <a
                href={item.link}
                className="exam-detail-download"
                target="_blank"
                download={`${2019-index}EcatPaper.pdf`}
              >
                <img className="pdf-icon" src={pdfIcon} alt="test" />
                <span className="paper-item-text">{item.text}</span>
              </a>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {/* {renderActionDiv()} removing action div*/}
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
                    {ed.listHeader.split("</br>").map((lh, index) => {
                      return (
                        <h2 key={index} className="exam-details-text">
                          {lh}
                        </h2>
                      );
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
          } else {
            return <div> No Data found</div>;
          }
        })}
      </div>
    </>
  );
};
export default ExamDetails;
