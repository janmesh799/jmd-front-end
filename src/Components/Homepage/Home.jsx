import React, { Component } from "react";
import "./Home.scss";
export class Home extends Component {
  render() {
    return (
      <>
      
        <section className="hero ">
          <div className="hero-content">
            <h1 className="hero-title">JMD SAKSHAM CLASSES</h1>
            <h2 className="hero-subtitle">Where Dreams Come True!!!</h2>
            <button type="button" className="hero-button">
              <a className="hero-button" target="_blank" rel="noreferrer"  href="https://forms.gle/Y274PghqPtQb7yxk9">
                Click To fill the Form &raquo;
              </a>
            </button>
          </div>
        </section>
        <section className="fac">
          <div className="artboard">
            <div className="card">
              <div className="card__side card__side--back">
                <div className="card__cover">
                  <h4 className="card__heading">
                    <span className="card__heading-span">CLASSES</span>
                  </h4>
                </div>
                <div className="card__details">
                  <ul>
                    <li>Class V</li>
                    <li>Class VI</li>
                    <li>Class VII</li>
                    <li>Class VIII</li>
                    <li>Class IX</li>
                    <li>Class X</li>
                    <li>Class XI</li>
                  </ul>
                </div>
              </div>

              <div className="card__side card__side--front">
                <div className="card__theme">
                  <div className="card__theme-box">
                    <p className="card__subject">Academics</p>
                    <p className="card__title">Courses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="artboard">
            <div className="card">
              <div className="card__side card__side--back">
                <div className="card__cover">
                  <h4 className="card__heading">
                    <span className="card__heading-span">Entrances</span>
                  </h4>
                </div>
                <div className="card__details">
                  <ul>
                    <li>AMU I<sup>st</sup> Entrance</li>
                    <li>AMU VI<sup>th</sup> Entrance</li>
                    <li>AMU IX<sup>th</sup> Entrance</li>
                    <li>AMU XI<sup>th</sup> Entrance</li>
                    
                  </ul>
                </div>
              </div>

              <div className="card__side card__side--front">
                <div className="card__theme">
                  <div className="card__theme-box">
                    <p className="card__subject">Competitive</p>
                    <p className="card__title">Courses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="artboard">
            <div className="card">
              <div className="card__side card__side--back">
                <div className="card__cover">
                  <h4 className="card__heading">
                    <span className="card__heading-span">OLYMPIADS</span>
                  </h4>
                </div>
                <div className="card__details">
                  <ul>
                    <li>NTSE</li>
                    <li>NSEJs</li>
                    <li>Junior Science Olympiads</li>
                    <li>Junior Maths Olympiads</li>
                    
                  </ul>
                </div>
              </div>

              <div className="card__side card__side--front">
                <div className="card__theme">
                  <div className="card__theme-box">
                    <p className="card__subject">Competitive</p>
                    <p className="card__title">Courses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
