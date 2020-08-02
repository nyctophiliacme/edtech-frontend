import React, { Component } from "react";
import "./exam-landing.css";
import PracticeHome from "../practice/practice-home/practice-home";
import ExamHome from "../exam/examHome/exam_home";
import construction from "../under-construction/under-construction";
import { Link, withRouter, Route, Switch } from "react-router-dom";
class ExamLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SelectedTab: "/practice",
    };
  }
  render() {
    return (
      <>
        <div className="exam-home-header-container">
          <div className="exam-home-heading">
            {this.props.match.params.examcode}
          </div>
          <div className="exam-home-tab-container">
            <Link to={`${this.props.match.url}/practice/physics`}>
              <div className={`exam-home-tab-item ${this.props.location.pathname.includes('practice')?'exam-tab-item-selected':''}`}>practice</div>
            </Link>
            <Link to={`${this.props.match.url}/assesment`}>
              <div className={`exam-home-tab-item ${this.props.location.pathname.includes('assesment')?'exam-tab-item-selected':''}`}>assesment</div>
            </Link>
            <Link to={`${this.props.match.url}/info/home`}>
              <div className={`exam-home-tab-item ${this.props.location.pathname.includes('info')?'exam-tab-item-selected':''}`}>info</div>
            </Link>
          </div>
        </div>
        <Switch>
          <Route
            path={`${this.props.match.path}/practice/:subjectName`}
            component={PracticeHome}
          />
          <Route
            path={`${this.props.match.path}/assesment`}
            component={construction}
          />
          <Route
            path={`${this.props.match.path}/info/:defaultSection`}
            component={construction}
          />
        </Switch>
      </>
    );
  }
}
export default withRouter(ExamLanding);
