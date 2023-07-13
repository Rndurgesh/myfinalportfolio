import React from "react";
import "./navbar.css";
import { BiLogoReact } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";

export default function Navabr() {
  return (
    <div className="navbar ">
      <div className="left">
        {/* <img src={logo} alt="react-logo" className="logo" /> */}
        {/* <img src="" alt="logo" className="logo" /> */}
        <BiLogoReact size={45} fill="purple" />
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="navName  bg-gradient-to-r from-red-500 v to-purple-700">
                React Developer
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="rc">
          <AiOutlineHome size={30} fill="purple" />
          <span className="name">Home</span>
        </div>
        <div className="rc ">
          <BsPerson size={30} fill="purple" />
          <span className="name">About</span>
        </div>
        <div className=" rc">
          <AiOutlineFundProjectionScreen size={30} fill="purple" />
          <span className="name">Projects</span>
        </div>
        <div className="rc">
          <AiOutlineContacts size={30} fill="purple" />
          <span className="name">Contact</span>
        </div>
      </div>
    </div>
  );
}
