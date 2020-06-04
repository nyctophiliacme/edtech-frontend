import React, { useEffect, useState } from "react";
import logo from "../../assets/images/ST_logo.png";
import {
  faBars,
  faArrowLeft,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./mobile_header.css";
import { messageService } from "../../services/notifyComponentService";

library.add(faBars, faArrowLeft, faAngleDown, faAngleUp);

const MobileHeader = ({ isMobile }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [ShowEntryTestList, SetShowEntryTestList] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className={`mob-hdr-container ${isMobile ? "" : "hide-header"}`}>
        <div className="mob-hdr-menuIcon">
          <FontAwesomeIcon icon="bars" onClick={toggleMenu} />
        </div>
        <div className="mob-hdr-logo">
          <Link to="/">
            <img className="img-logo" src={logo} alt="logo" />
          </Link>
        </div>
      </div>
      <div className={`side-panel ${showMenu ? "side-panel-show" : ""}`}>
        <div className="mbl-hdr-back-arrow" onClick={toggleMenu}>
          <FontAwesomeIcon icon="arrow-left" />
        </div>
        <Link to="/">
          <div className="mbl-hdr-menu-item" onClick={toggleMenu}>
            Home
          </div>
        </Link>

        <div className="mbl-hdr-menu-item" onClick={()=>{
           messageService.sendMessage(
            "user trying to access without login"
          );
          setShowMenu(!showMenu);
          }}>
          Login
        </div>
        <div
          className="mbl-hdr-menu-item"
          onClick={() => {
            SetShowEntryTestList(!ShowEntryTestList);
          }}
        >
          Entry Tests
          <FontAwesomeIcon
            className="mbl-hdr-menu-item-arrow"
            icon={ShowEntryTestList ? "angle-up" : "angle-down"}
          />
        </div>
        {ShowEntryTestList ? (
          <Link to="/exam/ecat/home">
            <div
              className="mbl-hdr-menu-item mbl-hdr-sub-item"
              onClick={toggleMenu}
            >
              ECAT
            </div>
          </Link>
        ) : (
          ""
        )}

        <Link to="/practice/ecat">
          <div className="mbl-hdr-menu-item last-item" onClick={toggleMenu}>
            Practice
          </div>
        </Link>
      </div>
    </>
  );
};
export default MobileHeader;
