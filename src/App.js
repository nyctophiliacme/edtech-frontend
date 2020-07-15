import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import PrivacyPolicy from "./components/privacy_policy/privacy_policy";
import AboutUs from "./components/about_us/about_us";
import TermAndCondition from "./components/term_condition/term_condition";
import MarketingV2 from "./components/marketing_v2/marketing_v2";
import ExamHome from "./components/exam/examHome/exam_home";
import PracticeHome from "./components/practice/practice-home/practice-home";
import Notifications from "react-notify-toast";
import Pricing from "./components/pricing/pricing";
import Quiz from "./components/quiz/quiz";
import { handleResize, debounce } from "./common/deviceDetection";
import MobileHeader from "./components/mobile_header/mobile_header"

import "./App.css";
import EmailVerified from "./components/email-verified/email-verified";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-168958894-1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkDevice: handleResize(),
    };
  }

  componentDidMount() {
    window.addEventListener(
      "resize",
      debounce(() => {
        this.setState({ checkDevice: handleResize() });
      }, 500)
    );

    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  componentDidUpdate = () => ReactGA.pageview(window.location.pathname + window.location.search);

  render() {
    const {
      checkDevice: { isMobile },
    } = this.state;

    return (
      <>
        <Notifications />
         <MobileHeader isMobile={isMobile}></MobileHeader> 
         <Header isMobile={isMobile}></Header>
        <Switch>
          <Route exact path="/" component={MarketingV2} />
          <Route path="/privacy_policy" component={PrivacyPolicy} />
          <Route path="/term_condition" component={TermAndCondition} />
          <Route path="/about_us" component={AboutUs} />
          <Route path="/exam/:examName/:defaultSection" component={ExamHome} />
          <Route path="/practice/:examName" component={PracticeHome} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/email_verified" component={EmailVerified} />
          <Route path="/courses" component={AboutUs} />
          <Route path="/videos" component={AboutUs} />
          <Route path="/career_center" component={AboutUs} />
          <Route path="/resources" component={AboutUs} />
          <Route path="/blog" component={AboutUs} />
          <Redirect to="/" />
        </Switch>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
