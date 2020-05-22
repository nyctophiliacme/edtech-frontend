import React from "react";
import "./practice-home.css";

const PracticeHome = (props) => {
   return( <div className="practice-header">
        <div className="practice-header-text">
            {props.match.params.name +" "}  Practice by Chapter
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
    </div>);
}
export default PracticeHome;