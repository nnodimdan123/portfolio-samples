import React from 'react';

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <h1 className="hero-title">Hello, I'm Daniel Nnodim</h1>
      <p className="hero-subtitle">
        DevOps Intern @NNPC | CS & Econ Major @ Luther College
      </p>
      <a 
        href="/resume.pdf" 
        className="button is-info is-outlined" 
        style={{ marginTop: '1rem' }}
      >
        Download My Resume
      </a>
    </section>
  );
}

export default HeroSection;
