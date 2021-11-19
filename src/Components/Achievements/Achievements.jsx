import React, { Component } from "react";
import "./Achievements.css";
import img1 from "./images/img1.jpg";
export class Achievements extends Component {
  render() {
    return (
      <>
        <h1 className="my-5 typewriter">Recent Year Achievements</h1>
        <div className="container parent">
          <div className="card c">
            <img className="card-img-top" src={img1} alt="Janmesh Kumar" />
            <div className="card-body">
              <p className="card-text">
                <name>Janmesh Kumar</name>
                <br />
                <college>IIITDMJ</college>
                <br />
                <year>2020</year>
              </p>
              
            </div>
          </div>
          <div className="card c">
            <img className="card-img-top" src={img1} alt="Janmesh Kumar" />
            <div className="card-body">
              <p className="card-text">
                <name>Janmesh Kumar</name>
                <br />
                <college>IIITDMJ</college>
                <br />
                <year>2020</year>
              </p>
            </div>
          </div>
          <div className="card c">
            <img className="card-img-top" src={img1} alt="Janmesh Kumar" />
            <div className="card-body">
              <p className="card-text">
                <name>Janmesh Kumar</name>
                <br />
                <college>IIITDMJ</college>
                <br />
                <year>2020</year>
              </p>
            </div>
          </div>
          <div className="card c">
            <img className="card-img-top" src={img1} alt="Janmesh Kumar" />
            <div className="card-body">
              <p className="card-text">
                <name>Janmesh Kumar</name>
                <br />
                <college>IIITDMJ</college>
                <br />
                <year>2020</year>
              </p>
            </div>
          </div>
          <div className="card c">
            <img className="card-img-top" src={img1} alt="Janmesh Kumar" />
            <div className="card-body">
              <p className="card-text">
                <name>Janmesh Kumar</name>
                <br />
                <college>IIITDMJ</college>
                <br />
                <year>2020</year>
              </p>
            </div>
          </div>
        </div>
        
        <h1 className="my-5 typewriter">Past Year Achievements</h1>
        
      </>
    );
  }
}

export default Achievements;
