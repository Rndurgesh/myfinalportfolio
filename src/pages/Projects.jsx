import React from "react";
import "./projects.css";
import p4 from "../data/images/p4.jpg";
import p3 from "../data/images/p3.jpg";
import p2 from "../data/images/p2.jpg";
import p1 from "../data/images/p1.jpg";

export default function Projects() {
  return (
    <div className="p">
      <div className="heading">
        <h2>Projects</h2>
      </div>
      <div className="proj">
        <div className="pp1">
          <div className="ppcont">
            <a
              href="https://real-estate-template-xi.vercel.app/"
              target="_blank"
            >
              <img src={p4} alt="project1" className="img" />
            </a>
            <div className="Github_link">
              <a
                className="gitlink bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                target="_blank"
                href="https://github.com/Rndurgesh/RealEstateTemplate"
              >
                Github
              </a>
              <a
                className="livelink bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                target="_blank"
                href="https://real-estate-template-xi.vercel.app/"
              >
                Live
              </a>
            </div>
          </div>
          <div className="ppcont">
            <a href="https://blog-app-ui-beta.vercel.app/" target="_blank">
              <img src={p1} alt="project2" className="img" />
            </a>
            <div className="Github_link ">
              <a
                className="gitlink bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                target="_blank"
                href="https://github.com/Rndurgesh/blog-app-uI"
              >
                Github
              </a>
              <a
                className="livelink bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                href="https://blog-app-ui-beta.vercel.app/"
                target="_blank"
              >
                Live
              </a>
            </div>
          </div>
        </div>
        <div className="pp2">
          <div className="ppcont">
            <a href="https://fiverrr-source.vercel.app/" target="_blank">
              <img src={p2} alt="project2" className="img" />
            </a>
            <div className="Github_link">
              <a
                className="gitlink bg-gradient-to-r from-indigo-500 to-pink-500"
                target="_blank"
                href="https://github.com/Rndurgesh/fiverrr-source"
              >
                Github
              </a>
              <a
                className="livelink bg-purple-600 "
                target="_blank"
                href="https://fiverrr-source.vercel.app/"
              >
                Live
              </a>
            </div>
          </div>
          <div className="ppcont">
            <a
              href="https://photo-gallery-proj-deploy.vercel.app/"
              target="_blank"
            >
              <img src={p3} alt="project3" className="img" />
            </a>
            <div className="Github_link ">
              <a
                className="gitlink bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                target="_blank"
                href="https://github.com/Rndurgesh/photo_gallery-_proj"
              >
                Github
              </a>
              <a
                className="livelink bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                target="_blank"
                href="https://photo-gallery-proj-deploy.vercel.app/"
              >
                Live
              </a>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <hr />
    </div>
  );
}
