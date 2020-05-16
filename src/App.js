import React from "react";
import { Switch, Route } from 'react-router-dom'
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Marketing from "./components/marketing/marketing";
import PrivacyPolicy from "./components/privacy_policy/privacy_policy";
import AboutUs from "./components/about_us/about_us";
import TermAndCondition from "./components/term_condition/term_condition";

import "./App.css";

function App() {
  return (
    <>
    <Header></Header>
    <Switch>
      <Route exact path='/' component={Marketing}/>
      <Route path='/privacy_policy' component={PrivacyPolicy}/>
      <Route path='/term_condition' component={TermAndCondition}/>
      <Route path='/about_us' component={AboutUs}/>
    </Switch>
    <Footer></Footer>
    </>
  );
}

export default App;
