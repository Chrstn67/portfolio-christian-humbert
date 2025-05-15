import { storyData } from "../data/storyData";
import "../styles/Story.css";

function Story() {
  return (
    <section className="story" id="story">
      <div className="section-header">
        <h2 className="section-title">
          <span className="emoji">📖</span> {storyData.title}
        </h2>
        <div className="section-decoration">
          <div className="hexagon"></div>
          <div className="line"></div>
          <div className="hexagon"></div>
        </div>
      </div>

      <div className="story-content">
        <div className="story-card">
          <div className="card-decoration">
            <div className="code-line">
              <span className="code-comment">
                // Mon parcours dans le développement web
              </span>
            </div>
            <div className="code-line">
              <span className="code-keyword">function</span>{" "}
              <span className="code-function">monPremierProjet</span>() {"{"}
            </div>
            <div className="code-line indent">
              <span className="code-keyword">const</span>{" "}
              <span className="code-variable">passion</span> ={" "}
              <span className="code-string">"développement web"</span>;
            </div>
          </div>

          <div
            className="story-text"
            dangerouslySetInnerHTML={{ __html: storyData.content }}
          ></div>

          <div className="card-decoration bottom">
            <div className="code-line indent">
              <span className="code-keyword">return</span>{" "}
              <span className="code-variable">experience</span>;
            </div>
            <div className="code-line">{"}"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
