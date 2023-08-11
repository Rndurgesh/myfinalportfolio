import React from "react";
import "./about2.css";
import resume from "../data/res.pdf";

export default function About2() {
  return (
    <div className="about2 mt-7">
      <div className="ab">About Me</div>
      <div className="intro">
        <div className="data">
          <div className="name">
            <div className="aname">Durgesh Solanke</div>
            <div className="aname2">React Developer</div>
          </div>
          <div className="aresume">
            <a
              href={resume}
              downoad
              target="_blank"
              className="bg-gradient-to-r from-red-500 v to-purple-700 px-4 py-3 text-white"
            >
              Download Resume
            </a>
          </div>
        </div>
        <hr />

        <div className="para">
          👋 Hello there! I'm <>Durgesh</>, a passionate React developer on a
          journey to create captivating and seamless user experiences.
        </div>
        <div className="para2 mb-5">
          With a strong foundation in web development and a keen eye for UI/UX
          design, I've dedicated myself to mastering the art of building dynamic
          and responsive web applications using the power of React. What sets me
          apart is my commitment to writing clean, maintainable code that not
          only works seamlessly but is also a joy for other developers to work
          with.
        </div>
        <hr />
      </div>

      <div className="skillname mt-6 mb-5 ">Programming Skills</div>
      <div className="a-skill">
        <div className="skill-bars">
          <div className="bar">
            <div className="info">
              <span>ReactJs</span>
            </div>
            <div className="progress-line html">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <div className="info">
              <span>JavaScript</span>
            </div>
            <div className="progress-line Javascript">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <div className="info">
              <span>NodeJs</span>
            </div>
            <div className="progress-line NodeJs">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <div className="info">
              <span>MongoDb</span>
            </div>
            <div className="progress-line MongoDb">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <div className="info">
              <span>C++</span>
            </div>
            <div className="progress-line Cpp">
              <span></span>
            </div>
          </div>
        </div>
        <div className="skill-bars">
          <div className="bar">
            <div className="info">
              <span>HTML</span>
            </div>
            <div className="progress-line html">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <div className="info">
              <span>CSS</span>
            </div>
            <div className="progress-line css">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <div className="info">
              <span>TailWind CSS</span>
            </div>
            <div className="progress-line TailWind_CSS">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <div className="info">
              <span>Chakra UI</span>
            </div>
            <div className="progress-line chakraUI">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <div className="info">
              <span>Java</span>
            </div>
            <div className="progress-line java">
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="a-edu">
        <div className="a-edu-title">Education</div>
        <div className="line">
          <div className="row cf">
            <div className="block fl">
              <p>
                <span className="circle first"></span>
                10th
                <br />
                Bal Vidhya Mandir, parbhani
              </p>
            </div>
            <div className="block fr">
              <p>
                <span className="circle"></span>12th
                <br />
                Bharat Bharti School, Parbhanni
              </p>
            </div>
            <div className="block fl">
              <p>
                <span className="circle"></span>
                4th year (current) <br />
                Shri Guru Gobind Singhji Institute of Engineering and Technology
                (SGGSIET), Nanded
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
