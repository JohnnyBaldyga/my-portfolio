import React from "react";
import avatar from "../assets/avatar.jpg";
function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>
      <img src={avatar} alt="Developer" />
      <p>Jonathan is a new Developer begining to learn the ropes.</p>
    </section>
  );
}

export default AboutMe;
