import { footerData } from "../data/footerData";
import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-info">
            <div className="footer-logo">
              <div className="logo-hexagon">
                <img src={footerData.initials} alt="Logo" />
              </div>
            </div>

            <h3>{footerData.name}</h3>
            <p>{footerData.title}</p>
          </div>

          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              {footerData.navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-social">
            <h4>Où me trouver</h4>
            <div className="social-icons">
              {footerData.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.name}
                >
                  {social.isImage ? (
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="social-image-icon"
                    />
                  ) : (
                    <i className={social.icon}></i>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-decoration">
          <div className="circuit-line"></div>
          <div className="circuit-dot"></div>
          <div className="circuit-line"></div>
        </div>

        <p>
          &copy; {currentYear} {footerData.copyright}
        </p>

        <div className="footer-decoration">
          <div className="circuit-line"></div>
          <div className="circuit-dot"></div>
          <div className="circuit-line"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
