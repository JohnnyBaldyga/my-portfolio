import React from "react";
import avatar from "../assets/avatar.jpg";

const About = () => {
  return (
    <section>
      <h1>About Me</h1>
      <img src={avatar} alt="Developer Avatar" />
      <p>This is a short bio about the developer.</p>
    </section>
  );
};

export default About;
