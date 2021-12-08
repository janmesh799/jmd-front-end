import React, { Component } from "react";
import Home from "../Homepage/Home";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Achievements from "../Achievements/Achievements";
import Result from "../Result/Result";
import Courses from "../Courses/Courses";
import logo from "./Images/logo.png";
import Developer from "../Developer/Developer";
import "./NavBar.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <div className="n-0 my-2">
            <strong> JMD SAKSHAM CLASSES</strong> is the coaching centre in
            Aligarh <u> WHERE DREAMS COME TRUE.</u>
          </div> */}
          <div>
            <div className="nav0">
              <img src={logo} className="logo" alt="logo" />
              <div className="contact-nav">
                <div className="contact-elem">
                  <img
                    src="https://imgur.com/yV7uRdU.jpg"
                    className="contact-img mx-4 my-5"
                    alt="mail"
                  />
                  <div className=" contact-content">
                    <p className="contact-head">Mail us</p>
                    <p className="contact-detail">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="contact-detail"
                        href="mailto: jmdsakshamclasses@gmail.com"
                      >
                        jmdsakshamaclasses@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-elem">
                  <img
                    src="https://imgur.com/qC9Bu4J.jpg"
                    className="contact-img mx-4 my-5"
                    alt="call"
                  />
                  <div className=" contact-content">
                    <p className="contact-head">Call us</p>
                    <p className="contact-detail">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="contact-detail"
                        href="tel:+919756399884"
                      >
                        +91-9756399884
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-elem">
                  <img
                    src="https://imgur.com/V7XKUNF.jpg"
                    className="contact-img mx-4 my-5"
                    alt="map"
                  />
                  <div className=" contact-content">
                    <p className="contact-head">Visit Us</p>
                    <p className="contact-detail">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="contact-detail"
                        href="https://www.google.com/maps?ll=27.892132,78.089432&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=11686405336940299490"
                      >
                        Aligarh, UP
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse  navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                  <li className="nav-item " key="home">
                    <Link to="/home" className="nav-link">
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item" key="achievements">
                    <Link to="/achievements" className="nav-link">
                      ACHIEVEMENTS
                    </Link>
                  </li>
                  <li className="nav-item" key="Courses">
                    <Link to="/Courses" className="nav-link">
                      COURSES
                    </Link>
                  </li>
                  <li className="nav-item" key="result">
                    <Link to="/result" className="nav-link">
                      RESULTS & DOWNLOADS
                    </Link>
                  </li>
                  <li className="nav-item" key="about">
                    <Link to="/about" className="nav-link">
                      ABOUT US
                    </Link>
                  </li>

                  <li className="nav-item" key="contact">
                    <Link to="/contact" className="nav-link">
                      CONTACT US
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/achievements">
            <Achievements />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/Courses">
            <Courses />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Developer />
      </Router>
    );
  }
}

export default NavBar;
