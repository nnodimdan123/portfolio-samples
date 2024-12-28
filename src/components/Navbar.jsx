import React, { useState } from 'react';

function Navbar({ isDarkMode, onDarkModeToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar" style={{ background: '#222', color: '#fff' }} role="navigation">
      {/* Brand Section */}
      <div className="navbar-brand">
        <a className="navbar-item" href="#home" style={{ color: '#fff' }}>
          Daniel Nnodim
        </a>
        <button
          className={`navbar-burger ${isMenuOpen ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      {/* Menu Items */}
      <div className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`} style={{ background: '#222' }}>
        <div className="navbar-start">
          <a className="navbar-item" href="#projects" style={{ color: '#fff' }}>
            Projects
          </a>
          <a className="navbar-item" href="#resume" style={{ color: '#fff' }}>
            Resume
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <button
              className="button is-small is-light"
              onClick={onDarkModeToggle}
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
          <a
            className="navbar-item"
            href="https://linkedin.com/in/nnodimdan"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff' }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
