import React, { useState } from "react";
import { educationData } from "../data/educationData";
import "../styles/Education.css";

function Education() {
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
    <section className="education" id="education">
      <div className="section-header">
        <h2 className="section-title">Formation</h2>
        <div className="section-decoration">
          <div className="hexagon"></div>
          <div className="line"></div>
          <div className="hexagon"></div>
        </div>
      </div>

      <div className="education-content">
        <div className="education-cards">
          {educationData.items.map((item, index) => (
            <div className="education-card" key={index}>
              <div className="education-card-header">
                <div className="timeline-date">{item.period}</div>
                <h3 className="timeline-title">{item.title}</h3>
                {item.result && (
                  <div className="timeline-result">{item.result}</div>
                )}
              </div>

              <div className="education-card-body">
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
                {/* 
                <div className="skills-columns">
                  {item.skills.map((skill, skillIndex) => (
                    <div className="skill-item" key={skillIndex}>
                      <span className="skill-icon">⚡</span>
                      {skill}
                    </div>
                  ))}
                </div>
                */}

                {/* Version 3: Grille compacte */}
                {/* 
                <div className="skills-compact-grid">
                  {item.skills.map((skill, skillIndex) => (
                    <div className="skill-item" key={skillIndex}>
                      {skill}
                    </div>
                  ))}
                </div>
                */}

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

              <div className="education-card-indicator">
                <div className="indicator-dot"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
