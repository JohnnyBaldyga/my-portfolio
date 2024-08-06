import React from "react";

const Portfolio = () => {
  const projects = [
    { title: "Project 1", image: "project1.jpg", deployed: "#", github: "#" },
    { title: "Project 2", image: "project2.jpg", deployed: "#", github: "#" },
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
