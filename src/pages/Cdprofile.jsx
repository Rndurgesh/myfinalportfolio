import React from "react";
import "./cdprofile.css";
import leetcode from "../data/images/leetcode.png";
import gfg from "../data/images/gfg.png";
import codechef from "../data/images/codechef.png";

export default function Cdprofile() {
  return (
    <div className="cd">
      <div className="cdhead">Coding Profile</div>
      <div className="cdprof">
        <div className="cdcont">
          <a href="https://leetcode.com/durgeshrn/" target="_blank">
            <img src={leetcode} alt="" className="cdimg" />
          </a>
        </div>
        <div className="cdcont">
          <a
            href="https://auth.geeksforgeeks.org/user/2020bcs004/practice/"
            target="_blank"
          >
            <img src={gfg} alt="" className="cdimg" />
          </a>
        </div>
        <div className="cdcont">
          <a href="https://www.codechef.com/users/durgeshrn143" target="_blank">
            <img src={codechef} alt="" className="cdimg" />
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
}
