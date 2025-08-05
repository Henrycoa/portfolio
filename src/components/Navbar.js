// src/components/Navbar.js
import React, { useEffect } from "react";
import "animate.css";
console.log("Navbar is rendering!");

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top animate__animated animate__fadeInDown animate__delay-0.5s">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          <span className="text-warning">Port</span>folio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item animate__animated animate__fadeInRight animate__delay-1s">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item animate__animated animate__fadeInRight animate__delay-2s">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item animate__animated animate__fadeInRight animate__delay-3s">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item animate__animated animate__fadeInRight animate__delay-4s">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
