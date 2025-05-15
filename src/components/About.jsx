import { aboutData } from "../data/aboutData"
import "../styles/About.css"

function About() {
  return (
    <section className="about" id="about">
      <div className="section-header">
        <h2 className="section-title">Qui suis-je ?</h2>
        <div className="section-decoration">
          <div className="hexagon"></div>
          <div className="line"></div>
          <div className="hexagon"></div>
        </div>
      </div>

      <div className="about-content">
        <div className="about-image">
          <div className="image-container">
            <div className="image-hexagon">
              <img src={aboutData.profileImage || "/placeholder.svg"} alt="Photo de profil" />
            </div>
            <div className="image-decoration">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="var(--accent-color)"
                  d="M45.7,-76.2C58.9,-69.2,69.2,-55.9,76.4,-41.3C83.6,-26.7,87.8,-10.8,85.8,4.1C83.8,19,75.6,32.9,65.5,44.1C55.3,55.3,43.2,63.8,29.7,70.1C16.2,76.4,1.3,80.5,-14.9,79.7C-31.1,78.9,-48.6,73.2,-60.9,62C-73.2,50.8,-80.3,34.1,-83.1,16.9C-85.9,-0.3,-84.4,-18,-77.8,-32.8C-71.2,-47.6,-59.5,-59.5,-45.8,-66.2C-32.1,-72.9,-16,-74.4,0.2,-74.7C16.4,-75,32.8,-74.1,45.7,-67.2Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="about-text">
          <div className="text-with-decoration">
            <div className="decoration-line"></div>
            <p>{aboutData.description}</p>
          </div>

          <div className="about-keywords">
            {aboutData.keywords.map((keyword, index) => (
              <span key={index} className="keyword">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
