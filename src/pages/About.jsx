import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="a">
      <h1 className="a-heading">About Me</h1>
      <img
        className="a-img"
        src="https://i.ytimg.com/vi/aRmZwWAvuhQ/maxresdefault.jpg"
        alt=""
      />
      <h3 className="a-name">Durgesh Solanke</h3>
      <div className="a-nm">Web Developer</div>
      <hr />
      <p className="a-para">
        Hi, my name is Adriano Smith and I began using WordPress when it first
        began. I’ve spent most of my waking hours for the last ten years
        <br />
        designing, programming and operating WordPress sites. One of my
        specialties is taking an idea from scratch and creating a full-fledged
        platform.
        <br />
        <br />I go beyond to produce sites with a unique, outstanding,
        contemporary look-and-feel. With extensive knowledge of web mechanics,
        I’m able to optimize complex integrations to require little-to-no
        maintenance while running on their own for years
        <br />
      </p>
      <hr />

      <div className="r-d">
        <div className="a-d-c">
          <span>
            <strong>Birthday:</strong>
            13:02:2001
          </span>

          <span>
            <strong>Address:</strong>
            Home No:35, Trimurti nagar, Parbhani.
          </span>
          <span>
            <strong>Email:</strong>
            rndurgesh@143gmail.com
          </span>
          <span>
            <strong>Phone:</strong>
            7410141916
          </span>
        </div>
        <div className="a-d-c">
          <span>
            <strong>Nationality:</strong>
            Indian
          </span>
          <span>
            <strong>Age:</strong>
            22
          </span>
          <span>
            <strong>Study:</strong>
            BTech(pursuing)
          </span>
          <span>
            <strong>Interest:</strong>
            Playing Vollyball
          </span>
        </div>
      </div>
      <hr />
      <div>
        <button className="a-res">Download Resume</button>
      </div>
      <div className="a-skill">
        <div class="skill-bars">
          <div class="bar">
            <div class="info">
              <span>HTML</span>
            </div>
            <div class="progress-line html">
              <span></span>
            </div>
          </div>

          <div class="bar">
            <div class="info">
              <span>CSS</span>
            </div>
            <div class="progress-line css">
              <span></span>
            </div>
          </div>

          <div class="bar">
            <div class="info">
              <span>jQuery</span>
            </div>
            <div class="progress-line jquery">
              <span></span>
            </div>
          </div>

          <div class="bar">
            <div class="info">
              <span>Python</span>
            </div>
            <div class="progress-line python">
              <span></span>
            </div>
          </div>

          <div class="bar">
            <div class="info">
              <span>MySQL</span>
            </div>
            <div class="progress-line mysql">
              <span></span>
            </div>
          </div>
        </div>
        <div class="skill-bars">
          <div class="bar">
            <div class="info">
              <span>HTML</span>
            </div>
            <div class="progress-line html">
              <span></span>
            </div>
          </div>

          <div class="bar">
            <div class="info">
              <span>CSS</span>
            </div>
            <div class="progress-line css">
              <span></span>
            </div>
          </div>

          <div class="bar">
            <div class="info">
              <span>jQuery</span>
            </div>
            <div class="progress-line jquery">
              <span></span>
            </div>
          </div>

          <div class="bar">
            <div class="info">
              <span>Python</span>
            </div>
            <div class="progress-line python">
              <span></span>
            </div>
          </div>

          <div class="bar">
            <div class="info">
              <span>MySQL</span>
            </div>
            <div class="progress-line mysql">
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="a-edu">
        <div className="a-edu-title">Education</div>
        <div class="line">
          <div class="row cf">
            <div class="block fl">
              <p>
                <span class="circle first"></span>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nullam semper risus consequat
                mauris enim non dolor eleifend commodo
              </p>
            </div>
            <div class="block fr">
              <p>
                <span class="circle"></span>Quisque enim quam, semper quis dui
                sed, pellentesque consectetur augue. Nam convallis diam lacus,
                vel ifend commodo
              </p>
            </div>
            <div class="block fl">
              <p>
                <span class="circle"></span>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nullam semper risus consequat
                mauris dapibus, ut
              </p>
            </div>
            <div class="block fr">
              <p>
                <span class="circle last"></span>Lorem ipsum dolor sit amet,
                conubia nostra, per inceptos himenaeos. Fusce blandit tellus nec
                semper gravida. Nunc faucibus enim non dolor eleifend commodo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
