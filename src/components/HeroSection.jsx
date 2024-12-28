import React from 'react';

function HeroSection() {
  return (
    <section
      className="hero-section"
      id="home"
      style={{
        backgroundColor: 'var(--hero-bg)', // Background color from your design
        textAlign: 'center',
        padding: '6rem 1rem',
        color: 'var(--text-color)',
      }}
    >
      <h1
        style={{
          fontFamily: '"Helvetica Neue", Arial, sans-serif', // Professional sans-serif font
          fontWeight: '700',
          fontSize: '2.2rem',
          marginBottom: '1.5rem',
        }}
      >
        Hello, I’m
      </h1>
      <h1
        style={{
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
          fontWeight: '900',
          fontSize: '4rem',
          marginBottom: '2rem',
          color: '#05ff82', // Highlighted text color
        }}
      >
        Daniel Nnodim
      </h1>
      <p
        style={{
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
          fontSize: '1.5rem',
          marginBottom: '1.5rem',
          color: 'var(--text-color)',
        }}
      >
        Software Engineer and Crypto Analyst | CS & Econ Major @ Luther College
      </p>
      <p
        style={{
          fontFamily: '"Roboto Mono", monospace', // Distinctive monospace for emphasis
          fontSize: '1.2rem',
          fontStyle: 'italic',
          color: '#05ff82',
          marginBottom: '2rem',
        }}
      >
        Open to Opportunities
      </p>
      <a
        href="/resume.pdf"
        style={{
          display: 'inline-block',
          fontFamily: '"Roboto Mono", monospace',
          color: '#05ff82',
          textDecoration: 'none',
          border: '2px solid #05ff82',
          padding: '0.75rem 2rem',
          borderRadius: '5px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
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
  );
}

export default HeroSection;
