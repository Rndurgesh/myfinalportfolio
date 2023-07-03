import React from "react";
import { Typewriter } from "react-simple-typewriter";
// import react-icon from "

import "./home.css";
export default function Home() {
  return (
    <div className="m ">
      <div className="r">
        <div className="r-l">
          <img
            src="https://img.freepik.com/free-vector/future-work-concept-illustration_614304-14.jpg?w=740&t=st=1687669342~exp=1687669942~hmac=ae98c16a8310668783b45dc2bfaa238cad4c1589ae0d4690a2d7582f0f26cac2"
            alt=""
          />
        </div>
        <div className="r-r">
          <div className="r-r-name">
            <h1>DURGESH SOLANKE </h1>
          </div>
          <div className="r-r-type">
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
          <div className="r-r-info">Creative React Web developer</div>
          <div className="r-icon">
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
    </div>
  );
}
