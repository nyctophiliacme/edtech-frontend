import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import AdminLogin from "./admin_login";
import UserManage from "./user_manage";
import AddExam from "./exam_add";
import AddSubject from "./subject_add";
import AddChapter from "./chapter_add";
import ViewQuestion from "./question_view";
class AdminHome extends Component {
  render() {
    return (
      <div>
        {this.props.location.pathname === "/ad" ? null : (
          <div>
            <span>
              <Link to="/ad/e">Exam </Link>
            </span>
            <span>
              <Link to="/ad/u">User </Link>
            </span>
          </div>
        )}
        <Switch>
          <Route exact path="/ad" component={AdminLogin} />
          <Route exact path="/ad/u" component={UserManage} />
          <Route exact path="/ad/e" component={AddExam} />
          <Route exact path="/ad/:eId/s" component={AddSubject} />
          <Route exact path="/ad/:eId/:sId/c" component={AddChapter} />
          <Route
            exact
            path="/ad/:eId/:sId/:cId/:cTitle/q"
            component={ViewQuestion}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(AdminHome);
