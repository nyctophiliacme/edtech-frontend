import React from "react";
import "./marketing.css";
import topBanner from "../../assets/images/top-banner-img.png";
import illustration1 from "../../assets/images/illustration-01.png";
import illustration2 from "../../assets/images/illustration-02.png";
import illustration3 from "../../assets/images/illustration-03.png";
import tick from "../../assets/images/tick.png";
const marketing = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-img">
          <img src={topBanner} alt="Hero" />
        </div>
        <div className="hero-text-wrapper">
          <div className="hero-header">The best tool for Self Study ! </div>
          <div className="hero-body-txt">
            Superteacher is the source for trusted content in Pakistan. Our
            online test preparation allows you to prepare for ECAT from the
            comfort of your home
          </div>
          <div className="hero-discount-txt">Launching on 27 May 2020 </div>
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
          <div className="hero-body-txt, hero-body-sub-text">
            Also get a <span className="hero-body-text-highlight">FREE ECAT diagnostic test</span> sent to your email address
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
                Practice questions by topics with varying difficulty levels and get solutions with explanation.
              </div>
            </div>
          </div>
          <div className="illustration-content">
            <div className="illustration-image">
              <span className="helper"></span>
              <img src={illustration2} alt="Illustration2" />
            </div>
            <div className="illustration-text">
              <div className="illustration-header">Simple design</div>
              <div className="illustration-body">
                Our clean and simple interface lets you learn easily.
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
                Everything you need to know about ECAT, all in one place.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="prepping-container">
        <div className="prepping-date">
          ECAT 2020 for UET Lahore on 13/14 June 2020
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
    </>
  );
};
export default marketing;
