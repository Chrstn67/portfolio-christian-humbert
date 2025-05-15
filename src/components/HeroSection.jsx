"use client"

import { useEffect, useRef } from "react"
import { heroData } from "../data/heroData"
import "../styles/HeroSection.css"

function HeroSection() {
  const terminalRef = useRef(null)

  useEffect(() => {
    const terminal = terminalRef.current
    const text = heroData.terminalText
    const i = 0
    let isDeleting = false
    let currentLine = 0
    let txt = ""
    let typeSpeed = 50

    const type = () => {
      const fullLine = text[currentLine]

      if (isDeleting) {
        txt = fullLine.substring(0, txt.length - 1)
        typeSpeed = 30
      } else {
        txt = fullLine.substring(0, txt.length + 1)
        typeSpeed = 70
      }

      terminal.innerHTML = `<span class="terminal-prompt">$ </span>${txt}<span class="cursor">|</span>`

      if (!isDeleting && txt === fullLine) {
        typeSpeed = 1000
        isDeleting = true
      } else if (isDeleting && txt === "") {
        isDeleting = false
        currentLine = (currentLine + 1) % text.length
        typeSpeed = 500
      }

      setTimeout(type, typeSpeed)
    }

    setTimeout(type, 1000)
  }, [])

  return (
    <section className="hero-section">
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
              <a key={index} href={button.link} className={`hero-button ${button.primary ? "primary" : "secondary"}`}>
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
  )
}

export default HeroSection
