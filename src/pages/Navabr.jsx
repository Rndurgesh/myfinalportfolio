import React from "react";
import "./navbar.css";
import logo from "../data/logo.gif";

export default function Navabr() {
  return (
    <div className="navbar">
      <div className="left">
        <img src={logo} alt="react-logo" className="logo" />
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="animate-charcter"> React Developer</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="rc">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/glyph-neue/64/home--v1.png"
            alt="home--v1"
            className="img-icon"
          />
          <span className="name">Home</span>
        </div>
        <div className="rc ">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/tiny-glyph/32/person-male.png"
            alt="person-male"
            className="img-icon"
          />
          <span className="name">About</span>
        </div>
        <div className=" rc">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-filled/50/ms-project.png"
            alt="ms-project"
            className="img-icon"
          />
          <span className="name">Projects</span>
        </div>
        <div className="rc">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/fluency-systems-filled/48/contact-card.png"
            alt="contact-card"
            className="img-icon"
          />
          <span className="name">Contact</span>
        </div>
      </div>
    </div>
  );
}
