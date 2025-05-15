import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Story from "./components/Story";
import Languages from "./components/Languages";
import OtherInfo from "./components/OtherInfo";
import Hobbies from "./components/Hobbies";
import Education from "./components/Education";
import Career from "./components/Career";
import Portfolio from "./components/Portfolio";
import LinkedInPosts from "./components/LinkedInPosts";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <ParticlesBackground />
      <Header />
      <main className="main-content">
        <HeroSection />
        <About />
        <Story />
        <div className="grid-layout">
          <div className="grid-item languages-section">
            <Languages />
          </div>
          <div className="grid-item other-info-section">
            <OtherInfo />
          </div>
          <div className="grid-item education-section">
            <Education />
          </div>
          <div className="grid-item career-section">
            <Career />
          </div>
          <div className="grid-item hobbies-section">
            <Hobbies />
          </div>
        </div>

        <Portfolio />
        <LinkedInPosts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
