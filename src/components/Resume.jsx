import React from "react";
import resume from "../assets/resume.pdf";

const Resume = () => {
  const proficiencies = [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    // Add more proficiencies here
  ];

  return (
    <section>
      <h1>Resume</h1>
      <a href={resume} download="resume.pdf">
        Download Resume
      </a>
      <h2>Proficiencies</h2>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;
