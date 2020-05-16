import React from "react";
import logo from "./assets/images/logo.png";
import topBanner from "./assets/images/top-banner-img.png";
import illustration1 from "./assets/images/illustration-01.png";
import illustration2 from "./assets/images/illustration-02.png";
import illustration3 from "./assets/images/illustration-03.png";
import tick from "./assets/images/tick.png";
import facebook from "./assets/images/facebook.png";
import youtube from "./assets/images/youtube.png";

import "./App.css";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <header className="logo-header">
        <img src={logo} alt="logo" />
      </header>
      <div className="hero">
        <div className="hero-img">
          <img src={topBanner} alt="Hero" />
        </div>
        <div className="hero-text-wrapper">
          <div className="hero-header">Get into your dream University !</div>
          <div className="hero-body-txt">
            The premium online Entry test prep from Super Teacher is starting
            soon in Pakistan!
          </div>
          <div className="hero-discount-txt">
            Get a 15% discount before launch!
          </div>
          <div className="cta">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeHcR1uoEa852yTnXGuu84Nu8cv9KwMODQ5ErW8i7i0Bgv73Q/viewform"
              className="hero-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
      <div className="illustrations">
        <div className="illustrations-wrapper">
          <div className="illustration-content">
            <div className="illustration-image">
              <span className="helper"></span>
              <img src={illustration1} alt="Illustration1" />
            </div>
            <div className="illustration-text">
              <div className="illustration-header">Get Ready for the Exam</div>
              <div className="illustration-body">
                Take tests made from past papers and mock exams in a timed
                environment.
              </div>
            </div>
          </div>
          <div className="illustration-content">
            <div className="illustration-image">
              <span className="helper"></span>
              <img src={illustration2} alt="Illustration2" />
            </div>
            <div className="illustration-text">
              <div className="illustration-header">Practice to Perfection</div>
              <div className="illustration-body">
                We have made practice tests of each chapter to help you master
                each topic.
              </div>
            </div>
          </div>
          <div className="illustration-content">
            <div className="illustration-image">
              <span className="helper"></span>
              <img src={illustration3} alt="Illustration3" />
            </div>
            <div className="illustration-text">
              <div className="illustration-header">
                Concise &amp; Convenient
              </div>
              <div className="illustration-body">
                Find everything you need to know about ECAT in one place, save
                time.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="prepping-container">
        <div className="prepping-date">
          Entry Test ECAT 2020 for UET Lahore on 13/14 June 2020
        </div>
        <div className="prepping-date">
          GIKI, NUST, FAST. GIKI dates coming soon!
        </div>
        <div className="prepping-start">Start Preparing</div>
        <div className="cta">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeHcR1uoEa852yTnXGuu84Nu8cv9KwMODQ5ErW8i7i0Bgv73Q/viewform"
            className="hero-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Waitlist
          </a>
        </div>
      </div>
      <div className="highlights-container">
        <div className="highlights-sub-contatiner">
          <div className="highlight-item">
            <div>
              <img className="bullet" src={tick} alt="bullet" />
            </div>
            <div className="highlight-item-text">
              5000+ practice questions with solutions and explanations
            </div>
          </div>
          <div className="highlight-item">
            <div>
              <img className="bullet" src={tick} alt="bullet" />
            </div>
            <div className="highlight-item-text">
              Maths, Physics, Chemistry, English
            </div>
          </div>
          <div className="highlight-item">
            <div>
              <img className="bullet" src={tick} alt="bullet" />
            </div>
            <div className="highlight-item-text">
              100+ practice tests with answers
            </div>
          </div>
        </div>
        <div className="highlights-sub-contatiner">
          <div className="highlight-item">
            <div>
              <img className="bullet" src={tick} alt="bullet" />
            </div>
            <div className="highlight-item-text">
              10 years past papers with answers
            </div>
          </div>
          <div className="highlight-item">
            <div>
              <img className="bullet" src={tick} alt="bullet" />
            </div>
            <div className="highlight-item-text">Progress tracker</div>
          </div>
          <div className="highlight-item">
            <div>
              <img className="bullet" src={tick} alt="bullet" />
            </div>
            <div className="highlight-item-text">Prep in bite size</div>
          </div>
          <div className="highlight-item">
            <div>
              <img className="bullet" src={tick} alt="bullet" />
            </div>
            <div className="highlight-item-text">
              Study tips from the toppers
            </div>
          </div>
        </div>
      </div>
      <div className="nopayment-container">
        <div className="nopayment-container-info">
          <div className="nopayment-heading">No payment required</div>
          <div className="nopayment-text">
            If you register before the launch you get 15% discount on the
            standard package price (to be announced on launch day)
          </div>
        </div>
        <div className="nopayment-container-join cta">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeHcR1uoEa852yTnXGuu84Nu8cv9KwMODQ5ErW8i7i0Bgv73Q/viewform"
            className="hero-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Waitlist
          </a>
        </div>
      </div>

      <div className="query-container">
        <div className="query-heading">Any questions?</div>
        <div className="query-text">
          Please send an email to{" "}
          <a
            className="query-mail"
            href="mailto:info@superteacher.pk"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@superteacher.pk
          </a>
          &nbsp;and we’ll get back to you as quickly as we can
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-container-left">
          <div className="footer-text">
            <a href="#">ABOUT US</a>
          </div>
          <div className="footer-text">
            <a href="#">PRIVACY POLICY</a>
          </div>
          <div className="footer-text">
            <a href="#">TERMS &amp; CONDITIONS</a>
          </div>
        </div>
        <div className="footer-container-right">
          <div className="footer-contact">
            <a href="#">CONTACT US</a>
          </div>
          <div className="footer-address">
            131 B, DHA Phase 1,
            <br />
            Lahore Cantt, Lahore
          </div>
          <div className="footer-icons">
            <a
              href="https://www.facebook.com/superteacher.pk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="facebook" src={facebook} alt="facebook" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC4lqvTvbFpuP-yu2PlohbEg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="youtube" src={youtube} alt="youtube" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
