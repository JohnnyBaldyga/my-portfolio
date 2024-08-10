import React from "react";
import { Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Resume from "./components/NavBar";
import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
