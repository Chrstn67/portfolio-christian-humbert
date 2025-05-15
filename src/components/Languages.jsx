import { languagesData } from "../data/languagesData"
import "../styles/Languages.css"

function Languages() {
  return (
    <section className="languages" id="languages">
      <div className="section-header">
        <h2 className="section-title">Langues</h2>
        <div className="section-decoration">
          <div className="hexagon"></div>
          <div className="line"></div>
          <div className="hexagon"></div>
        </div>
      </div>

      <div className="languages-content">
        <div className="languages-grid">
          {languagesData.languages.map((language, index) => (
            <div key={index} className="language-card">
              <div className="language-header">
                <h3>{language.name}</h3>
              </div>
              <div className="language-level">
                <span className="level-badge">{language.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Languages
