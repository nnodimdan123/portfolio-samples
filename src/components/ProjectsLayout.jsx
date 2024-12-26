import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectsLayout() {
  return (
    <section id="projects" className="section" style={{ paddingTop: '2rem' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <h2 className="title has-text-centered is-size-3 mb-5">Browse My Portfolio</h2>

        <div className="columns is-multiline is-variable is-4 is-justify-content-center">
          <div className="column is-5">
            <ProjectCard
              title="Finance Tracker Website"
              description="Track income/expenses and manage budgets seamlessly."
              link="https://sample-port.onrender.com/"
              linkText="View Finance Tracker"
            />
          </div>

          <div className="column is-5">
            <ProjectCard
              title="E-commerce Website"
              description="A MERN e-commerce platform with secure payments."
              link="https://github.com/your-github/mern-ecommerce"
              linkText="View on GitHub"
              extraLink="https://mern-demo.example.com"
              extraLinkText="Live Demo"
            />
          </div>

          <div className="column is-5">
            <ProjectCard
              title="Tic Tac Toe (Python)"
              description="Classic Python game. Challenge an AI or friend!"
              link="https://github.com/your-github/tic-tac-toe"
              linkText="GitHub Repo"
            />
          </div>

          <div className="column is-5">
            <ProjectCard
              title="Currency Converter (Python)"
              description="A CLI tool converting amounts between currencies with real-time rates."
              link="https://github.com/your-github/currency-converter"
              linkText="GitHub Repo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsLayout;
