import React from "react";
import "./Home2.css";
import { Typewriter } from "react-simple-typewriter";
import { LiaGithubSquare } from "react-icons/lia";
import { PiLinkedinLogoBold } from "react-icons/pi";

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
        <div className="hr-icon mt-3 gap-6">
          <a href=" https://github.com/Rndurgesh" target="_blank">
            <LiaGithubSquare size={60} />
          </a>
          <a
            href="https://www.linkedin.com/in/durgesh-solanke-7229a8217/"
            target="_blank"
          >
            <PiLinkedinLogoBold size={50} />
          </a>
        </div>
      </div>
    </div>
  );
}
