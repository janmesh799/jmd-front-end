import React, { Component } from "react";
import "./Result.css";
import sample from "./files/sample.pdf";
import Topper from "./Topper.json";
export class Result extends Component {
  render() {
    return (
      <>
        <div className="latest-result">
          <h1>
            Saksham Result 2021 <span className="badge">NEW</span>
          </h1>
          <div className="container my-4">
            <h2>Class wise result</h2>
            <div className="list">
              <ul className="Classwise-breakthrough">
                <a title="Click for class I result " href={sample} download>
                  <li className="list-element">Class I</li>
                </a>
                <a title="Click for class II result " href={sample} download>
                  <li className="list-element">Class II</li>
                </a>
                <a title="Click for class III result " href={sample} download>
                  <li className="list-element">Class III</li>
                </a>
                <a title="Click for class IV result " href={sample} download>
                  <li className="list-element">Class IV</li>
                </a>
                <a title="Click for class V result " href={sample} download>
                  <li className="list-element">Class V</li>
                </a>
              </ul>
            </div>
          </div>
          <div className="Toppers">
            <h1><u> Past Toppers</u></h1><div className="container parent">
            {Topper.map((post) => {
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
                    <rank>{post.rank}</rank>
                    <br />
                    <class>{post.class}</class>
                  </p>
                </div>
              </div>
            );
          })}
          </div>
          </div>
        </div>
        <div className="downloads my-5">
          <h1>Some downloadable files</h1>
          <ul className="my-4">
            <l1>
              <h3>
                <a
                  title="Saksham 2022 Form"
                  className="list-element"
                  href={sample}
                  download
                >
                  Saksham 2022 form
                </a>
              </h3>
            </l1>
            <l1>
              <h3>
                <a
                  title="Saksham 2022 Brochure"
                  className="list-element"
                  href={sample}
                  download
                >
                  Saksham 2022 Brochure
                </a>
              </h3>
            </l1>
          </ul>
        </div>
      </>
    );
  }
}

export default Result;
