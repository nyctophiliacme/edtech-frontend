import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminLogin from "./admin_login";
import AddExam from "./exam_add";
import AddSubject from "./subject_add";
import AddChapter from "./chapter_add";
class AdminHome extends Component {
    constructor(props) {
      super(props);
      
    }
render(){
return <div>
<Switch>
    <Route exact path="/ad" component={AdminLogin}/>
    <Route exact path="/ad/e" component={AddExam}/>
    <Route exact path="/ad/:eId/s" component={AddSubject}/>
    <Route exact path="/ad/:eId/:sId/c" component={AddChapter}/>

</Switch>

</div>;


}
}

export default AdminHome;