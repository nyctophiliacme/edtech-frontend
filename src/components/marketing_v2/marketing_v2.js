import React from "react";
import "./marketng_v2.css";
import topBanner from "../../assets/images/top-banner.png";
import illustration1 from "../../assets/images/illustration-03.png";
import illustration2 from "../../assets/images/illustration-02.png";
import illustration3 from "../../assets/images/illustr-03.png";
import click1 from "../../assets/images/click-01.png";
import click2 from "../../assets/images/click-02.png";
import click3 from "../../assets/images/click-03.png";
import { messageService } from "../../services/notifyComponentService";

import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const marketingV2 = () => {
  return (
    <>
      <div className="herov2 marketing-container">
        <div className="hero-imgv2">
          <img src={topBanner} alt="Hero" />
        </div>
        <div className="hero-text-wrapperv2">
          <div className="hero-headerv2">Study &amp; Test prep made easy</div>
          <div className="hero-body-txtv2">
            Easy concise information in one place. Practice for exams 24/7. All
            from your home!
          </div>
          <div className="cta">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeHcR1uoEa852yTnXGuu84Nu8cv9KwMODQ5ErW8i7i0Bgv73Q/viewform"
              className="hero-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discover
            </a>
          </div>
        </div>
      </div>
      <div className="illustrationsv2 marketing-container">
        <div className="illustrations-wrapperv2">
          <div className="illustration-contentv2">
            <div className="illustration-imagev2">
              <span className="helperv2"></span>
              <img src={illustration1} alt="Illustration3" />
            </div>
            <div className="illustration-textv2">
              <div className="illustration-headerv2">
                Concise &amp; <br />
                Convenient
              </div>
              <div className="illustration-bodyv2">
                We have collected the best resources in one place, saving you
                time and money. Now learn at your own pace.
              </div>
              <div className="illustration-footer">Hassle free learning</div>
            </div>
          </div>
          <div className="illustration-contentv2">
            <div className="illustration-imagev2">
              <span className="helperv2"></span>
              <img src={illustration2} alt="Illustration2" />
            </div>
            <div className="illustration-textv2">
              <div className="illustration-headerv2">
                Group <br />
                Learning
              </div>
              <div className="illustration-bodyv2">
                Make friends with smart learners. Ask questions, get answers,
                share notes, come up with new ideas.
              </div>
            </div>
            <div className="illustration-footer">
              The world is waiting to hear from you!
            </div>
          </div>
          <div className="illustration-contentv2 no-right-pad">
            <div className="illustration-imagev2">
              <span className="helperv2"></span>
              <img src={illustration3} alt="Illustration1" />
            </div>
            <div className="illustration-textv2">
              <div className="illustration-headerv2">
                Expert <br />
                Mentors
              </div>
              <div className="illustration-bodyv2">
                Learn valuable tips and tricks from the best teachers. Direct
                access to smart students who aced the exams.
              </div>
            </div>
            <div className="illustration-footer">Take the best shot!</div>
          </div>
        </div>
      </div>
      <div className="video-container">
        <div className="video-heading">How it works</div>
        <div>
          <ReactPlayer
            url="https://youtu.be/6oyKH5WVE3U"
            width="100%"
            height="600px"
            controls={true}
            loop={true}
          />
        </div>
      </div>
      <div className="highlightsv2-container">
        <Link to="/practice/ecat">
          <div className="highlights_content">
            <div className="highlights_img highlight_img1">
              <img src={click1} alt="Hero" />
            </div>
            <div className="highlights_text highlight_text1">
              <div className="highlight-tex-wrapper">
                Improve your ECAT score. Click for practice questions
              </div>
            </div>
          </div>
        </Link>
        <Link
          to={{
            pathname: "/exam/ecat/previousPapers",
            loadPaper: "true",
          }}
        >
          <div className="highlights_content">
            <div className="highlights_img highlight_img2">
              <img src={click2} alt="Hero" />
            </div>
            <div className="highlights_text highlight_text2">
              <div className="highlight-tex-wrapper">
                View 10 year past papers of ECAT all in one place
              </div>
            </div>
          </div>
        </Link>
        {sessionStorage.getItem("isLoggedIn") ? (
          ""
        ) : (
          <div className="highlights_content ">
            <div className="highlights_img highlight_img3">
              <img src={click3} alt="Hero" />
            </div>
            <div
              className="highlights_text highlight_text3"
              onClick={() => {
                messageService.sendMessage("v2 RegiterButton clicked");
              }}
            >
              <div className="highlight-tex-wrapper">
                Register now to access to download free papers and information
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default marketingV2;
