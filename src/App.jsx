import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsLayout from "./components/ProjectsLayout";
import ResumeStepper from "./components/ResumeStepper";
import SideConsole from "./components/SideConsole";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark-mode");
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Navbar
        isDarkMode={isDarkMode}
        onDarkModeToggle={handleDarkModeToggle}
        activeSection={activeSection}
      />

      <HeroSection />

      <section id="projects" className="section" style={{ paddingTop: "2rem" }}>
        <div className="container" style={{ maxWidth: "1400px" }}>
          <div className="columns is-gapless">
            <div className="column is-9">
              <ProjectsLayout />
              <ResumeStepper />
            </div>
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
