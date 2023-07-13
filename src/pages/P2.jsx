import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p4 from "../data/images/p4.jpg";
import p3 from "../data/images/p3.jpg";
import p2 from "../data/images/p2.jpg";
import p1 from "../data/images/p1.jpg";
import Slider from "react-slick";
import "./project2.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,

        background: "#A9A9A9",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        font: "20px",
        zIndex: "1",
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "green" }}
      style={{
        ...style,

        background: " #A9A9A9",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        font: "20px",
        zIndex: 1,
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
}

export default function P2() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow className="SamplePrevArrow" />,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <>
      <div className="phead" style={{ textAlign: "center" }}>
        Projects
      </div>
      <div className="slider">
        <Slider {...settings}>
          <div>
            <h3>
              <img src={p1} alt="" className="pimg" />
            </h3>
            <div className="pbutton">
              <a
                target="_blank"
                className="plinkbtn  bg-gradient-to-r from-red-600 v to-purple-600"
                href="https://blog-app-ui-beta.vercel.app/"
              >
                Live
              </a>
              <a
                target="_blank"
                className="plinkbtn border-r-2 bg-gradient-to-r from-red-600 v to-purple-600"
                href="https://github.com/Rndurgesh/blog-app-uI"
              >
                Github
              </a>
            </div>
          </div>
          <div>
            <h3>
              <img src={p2} alt="" className="pimg" />
            </h3>
            <div className="pbutton">
              <a
                className="plinkbtn bg-gradient-to-r from-red-600 v to-purple-600"
                target="_blank"
                href="https://fiverrr-source.vercel.app/"
              >
                Live
              </a>
              <a
                className="plinkbtn bg-gradient-to-r from-red-600 v to-purple-600"
                target="_blank"
                href="https://github.com/Rndurgesh/fiverrr-source"
              >
                Github
              </a>
            </div>
          </div>
          <div>
            <h3>
              <img src={p3} alt="" className="pimg" />
            </h3>
            <div className="pbutton">
              <a
                className="plinkbtn bg-gradient-to-r from-red-600 v to-purple-600"
                target="_blank"
                href="https://photo-gallery-proj-deploy.vercel.app/"
              >
                Live
              </a>
              <a
                className="plinkbtn bg-gradient-to-r from-red-600 v to-purple-600"
                target="_blank"
                href="https://github.com/Rndurgesh/photo_gallery-_proj"
              >
                Github
              </a>
            </div>
          </div>
          <div>
            <h3>
              <img src={p4} alt="" className="pimg" />
            </h3>
            <div className="pbutton">
              <a
                className="plinkbtn bg-gradient-to-r from-red-600 v to-purple-600"
                target="_blank"
                href="https://real-estate-template-xi.vercel.app/"
              >
                Live
              </a>
              <a
                className="plinkbtn bg-gradient-to-r from-red-600 v to-purple-600"
                target="_blank"
                href="https://github.com/Rndurgesh/RealEstateTemplate"
              >
                Github
              </a>
            </div>
          </div>
        </Slider>
      </div>
      <hr />
    </>
  );
}
