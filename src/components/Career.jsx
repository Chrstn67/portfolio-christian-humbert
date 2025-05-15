import React, { useState } from "react";
import { careerData } from "../data/careerData";
import "../styles/Career.css";

function Career() {
  // État pour gérer l'affichage des compétences en accordéon
  const [expandedSkillsIndex, setExpandedSkillsIndex] = useState(null);

  const toggleSkills = (index) => {
    if (expandedSkillsIndex === index) {
      setExpandedSkillsIndex(null);
    } else {
      setExpandedSkillsIndex(index);
    }
  };

  return (
    <section className="career" id="career">
      <div className="section-header">
        <h2 className="section-title">Parcours professionnel</h2>
        <div className="section-decoration">
          <div className="hexagon"></div>
          <div className="line"></div>
          <div className="hexagon"></div>
        </div>
      </div>

      <div className="career-content">
        <div className="timeline-cards">
          {careerData.items.map((item, index) => (
            <div className="timeline-card" key={index}>
              <div className="timeline-card-header">
                <div className="timeline-date">{item.period}</div>
                <h3 className="timeline-title">{item.title}</h3>
                {item.company && (
                  <div className="timeline-company">{item.company}</div>
                )}
              </div>

              <div className="timeline-card-body">
                {/* Version 1: Tags flexibles */}

                <div className="skills-container">
                  {item.skills.map((skill, skillIndex) => (
                    <div className="skill-tag" key={skillIndex}>
                      <span className="skill-icon">⚡</span>
                      {skill}
                    </div>
                  ))}
                </div>

                {/* Version 2: Colonnes */}
                {/* <div className="skills-columns">
                  {item.skills.map((skill, skillIndex) => (
                    <div className="skill-item" key={skillIndex}>
                      <span className="skill-icon">⚡</span>
                      {skill}
                    </div>
                  ))}
                </div> */}

                {/* Version 4: Accordéon */}
                {/* 
                <div className="skills-accordion">
                  <div 
                    className={`skills-accordion-header ${expandedSkillsIndex === index ? 'active' : ''}`}
                    onClick={() => toggleSkills(index)}
                  >
                    <span>Compétences</span>
                    <span className="skills-count">{item.skills.length}</span>
                    <span className="toggle-icon">▼</span>
                  </div>
                  <div className={`skills-accordion-content ${expandedSkillsIndex === index ? 'active' : ''}`}>
                    <div className="skills-grid">
                      {item.skills.map((skill, skillIndex) => (
                        <div className="skill-tag" key={skillIndex}>
                          <span className="skill-icon">⚡</span>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                */}
              </div>

              <div className="timeline-card-indicator">
                <div className="indicator-dot"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Career;
