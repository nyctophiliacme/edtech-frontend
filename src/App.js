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
import MobileHeader from "./components/mobile_header/mobile_header";
import construction from "./components/under-construction/under-construction";
import "./App.css";
import EmailVerified from "./components/email-verified/email-verified";
import ReactGA from "react-ga";
import CourseLibrary from "./components/course_library/course_library";
import ExamLanding from "./components/exam-landing/exam-landing";
import { withRouter } from "react-router";
import AdminHome from "./components/admin-portal/admin_home";
import { messageService } from "./services/notifyComponentService";
import HowToPay from "./components/pricing/howToPay/howToPay";

ReactGA.initialize("UA-168958894-1");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkDevice: handleResize(),
    };
  }

  componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
    window.addEventListener(
      "resize",
      debounce(() => {
        this.setState({ checkDevice: handleResize() });
      }, 500)
    );

    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  componentDidUpdate = () =>
    ReactGA.pageview(window.location.pathname + window.location.search);

  render() {
    const {
      checkDevice: { isMobile },
    } = this.state;
    return (
      <>
        <Notifications />
        {String(this.props.location.pathname).indexOf("/qazwsxedcrfv") ===
        -1 ? (
          <>
            <MobileHeader isMobile={isMobile}></MobileHeader>
            <Header isMobile={isMobile}></Header>
            <div className="main-container">
              <Switch>
                <Route exact path="/" component={MarketingV2} />
                <Route path="/privacy_policy" component={PrivacyPolicy} />
                <Route path="/term_condition" component={TermAndCondition} />
                <Route path="/about_us" component={AboutUs} />
                <Route
                  path="/exam/:examName/:sectionContainerId"
                  component={ExamHome}
                />
                <Route path="/practice/:examName" component={PracticeHome} />
                <Route path="/pricing" component={Pricing} />
                <Route path="/howToPay" component={HowToPay} />
                <Route path="/quiz" component={Quiz} />
                <Route path="/email_verified" component={EmailVerified} />
                <Route path="/courses/:courseId" component={CourseLibrary} />
                <Route path="/videos" component={construction} />
                <Route path="/career_center" component={construction} />
                <Route path="/resources" component={AboutUs} />
                <Route path="/blog" component={AboutUs} />
                <Route path="/construction" component={construction} />
                <Route path="/examHome/:examcode" component={ExamLanding} />
                {/* <Route path="/auhfdusadjashjhdgasyjg/l" component={AboutUs} /> */}
                <Redirect to="/" />
              </Switch>
            </div>
            <Footer></Footer>
          </>
        ) : (
          <AdminHome />
        )}
      </>
    );
  }
}

export default withRouter(App);
