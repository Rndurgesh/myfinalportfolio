import React from "react";
import "./App.css";
import Navbar from "./pages/Navabr";
import About2 from "./pages/About2";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home2 from "./pages/Home2";
import Cdprofile from "./pages/Cdprofile";
import P2 from "./pages/P2.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home2 />
      <About2 />
      <P2 />
      <Cdprofile />
      <Contact />
    </div>
  );
}
