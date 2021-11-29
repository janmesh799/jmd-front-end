import React, { Component } from "react";
import slide1 from "./images/slide1.JPG";
import slide2 from "./images/slide2.JPG";
import slide3 from "./images/slide3.jpg";
import News from "./News.json";
import "./Home.css";
export class Home extends Component {
  render() {
    return (
      <>
        <div id="news">
          {News.map((post) => {
            return (
              <div className="container news-parent ">
                <marquee>
                  {post.news}
                  <a download href="https://www.google.com/">
                    {" "}
                    &nbsp;&nbsp;click here
                  </a>
                </marquee>
              </div>
            );
          })}
        </div>
        <div className="container y-4">
          <div className="slides my-4">
            <div
              id="carouselExampleIndicators"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={slide1}
                    className="d-block w-100 home-image"
                    alt="..."
                  />
                  {/* <div className="carousel-caption d-none d-md-block">
                  <h5 className="slide-text">Prize Distribution Ceremony.</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div> */}
                </div>
                <div className="carousel-item">
                  <img
                    src={slide2}
                    className="d-block w-100 home-image"
                    alt="..."
                  />
                  {/* <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div> */}
                </div>
                <div className="carousel-item">
                  <img
                    src={slide3}
                    className="d-block w-100 home-image"
                    alt="..."
                  />
                  {/* <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
