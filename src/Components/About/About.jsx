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
              A premier coaching institute for the preparation of{" "}
              <b>
                Pre-Nurture & Career Foundation (Class VI to X, NTSE &
                Olympiads)
              </b>
              . The JSC is well regarded for{" "}
              <u>
                entrance exams preparation and produces best results year after
                year
              </u>
              . At JSC, we focus on building a strong foundation of knowledge
              and concepts in students for their success and provide an
              excellent platform for the preparation of competitive exams and
              board level education. The best academic support and personal care
              which we provide to the students helps them meet their career
              goals and objectives. The core values of
              <b>
                {" "}
                Determination, Honesty, Authenticity, Integrity, Devotion,
                Humanism, Holistic Learning, Social Ethics, and concern for
                society & environment
              </b>{" "}
              are all closely interwoven into the fiber of our academic
              programs. Our highly qualified and most experienced faculties are
              dedicated and committed to student’s complete success and provide
              assistive surroundings to contribute to their social, cultural,
              academic and all-round development. <br />
              <br />
              To our students, we impart value-based career education, abundant
              resources, and individual attention. <br />
              <br />
              To the parents, we have a responsibility to nurture ethical and
              responsible career leadership in the children. To the society, we
              provide a lifelong connection to ethics and excellence in global
              leaders.
            </p>
          </div>
        </div>
        {/* history */}
        <div className="container component">
          <h2 className="my-5 hover-underline-animation">History</h2>
          <div className="Director-parent ">
            <p className="Director-child Director-text">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
          </div>
        </div>

              </>
    );
  }
}

export default About;
