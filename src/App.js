import React from "react";
import { Switch, Route } from 'react-router-dom'
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Marketing from "./components/marketing/marketing";
import PrivacyPolicy from "./components/privacy_policy/privacy_policy";
import AboutUs from "./components/about_us/about_us";
import TermAndCondition from "./components/term_condition/term_condition";
import MarketingV2 from "./components/marketing_v2/marketing_v2";
import ExamHome from "./components/exam/examHome/exam_home";
import PracticeHome from "./components/practice/practice-home/practice-home";
import Notifications, {notify} from 'react-notify-toast';
import "./App.css";


function App() {
  return (
    <>
    <Notifications />
    <Header></Header>
    <Switch>
      <Route exact path='/' component={Marketing}/>
      <Route path='/privacy_policy' component={PrivacyPolicy}/>
      <Route path='/term_condition' component={TermAndCondition}/>
      <Route path='/about_us' component={AboutUs}/>
      <Route path='/home' component={MarketingV2}/>
      <Route path='/exam/:name' component={ExamHome} />
      <Route path='/practice/:name' component={PracticeHome} />
    </Switch>
    <Footer></Footer>
    </>
  );
}

export default App;
