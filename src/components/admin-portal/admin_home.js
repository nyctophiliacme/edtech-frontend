import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminLogin from "./admin_login";
import AddChapter from "./chapter_add";
import AddExam from "./exam_add";
import AddSubject from "./subject_add";
class AdminHome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Switch>
        <Route path={`${this.props.match.path}/l`} component={AdminLogin} />
        <Route
          path={`${this.props.match.path}/addChapter`}
          component={AddChapter}
        />
        <Route path={`${this.props.match.path}/addExam`} component={AddExam} />
        <Route
          path={`${this.props.match.path}/addSubject`}
          component={AddSubject}
        />
        <Redirect to={`${this.props.match.path}/l`} />
      </Switch>
    );
  }
}

export default AdminHome;
