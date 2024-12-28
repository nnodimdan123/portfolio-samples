import React, { useState } from 'react';
import { Parallax } from 'react-parallax';

function HeroSection() {
  const [availability] = useState("Open to Opportunities");

  return (
    <Parallax
      bgImage="/path/to/your/background.jpg" // Replace with the correct path to your image
      strength={300}
    >
      <section className="hero-section" id="home" style={{ padding: '5rem 1rem', textAlign: 'center' }}>
        <h1 className="hero-title" style={{ fontFamily: "'Press Start 2P', cursive" }}>
          Hello, I'm <span className="highlight">Daniel Nnodim</span>
        </h1>
        <p className="hero-subtitle" style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
          DevOps Intern @NNPC | CS & Econ Major @ Luther College
        </p>
        <p className="status" style={{ fontSize: '1rem', fontStyle: 'italic', color: '#05ff82', marginTop: '0.5rem' }}>
          {availability}
        </p>
        <a
          href="/resume.pdf"
          className="button is-info is-outlined"
          style={{
            marginTop: '2rem',
            padding: '0.8rem 1.5rem',
            fontSize: '1rem',
            textDecoration: 'none',
            borderRadius: '6px',
            border: '1px solid #05ff82',
            backgroundColor: 'transparent',
            color: '#05ff82',
            transition: 'background 0.3s, color 0.3s',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#05ff82';
            e.target.style.color = '#000';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#05ff82';
          }}
        >
          Download My Resume
        </a>
      </section>
    </Parallax>
  );
}

export default HeroSection;
