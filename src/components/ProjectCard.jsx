import React from 'react';

function ProjectCard({ title, description, link, linkText, extraLink, extraLinkText }) {
  return (
    <div className="project-card">
      <h3 className="is-size-4 mb-2">{title}</h3>
      <p className="mb-3">{description}</p>
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="button is-small is-info mr-2"
        >
          {linkText || "View"}
        </a>
      )}
      {extraLink && (
        <a 
          href={extraLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="button is-small is-primary"
        >
          {extraLinkText || "Demo"}
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
