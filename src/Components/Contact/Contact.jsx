import React, { Component } from "react";
import "./Contact.scss";
export class Contact extends Component {
  render() {
    return (
      <div className="container contact my-5">
        <h1 className="heading">How would you like to contact us??</h1>

        <div className="call-parent">
          <div className="call">
            <img
              src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-call-contact-flatart-icons-lineal-color-flatarticons-1.png"
              alt="call icon "
              className="call-icon"
            />
            <span className="call">&nbsp; Call Us!!! &nbsp;</span>
            &nbsp;
          </div>
          <div className="call">
            <a href="tel:9756399884" className="call ">
              +91-9756399884 &nbsp;
            </a>
          </div>
          <div className="call">
            <a href="tel:9756399888" className="call">
              +91-9756399888
            </a>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------------------------------ */}
        <div className="whattsapp-parent">
          <div className="call">
            <a
              href="https://wa.me/+919756399884?text=Welcome to JMD Saksham Classes 😀😀"
              target="_blank"
              rel="noreferrer"
              className="call"
            >
              +91-9756399884 &nbsp;
            </a>
          </div>
          <div className="call">
            <a
              href="https://wa.me/+919756399888?text=Welcome to JMD Saksham Classes 😀😀"
              target="_blank"
              rel="noreferrer"
              className="call"
            >
              +91-9756399888
            </a>
          </div>
          <div className="call">
            <span className="call"> &nbsp;Whatsapp Us!!! &nbsp;</span>
            <img
              src="https://img.icons8.com/office/480/000000/whatsapp--v1.png"
              alt="Whattsapp no."
              className="wa-icon"
            />
          </div>
        </div>
        {/* ------------------------------------------------- */}

       
        <span className="head-ad">
          And if you are really very excited, Then visit Us!!!
          </span>
        <h2>On the given adderess &#8595;</h2>
       
        <div className="visit">
          <iframe
            title="JMD map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.320653837083!2d78.08724291505293!3d27.892131682715757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a5a841fdc9d1%3A0xa22e73bc998e44e2!2sJmd%20Saksham%20Classes!5e0!3m2!1sen!2sin!4v1636819429703!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullScreen=""
            loading="lazy"
            className="map"
          ></iframe>

          <p className="visit-text">
            <img
              src="https://img.icons8.com/color/96/000000/address--v2.png"
              alt="address"
            />
            Jmd Saksham Classes Arya Nagar Colony, Near Mansarowar, Ramghat Rd,
            Aligarh, Uttar Pradesh 202001
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
