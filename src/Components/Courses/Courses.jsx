import React, { Component } from "react";
import "./Courses.scss";
export class Courses extends Component {
  render() {
    return (
      <>
        <div>
          <h1 my-2 >
            <u>Courses offered by Us</u>
          </h1><br/>
        </div>
        <div className="tab container">
          <table>
            {/* <caption>Council budget (in £) 2018</caption> */}
            <thead>
              <tr>
                <th>Classes</th>
                <th scope="col">Facilities Offered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Class V</th>
                <td className="description">
                  &bull; <strong>Target: </strong> Preparation for the
                  School/Board Examinations + <br/>Making Strong Foundation for
                  higher class & Competitive Exam.
                  <br />
                  &bull;<strong> Subjects: </strong> Mathematics, Science ,
                  English & Urdu.
                  <br />
                  &bull; <strong> Batch Timings: </strong> For summer:3:10– 5:00
                  pm, For Winter: 3:25 –5:00 pm
                  <br />
                  &bull; <strong>Vacancy: </strong>25 Students in each Batches..
                  <br />
                </td>
              </tr>
              <tr>
                <th scope="row">Class VI</th>
                <td className="description">
                  &bull; <strong>Target: </strong> Preparation for the
                  School/Board Examinations + <br/>Making Strong Foundation for
                  higher class & Competitive Exam.
                  <br />
                  &bull;<strong> Subjects: </strong> Mathematics, Science ,
                  English & Urdu.
                  <br />
                  &bull; <strong> Batch Timings: </strong> For summer:3:10 –
                  5:00 pm, For Winter: 3:25 – 5:00 pm
                  <br />
                  &bull; <strong>Vacancy: </strong>25 Students in each Batches..
                  <br />
                </td>
              </tr>
              <tr>
                <th scope="row">Class VII</th>
                <td className="description">
                  &bull; <strong>Target: </strong> Preparation for the
                  School/Board Examinations + <br/>Making Strong Foundation for
                  higher class & Competitive Exam.
                  <br />
                  &bull;<strong> Subjects: </strong> Mathematics, Science ,
                  English & Urdu.
                  <br />
                  &bull; <strong> Batch Timings: </strong> For summer:3:10– 5:00
                  pm, For Winter: 3:25 – 5:00 pm
                  <br />
                  &bull; <strong>Vacancy: </strong>25 Students in each Batches..
                  <br />
                </td>
              </tr>
              <tr>
                <th scope="row">Class VIII</th>
                <td className="description">
                  &bull; <strong>Target: </strong> Preparation for the
                  School/Board Examinations + <br/>Making Strong Foundation for
                  higher class & Competitive Exam.
                  <br />
                  &bull;<strong> Subjects: </strong>Mathematics, Science
                  (Physics , chemistry, Biology) English & Urdu.
                  <br />
                  &bull; <strong> Batch Timings: </strong> For summer:5:10 –
                  7:15 pm, For Winter: 3:25 –5:00 pm
                  <br />
                  &bull; <strong>Vacancy: </strong>30 Students in each Batches..
                  <br />
                </td>
              </tr>
              <tr>
                <th scope="row">Class IX</th>
                <td className="description">
                  &bull; <strong>Target: </strong> Preparation for the
                  School/Board Examinations + <br/>Making Strong Foundation for
                  higher class & Competitive Exam.
                  <br />
                  &bull;<strong> Subjects: </strong> Mathematics, Science
                  (Physics , chemistry, Biology) English & Urdu.
                  <br />
                  &bull; <strong> Batch Timings: </strong> For summer:5:00 –
                  7:15 pm, For Winter: 3:25 –5:00 pm
                  <br />
                  &bull; <strong>Vacancy: </strong>30 Students in each Batches..
                  <br />
                </td>
              </tr>
              <tr>
                <th scope="row">Class X</th>
                <td className="description">
                  &bull; <strong>Target: </strong> Preparation for the
                  School/Board Examinations + <br/>Making Strong Foundation for
                  higher class & Competitive Exam.
                  <br />
                  &bull;<strong> Subjects: </strong> Mathematics, Science (Physics , chemistry, Biology) English & Urdu. DURATION
                  <br />
                  &bull; <strong> Batch Timings: </strong> For summer:5:00 –
                  7:15 pm, For Winter: 5:15 –7:00 pm
                  <br />
                  &bull; <strong>Vacancy: </strong>25 Students in each Batches..
                  <br />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
          <strong className="tab">
            {" "}
            &emsp;&emsp;&emsp;&#42; In winter, class duration will be reduced by
            10 min & time may change as per the school.{" "}
          </strong>{" "}
          <br />
      </>
    );
  }
}

export default Courses;
