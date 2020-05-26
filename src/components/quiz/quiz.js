import React, { Component } from "react";

class Quiz extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // }
  }
  render() {
    console.log(this.props.location.pathname);
    return(
      <>
      <div className="quiz-header"></div>
      </>
    )
  }
}
export default Quiz; 