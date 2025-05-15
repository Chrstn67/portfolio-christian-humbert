import { hobbiesData } from "../data/hobbiesData";
import "../styles/Hobbies.css";

function Hobbies() {
  return (
    <section className="hobbies" id="hobbies">
      <div className="section-header">
        <h2 className="section-title">Hobbies</h2>
        <div className="section-decoration">
          <div className="hexagon"></div>
          <div className="line"></div>
          <div className="hexagon"></div>
        </div>
      </div>

      <div className="hobbies-content">
        <div className="hobbies-grid">
          {hobbiesData.items.map((hobby, index) => (
            <div key={index} className="hobby-card">
              <div className="hobby-icon">
                <i className={hobby.icon}></i>
              </div>
              <div className="hobby-details">
                <h3>{hobby.name}</h3>
                <p>{hobby.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hobbies;
