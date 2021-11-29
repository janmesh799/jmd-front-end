import React, { Component } from "react";
import "./Achievements.css";
import data1 from "./Data1.json";
export class Achievements extends Component {
  render() {
    return (
      <>
        <h1 className="my-5">Recent Year Achievements</h1>
        <div className="container parent">
          {data1.map((post) => {
            return (
              <div className="card c">
                <img
                  className="card-img-top"
                  src={post.path}
                  alt="Janmesh Kumar"
                />
                <div className="card-body">
                  <p className="card-text">
                    <name>{post.name.toUpperCase()}</name>
                    <br />
                    <college>{post.achieve}</college>
                    <br />
                    <year>{post.year}</year>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <h1 className="my-5">Past Year Achievements</h1>
      </>
    );
  }
}

export default Achievements;
