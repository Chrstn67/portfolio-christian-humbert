"use client";

import { useEffect, useRef, useState } from "react";
import { heroData } from "../data/heroData";
import "../styles/HeroSection.css";

function HeroSection() {
  const terminalRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Indiquer que le composant est monté
    setIsMounted(true);

    const terminal = terminalRef.current;
    if (!terminal) return;

    const text = heroData.terminalText;
    let isDeleting = false;
    let currentLine = 0;
    let txt = "";
    let typeSpeed = 50;

    const type = () => {
      if (!terminalRef.current) return; // Vérifier que la référence existe toujours

      const fullLine = text[currentLine];

      if (isDeleting) {
        txt = fullLine.substring(0, txt.length - 1);
        typeSpeed = 30;
      } else {
        txt = fullLine.substring(0, txt.length + 1);
        typeSpeed = 70;
      }

      if (terminalRef.current) {
        terminalRef.current.innerHTML = `<span class="terminal-prompt">$ </span>${txt}<span class="cursor">|</span>`;
      }

      if (!isDeleting && txt === fullLine) {
        typeSpeed = 1000;
        isDeleting = true;
      } else if (isDeleting && txt === "") {
        isDeleting = false;
        currentLine = (currentLine + 1) % text.length;
        typeSpeed = 500;
      }

      const timer = setTimeout(type, typeSpeed);
      return () => clearTimeout(timer);
    };

    // Démarrer l'animation seulement si le composant est monté
    let timer;
    if (isMounted) {
      timer = setTimeout(type, 1000);
    }

    // Nettoyer les timeouts lors du démontage
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isMounted]);

  // Nettoyer lors du démontage du composant
  useEffect(() => {
    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="terminal-button close"></span>
              <span className="terminal-button minimize"></span>
              <span className="terminal-button maximize"></span>
            </div>
            <div className="terminal-title">christian@portfolio ~ </div>
          </div>
          <div className="terminal-body">
            <div ref={terminalRef} className="terminal-text">
              <span className="terminal-prompt">$ </span>
              <span className="cursor">|</span>
            </div>
          </div>
        </div>

        <div className="hero-info">
          <h1 className="glitch" data-text={heroData.name}>
            {heroData.name}
          </h1>
          <h2>{heroData.title}</h2>
          <p>{heroData.subtitle}</p>
          <div className="hero-buttons">
            {heroData.buttons.map((button, index) => (
              <a
                key={index}
                href={button.link}
                className={`hero-button ${
                  button.primary ? "primary" : "secondary"
                }`}
              >
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
