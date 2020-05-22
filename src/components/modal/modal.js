import React, { useState, useEffect } from "react";
import "./modal.css";
import Login from "../login/login";
import Register from "../register/register";

const Modal = ({ handleClose, show }) => {
  const showHideClassname = show
    ? "modal display-block modal-animate"
    : "modal display-none modal-animate";
  const [isLogin, setFormType] = useState(true);
  useEffect(() => {
    // console.log(isLogin);
  }, [isLogin]);

  return (
    <div className={showHideClassname}>
      <section className="modal-main ">
        <span
          onClick={() => {
            handleClose();
            setFormType(true);
          }}
          className="modal-close"
          title="Close Modal"
        >
          &times;
        </span>
        {isLogin ? (
          <Login
            handleRegister={() => {
              setFormType(false);
            }}
          />
        ) : (
          <Register
            handleParentClose={() => {
              setFormType(true);
              handleClose();
            }}
          />
        )}
      </section>
    </div>
  );
};
export default Modal;
