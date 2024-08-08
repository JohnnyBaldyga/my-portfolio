import React from "react";
import datenight from "../assets/datenight.jpg";
import socialpulse from "../assets/socialpulse.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Date Night",
      image: datenight,
      deployed: "https://tannerhicks02.github.io/date-night-website-proj-1/",
      github: "https://github.com/TannerHicks02/date-night-website-proj-1",
    },
    {
      title: "Social Pulse",
      image: socialpulse,
      deployed: "https://social-pulse-x72y.onrender.com/",
      github: "https://github.com/JohnnyBaldyga/social-pulse",
    },
    // Add more projects here
  ];

  return (
    <section>
      <h1>Portfolio</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h2>{project.title}</h2>
            <img src={project.image} alt={project.title} />
            <div>
              <a
                href={project.deployed}
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed Application
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
