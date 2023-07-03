import React from "react";
import "./Home2.css";
import { Typewriter } from "react-simple-typewriter";

export default function Home2() {
  return (
    <div className="main">
      <div className="hl">
        <div className="avatar">
          <div className="avatar_img"></div>
        </div>
      </div>
      <div className="hr">
        <div className="hr-h">Hello 👋, I am </div>
        <div className="hr-name">
          <span>DURGESH SOLANKE </span>
        </div>
        <br />
        <div className="hr-ab">
          <Typewriter
            words={[
              "REACT Developer",
              "Full Stack Developer",
              "UI Designer",
              "Problem Solver",
            ]}
            loop={200}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </div>
        <div className="hr-icon">
          <a href=" https://github.com/Rndurgesh">
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/ios-filled/50/linkedin.png"
              alt="linkedin"
              className="r-r-img"
            />
          </a>
          <a href="https://github.com/Rndurgesh">
            <img
              width="64"
              height="64"
              src="https://img.icons8.com/glyph-neue/64/github.png"
              alt="github"
              className="r-r-img"
            />
          </a>
          <a href="https://github.com/Rndurgesh">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png"
              alt="instagram-new--v1"
              className="r-r-img"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
