import React from "react";
import "./about2.css";

export default function About2() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("SamplePDF.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="about2">
      <div className="ab">About Me</div>
      <div className="intro">
        <div className="data">
          <div className="name">
            <div className="aname">Durgesh Solanke</div>
            <div className="aname2">Full Stack Developer</div>
          </div>
          <div className="aresume">
            <button onClick={onButtonClick}>Download Resume</button>
          </div>
        </div>
        <hr />

        <div className="para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit alias
          sed nihil doloribus necessitatibus quisquam quis incidunt eaque
        </div>
        <div className="para2">
          cupiditate deserunt nostrum facilis dolore suscipit rem quaerat, esse
          sunt, sequi, ut perferendis accusamus quasi earum reprehenderit. Optio
          debitis id iusto, quidem, suscipit et nihil officiis ipsum distinctio
          quibusdam aut facilis omnis?
        </div>
        <hr />
      </div>

      <div className="skillname ">Programming Skills</div>
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
      <div className="a-edu">
        <div className="a-edu-title">Education</div>
        <hr className="hr" />
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
    </div>
  );
}
