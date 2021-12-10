import React, { Component } from "react";
import "./Result.scss";
import Vreg from "./files/Vreg.pdf";
import VIreg from "./files/VIreg.pdf";
import VIIreg from "./files/VIIreg.pdf";
import VIIIreg from "./files/VIIIreg.pdf";
import IXreg from "./files/IXreg.pdf";
import Xreg from "./files/Xreg.pdf";
import Brochure from "./files/Brochure.pdf";
import Registration_form from "./files/Rform.pdf";

import Topper from "./Topper.json";
export class Result extends Component {
  render() {
    return (
      <>
        <div className="latest-result">
          <h1>
            Saksham 2022  <span className="badge">Coming Soon</span>
          </h1>
          {/* <div className="container my-4">
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
          </div> */}<br/><br/>
          <div className="Toppers">
            <h1>
              <u> Saksham 2021 Toppers</u>
            </h1>
            <div className="container parent">
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
                        <span>{post.name.toUpperCase()}</span>
                        <br />
                        <span>{post.rank}</span>
                        <br />
                        <span>{post.class}</span>
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
          <ul className="my-4 list">
            <li className="no_bullets">
              <h3>
                <a
                  title="Saksham 2022 Form"
                  className="list-element"
                  href={Registration_form}
                  download
                >
                  Saksham 2022 form
                </a>
              </h3>
            </li>
            <li className="no_bullets">
              <h3>
                <a
                  title="Saksham 2022 Brochure"
                  className="list-element"
                  href={Brochure}
                  download
                >
                  Saksham 2022 Brochure
                </a>
              </h3>
            </li>
          </ul>
          <div className="container my-4">
            <h1>Class wise Details</h1>
            <div className="list">
              <ul className="Classwise-breakthrough">
                <a title="Click for class I result " href={Vreg} download>
                  <li className="list-element">Class V</li>
                </a>
                <a title="Click for class II result " href={VIreg} download>
                  <li className="list-element">Class VI</li>
                </a>
                <a title="Click for class III result " href={VIIreg} download>
                  <li className="list-element">Class VII</li>
                </a>
                <a title="Click for class IV result " href={VIIIreg} download>
                  <li className="list-element">Class VIII</li>
                </a>
                <a title="Click for class V result " href={IXreg} download>
                  <li className="list-element">Class IX</li>
                </a>
                <a title="Click for class V result " href={Xreg} download>
                  <li className="list-element">Class X</li>
                </a>

              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Result;
