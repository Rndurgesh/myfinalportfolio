import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import map from "../data/map.jpg";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fo0jvch",
        "template_zdg7ybc",
        form.current,
        "KrtWgvPqvLFirPSnz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleSend = () => {
    alert("message sended");
  };
  return (
    <>
      <div className="c">
        <div className="c-name">Contact</div>
        <div className="c-name2">Get in Touch</div>
        <hr />
        <div className="cont">
          <div className="cimgcont">
            <img src={map} alt="" className="c-img" />
          </div>
          <div className="c-form ">
            <form ref={form} onSubmit={sendEmail} className="cfele">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className="formi"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="formi"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="ctext"
              />
              <button
                type="submit"
                onClick={handleSend}
                value="Send"
                className="sbutton"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer"> Thank you 😊😊....</div>
    </>
  );
}
