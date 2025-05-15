import { otherInfoData } from "../data/otherInfoData";
import "../styles/OtherInfo.css";

function OtherInfo() {
  return (
    <section className="other-info" id="other-info">
      <div className="section-header">
        <h2 className="section-title">Autres infos utiles</h2>
        <div className="section-decoration">
          <div className="hexagon"></div>
          <div className="line"></div>
          <div className="hexagon"></div>
        </div>
      </div>

      <div className="other-info-content">
        <div className="info-cards">
          {otherInfoData.items.map((item, index) => (
            <div key={index} className="info-card">
              <div className="info-icon">
                <i className={item.icon}></i>
              </div>
              <div className="info-details">
                <h3>{item.name}</h3>
                {item.link ? (
                  <a href={item.link} target="_blank" className="info-link">
                    {item.value}
                  </a>
                ) : (
                  <p>{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtherInfo;
