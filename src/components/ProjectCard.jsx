import React from "react";

function ProjectCard({ title, description, image, link, linkText, extraLink, extraLinkText }) {
  return (
    <div className="project-card" data-aos="fade-up">
      {image && (
        <img
          src={image}
          alt={`${title} Preview`}
          className="project-image"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "6px",
            marginBottom: "1rem",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        />
      )}
      <h3 className="is-size-4 mb-2">{title}</h3>
      <p className="mb-3">{description}</p>
      <div style={{ display: "flex", gap: "10px", marginTop: "1rem" }}>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="button is-small is-info"
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              backgroundColor: "#05ff82",
              color: "#000",
              textDecoration: "none",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#03e372")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#05ff82")}
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
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              backgroundColor: "#007bff",
              color: "#fff",
              textDecoration: "none",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            {extraLinkText || "Demo"}
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
