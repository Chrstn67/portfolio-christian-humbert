"use client";

import { useState, useEffect } from "react";
import { headerData } from "../data/headerData";
import "../styles/Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <h1>{headerData.name}</h1>
          <p>{headerData.title}</p>
        </div>

        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`navigation ${menuOpen ? "open" : ""}`}>
          <ul>
            {headerData.navItems.map((item, index) => (
              <li key={index}>
                <a href={item.link} onClick={() => setMenuOpen(false)}>
                  <i className={item.icon}></i>
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
