import React from "react";
import "./Home2.css";
import { Typewriter } from "react-simple-typewriter";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";

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
        <div className="hr-name  ">
          <span>DURGESH SOLANKE </span>
        </div>
        <br />
        <div className="hr-ab ">
          <Typewriter
            words={[
              "React Developer",
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
        <div className="hr-icon mt-3">
          <a href=" https://github.com/Rndurgesh">
            <FiGithub size={40} />
          </a>
          <a href="https://github.com/Rndurgesh">
            <FiLinkedin size={40} />
          </a>
          <a href="https://github.com/Rndurgesh">
            <BsInstagram size={40} />
          </a>
        </div>
      </div>
    </div>
  );
}
