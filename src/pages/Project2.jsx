import React from "react";
import "./project2.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p4 from "../data/images/p4.jpg";
import p3 from "../data/images/p3.jpg";
import p2 from "../data/images/p2.jpg";
import p1 from "../data/images/p1.jpg";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,

        background: "purple",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        font: "20px",
        right: -50,
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

        background: "purple",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        font: "20px",
        left: -50,
      }}
      onClick={onClick}
    />
  );
}

export default function Project2() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="slider">
        <h2 style={{ textAlign: "center" }}> Single Item</h2>
        {/* <SampleNextArrow /> */}

        <Slider {...settings}>
          <div>
            <h3>
              <img src={p1} alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={p2} alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={p3} alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={p4} alt="" />
            </h3>
          </div>
        </Slider>
        {/* <SamplePrevArrow /> */}
      </div>
    </>
  );
}
