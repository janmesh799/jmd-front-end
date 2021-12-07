import React, { Component } from "react";
import "./About.css";
import director from "./images/director.jpg";
import vision from "./images/vision.JPG";
export class About extends Component {
  render() {
    return (
      <>
        {/* About Director */}
        <div className="container component">
          <h2 className="my-5 hover-underline-animation">Director's Message</h2>
          <div className="Director-parent">
            <div>
              <img
                src={director}
                alt="Director DK sir"
                className="Director-child Director-img"
              />
              <p className="label">
                <u>Mr.&nbsp; DK Singh</u>
              </p>
              <p className="desig">
                <u>Director</u>
              </p>
            </div>
            <p className="Director-child my-5 Director-text">
              We believe that action should speak louder than words. We hope to
              follow this in out JMD Saksham Classes and we have suggested in
              the punch line of JMD Saksham Classes in Sanskrit
              <i>
                {" "}
                <b>"उद्यमेन हि सिध्यन्ति कार्याणि"</b>
              </i>{" "}
              which means all the works in this whole world will carry fruits by
              taking hard work in to consideration. It is not about what we are
              thinking but it is all about what we are doing.
              <br />
              <br />
              <span className="text-muted">
                <b>
                  <h4>-DK Singh</h4>
                </b>
              </span>
            </p>
          </div>
        </div>
        {/* About vision */}
        <div className="container component">
          <h2 className="my-5 hover-underline-animation">Vision</h2>
          <div className="Director-parent ">
            <div>
              <img
                src={vision}
                alt="Director DK sir"
                className="Director-child Director-img"
              />
              <p className="label">
                <u>Ms.&nbsp; Riya</u>
              </p>
              <p className="desig">
                <u>Ex-student</u>
              </p>
            </div>

            <p className="Director-child my-5 Director-text">
              To give equal opportunities to all part of the socity especially
              the weaker sectin through scholarly teaching,able guidence and
              best learning method to create skilled work force which halps the
              society to sow the seeds for better future.
            </p>
          </div>
        </div>
        {/* history */}
        <div className="container component">
          <h2 className="my-5 hover-underline-animation">History</h2>
          <div className="Director-parent ">
            <p className="Director-child Director-text">
              Necessity is the mother of invention but here it is the mother of
              miracle. A miracle which has grown manifold - JMD SAKSHAM CLASSES
              . Founded on february 15, 2013 JMD SAKSHAM CLASSES has today
              become a synonym of SUCCESS
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default About;
