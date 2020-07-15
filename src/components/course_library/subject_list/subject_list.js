import React, { Component } from "react";
import "./subject-list.css"
class SubjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        examList:[] ,
        subjectList:[]
      };
  }
  
  render() {
    return <div className="subject-list-container">
      <p className="subject-list-header"></p>
    </div>;
  }
}

export default SubjectList;