import React from "react";
import "./modal.css";
import Login from "../login/login";
import Register from "../register/register";
import { useHistory } from "react-router-dom";
import Upgrade from "../upgarde/upgrade";
import { messageService } from "../../services/notifyComponentService";
import ReportProblem from "../report_problem/report_problem";
import Help from "../help/help";
import RegisterLanding from "../register/register_landing/register_landing";
import EmailVerificatio from "../register/email-verification/email-verification";

const Modal = ({ handleClose, show, type }) => {
  const showHideClassname = show
    ? "modal display-block modal-animate"
    : "modal display-none modal-animate";
  let history = useHistory();

  return (
    <div className={showHideClassname}>
      <section className="modal-main ">
        <span
          onClick={() => {
            handleClose();
          }}
          className="modal-close"
          title="Close Modal"
        >
          &times;
        </span>
        {type === "login" ? (
          <Login
            loadRegisterForm={() => {
              messageService.sendMessage("v2 RegiterButton clicked");
            }}
            handleModalClose={() => {
              handleClose();
            }}
            redirect={history}
          />
        ) : type === "register" ? (
          <Register
            handleModalClose={() => {
              handleClose();
            }}
          />
        ) : type === "reportProblem" ? (
          <ReportProblem handleModalClose={() => {
            handleClose();
          }}/>
        ) : type === "help" ? (
          <Help handleModalClose={() => {
            handleClose();
          }}/>
        ) : (
          <Upgrade
            handleModalClose={() => {
              handleClose();
            }}
          />
        )}
      </section>
    </div>
  );
};
export default Modal;
