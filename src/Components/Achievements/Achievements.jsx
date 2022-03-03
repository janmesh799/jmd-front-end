import React, { Component } from "react";
import "./Achievements.css";
import data1 from "./Data1.json";
import data2 from "./Data2.json";
import data3 from "./Data3.json";
export class Achievements extends Component {
  render() {
    return (
      <>
        <h1 className="my-5">
          <u>Recent Year Achievements</u>
        </h1>
        <div className="container parent">
          {data1.map((post) => {
            return (
              <div className="card c">
                <img
                  className="card-img-top"
                  src={post.path}
                  alt=" koi toh tha"
                />
                <div className="card-body">
                  <p className="card-text">
                    <span>{post.name.toUpperCase()}</span>
                    <br />
                    <span>{post.achieve}</span>
                    <br />
                    <span>{post.year}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <h1 className="my-5">
          <u>Past Year Achievements</u>
        </h1>
        <div className="container parent">
          {data2.map((post) => {
            return (
              <div className="card c">
                <img
                  className="card-img-top"
                  src={post.path}
                  alt=" koi toh tha"
                />
                <div className="card-body">
                  <p className="card-text">
                    <span>{post.name.toUpperCase()}</span>
                    <br />
                    <span>{post.achieve}</span>
                    <br />
                    <span>{post.year}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <h1 className="my-5">
          <u>Notable Alumni</u>
        </h1>
        <div className="container parent">
          {data3.map((post) => {
            return (
              <div className="card c hide">
                <a href={post.insta}>
                  <img
                    className="card-img-top"
                    src={post.path}
                    alt=" koi toh tha"
                  />
                </a>
                <div className="card-body">
                  <p className="card-text">
                    <a href={post.insta}>
                      <span>{post.name.toUpperCase()}</span>
                    </a>
                    <br />
                    <span>{post.degree}</span>
                    <br />
                    <span>{post.college}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Achievements;
