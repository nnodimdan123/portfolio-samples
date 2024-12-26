import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsLayout from './components/ProjectsLayout';
import ResumeStepper from './components/ResumeStepper';
import SideConsole from './components/SideConsole';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-mode');
  };

  return (
    <>
      <Navbar 
        isDarkMode={isDarkMode} 
        onDarkModeToggle={handleDarkModeToggle}
      />

      <HeroSection />

      {/* Main layout: two columns (left: Projects + Resume, right: Console) */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container" style={{ maxWidth: '1400px' }}>
          <div className="columns is-gapless">
            {/* LEFT side: wide column for Projects + Resume */}
            <div className="column is-9">
              <ProjectsLayout />
              <ResumeStepper />
            </div>

            {/* RIGHT side: narrower column for console */}
            <div className="column is-3">
              <SideConsole />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
