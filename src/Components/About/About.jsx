import React, { Component } from "react";
import "./About.scss";
export class About extends Component {
  render() {
    return (
      <>
        {/* history */}
        <div className="container component">
          <h2 className="my-5 hover-underline-animation con-head">About JSC</h2>
          <div className="Director-parent ">
            <p className="Director-child about-text">
              <strong>
                Necessity is the mother of invention but here it is the mother
                of miracle. A miracle which has grown manifold - JMD SAKSHAM
                CLASSES . Founded on february 15, 2012 ,JMD SAKSHAM CLASSES has
                today become a synonym of SUCCESS.
              </strong>
              <br />A premier coaching institute for the preparation of
              Pre-Nurture & Career Foundation (Class V to X board, NTSE &
              Olympiads). The JSC is well regarded for entrance exams
              preparation and produces best results year after year. At JSC, we
              focus on building a strong foundation of knowledge and concepts in
              students for their success and provide an excellent platform for
              the preparation of competitive exams and board level education.
              The best academic support and personal care which we provide to
              the students helps them meet their career goals and objectives.
              The core values of Determination, Honesty, Authenticity,
              Integrity, Devotion, Humanism, Holistic Learning, Social Ethics,
              and concern for society & environment are all closely interwoven
              into the fiber of our academic programs. Our highly qualified and
              most experienced faculties are dedicated and committed to
              student’s complete success and provide assistive surroundings to
              contribute to their social, cultural, academic and all-round
              development. To our students, we impart value-based career
              education, abundant resources, and individual attention. To the
              parents, we have a responsibility to nurture ethical and
              responsible career leadership in the children. To the society, we
              provide a lifelong connection to ethics and excellence in global
              leaders.
            </p>
          </div>
        </div>
        {/* About Director */}
        <div className="container component">
          <h2 className="my-5 hover-underline-animation con-head">
            Director's Message
          </h2>
          <div className="Director-parent">
            <div>
              <img
                src="https://imgur.com/cUAVeW8.jpg"
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
              <br/><br/>We believe that action should speak louder than words. We hope to
              follow this in JMD Saksham Classes and we have suggested in the
              punch line of JMD Saksham Classes in Sanskrit
              <i>
                {" "}
                <b className="blue">"उद्यमेन हि सिध्यन्ति कार्याणि"</b>
              </i>{" "}
              which means all the works in this whole world will carry fruits by
              taking hard work in to consideration. It is not about what we are
              thinking but it is all about what we are doing.
              <br />
              <br />
              <span className="text-muted desig">
                <b>
                  <h4>-DK Singh</h4>
                </b>
              </span>
            </p>
          </div>
        </div>
        {/* About vision */}
        <div className="container component">
          <h2 className="my-5 hover-underline-animation con-head">Vision</h2>
          <div className="Director-parent2 ">
            <p className="Director-child my-5 Director-text">
             <br/><br/> To give equal opportunities to all part of the socity especially
              the weaker sectin through scholarly teaching,able guidence and
              best learning method to create skilled work force which halps the
              society to sow the seeds for better future.
            </p>
            <div>
              <img
                src="https://imgur.com/tInkoLf.jpg"
                alt="Director DK sir"
                className="Director-child Director-img"
              />
              <p className="label">
                <u>Mrs.&nbsp;Brajmala Singh </u>
              </p>
              <p className="desig">
                <u>Executive Director</u>
              </p>
            </div>
          </div>
        </div>
        <div className="container component">
          <h2 className="my-5 hover-underline-animation con-head">Mission</h2>
          <div className="Director-parent ">
            <div>
              <img
                src="https://imgur.com/Xoi0aNO.jpg"
                alt="Director DK sir"
                className="Director-child Director-img"
              />
              <p className="label">
                <u>Mr.&nbsp;Deepak Upadhyay </u>
              </p>
              <p className="desig">
                <u>Manager</u>
              </p>
            </div>
            <p className="Director-child my-5 Director-text"><br/>
             <br/> True aim of Education not a preparation for exam but to face
              challenges in their career and to refine nurture and shape of
              their talent in right dimension.Certainly we all shall be
              benefitted by it precisely I would like to express my heartily
              Thank fullness for your immense trust in us.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default About;
