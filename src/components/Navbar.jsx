import React from 'react';

function Navbar({ isDarkMode, onDarkModeToggle }) {
  return (
    <nav className="navbar" style={{ background: '#222', color: '#fff' }} role="navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#home" style={{ color: '#fff' }}>
          Daniel Nnodim
        </a>
      </div>

      <div className="navbar-menu" style={{ background: '#222' }}>
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
