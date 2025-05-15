"use client";

import { useState, useRef, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";
import "../styles/Portfolio.css";

function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!projectsRef.current) return;

      const projects = projectsRef.current.querySelectorAll(".project-card");

      projects.forEach((project) => {
        const rect = project.getBoundingClientRect();
        const isVisible =
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight);

        if (isVisible) {
          project.classList.add("in-view");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleProject = (index) => {
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="section-header">
        <h2 className="section-title">Portfolio</h2>
        <div className="section-decoration">
          <div className="hexagon"></div>
          <div className="line"></div>
          <div className="hexagon"></div>
        </div>
      </div>

      <div className="portfolio-content">
        <div className="projects-grid" ref={projectsRef}>
          {portfolioData.projects.map((project, index) => (
            <div
              className={`project-card ${
                activeProject === index ? "active" : ""
              }`}
              key={index}
              onClick={() => toggleProject(index)}
            >
              <div className="project-inner">
                <div className="project-front">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    {project.status && (
                      <span className="project-status">{project.status}</span>
                    )}
                  </div>

                  <div className="project-preview">
                    {project.image && (
                      <div className="project-image">
                        <img
                          src={project.image}
                          alt={`Aperçu de ${project.title}`}
                        />
                      </div>
                    )}
                    <div className="tech-stack">
                      {project.technologies
                        .split(", ")
                        .map((tech, techIndex) => (
                          <span key={techIndex} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="project-back">
                  <p className="project-description">{project.description}</p>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <span>Visiter le site</span>
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
