import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsLayout from "./components/ProjectsLayout";
import ResumeStepper from "./components/ResumeStepper";
import SideConsole from "./components/SideConsole";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark-mode");
  };

  return (
    <>
      {/* Navbar with dark mode toggle */}
      <Navbar isDarkMode={isDarkMode} onDarkModeToggle={handleDarkModeToggle} />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Layout: Two Columns */}
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container" style={{ maxWidth: "1400px" }}>
          <div className="columns is-gapless">
            {/* LEFT side: wide column for Projects + Resume */}
            <div className="column is-9">
              <ProjectsLayout />
              <ResumeStepper />
            </div>

            {/* RIGHT side: narrower column for Console */}
            <div className="column is-3">
              {/* Pass additional props if needed */}
              <SideConsole />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
