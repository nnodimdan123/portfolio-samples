import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsLayout from "./components/ProjectsLayout";
import ResumeStepper from "./components/ResumeStepper";
import SideConsole from "./components/SideConsole";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true); // Loader state
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark-mode");
  };

  useEffect(() => {
    // Simulate loading time for the Loader component
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

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

  // Render loader if still loading
  if (isLoading) {
    return <Loader />;
  }

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
