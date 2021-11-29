import React, { Component } from "react";
import Home from "../Homepage/Home";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Achievements from "../Achievements/Achievements";
import Result from "../Result/Result";
import Why from "../Why/Why";
import logo from "./Images/logo.jpeg";
import Developer from "../Developer/Developer";
import "./NavBar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export class NavBar extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/home">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
            <div className="container-fluid">
              <Link to="/home" className="navbar-brand">
                JMD SAKSHAM CLASSES
              </Link>
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
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/home" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/achievements" className="nav-link">
                      Achievements
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Why" className="nav-link">
                      Why JMD Saksham Calsses??
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/result" className="nav-link">
                      Results & Downloads
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact Us
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
          <Route path="/Why">
            <Why />
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
