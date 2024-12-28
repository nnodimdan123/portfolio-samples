import React, { useState } from "react";
import resumeData from "../data/resumeData";

function ResumeStepper() {
  const steps = ["Summary", "Experience", "Education", "Skills & Certifications"];
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Summary
        return (
          <div>
            <h3 className="is-size-4" style={{ fontFamily: "Arial, sans-serif", color: "white" }}>
              Summary
            </h3>
            <p style={{ whiteSpace: "pre-line", fontFamily: "Arial, sans-serif", color: "#ccc" }}>
              {resumeData.summary}
            </p>
          </div>
        );
      case 1: // Experience
        return (
          <div>
            <h3 className="is-size-4" style={{ fontFamily: "Arial, sans-serif", color: "white" }}>
              Experience
            </h3>
            {resumeData.experience.map((exp, idx) => (
              <div
                key={idx}
                style={{
                  borderBottom: "1px solid #444",
                  marginBottom: "1rem",
                  paddingBottom: "0.5rem",
                  fontFamily: "Arial, sans-serif",
                  color: "#ccc",
                }}
              >
                <strong style={{ color: "cyan" }}>{exp.company}</strong> -{" "}
                <em style={{ color: "#f5f5f5" }}>{exp.role}</em>
                <br />
                <span style={{ color: "#bbb" }}>{exp.dateRange}</span>
                <br />
                {exp.location && <span>{exp.location}</span>}
                <br />
                {exp.description && (
                  <p style={{ marginTop: "0.5rem", whiteSpace: "pre-line" }}>
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        );
      case 2: // Education
        return (
          <div>
            <h3 className="is-size-4" style={{ fontFamily: "Arial, sans-serif", color: "white" }}>
              Education
            </h3>
            {resumeData.education.map((edu, idx) => (
              <div
                key={idx}
                style={{
                  borderBottom: "1px solid #444",
                  marginBottom: "1rem",
                  paddingBottom: "0.5rem",
                  fontFamily: "Arial, sans-serif",
                  color: "#ccc",
                }}
              >
                <strong style={{ color: "cyan" }}>{edu.institution}</strong>
                <br />
                <em style={{ color: "#f5f5f5" }}>{edu.degree}</em>
                <br />
                <span style={{ color: "#bbb" }}>{edu.dateRange}</span>
              </div>
            ))}
          </div>
        );
      case 3: // Skills & Certifications
        return (
          <div>
            <h3 className="is-size-4" style={{ fontFamily: "Arial, sans-serif", color: "white" }}>
              Skills & Certifications
            </h3>
            <div className="columns">
              <div className="column">
                <h4 className="is-size-5" style={{ fontFamily: "Arial, sans-serif", color: "green" }}>
                  Top Skills
                </h4>
                <ul>
                  {resumeData.topSkills.map((skill, idx) => (
                    <li
                      key={idx}
                      style={{
                        listStyleType: "circle",
                        marginLeft: "1rem",
                        fontFamily: "Arial, sans-serif",
                        color: "#ccc",
                      }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="column">
                <h4 className="is-size-5" style={{ fontFamily: "Arial, sans-serif", color: "green" }}>
                  Certifications
                </h4>
                <ul>
                  {resumeData.certifications.map((cert, idx) => (
                    <li
                      key={idx}
                      style={{
                        listStyleType: "circle",
                        marginLeft: "1rem",
                        fontFamily: "Arial, sans-serif",
                        color: "#ccc",
                      }}
                    >
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div id="resume" className="resume-stepper">
      <h2
        className="title is-size-3 has-text-centered mb-4"
        style={{
          fontFamily: "Arial, sans-serif",
          color: "white",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
        }}
      >
        Resume
      </h2>

      <div className="step-content">{renderStepContent()}</div>

      <div className="step-buttons">
        <button
          className="button is-small is-dark"
          onClick={handlePrev}
          style={{
            fontFamily: "Arial, sans-serif",
            color: "white",
            background: "#444",
            border: "none",
          }}
        >
          Prev
        </button>
        <button
          className="button is-small is-info"
          onClick={handleNext}
          style={{
            fontFamily: "Arial, sans-serif",
            color: "white",
            background: "green",
            border: "none",
          }}
        >
          Next
        </button>
      </div>

      {/* Step Dots */}
      <div className="mt-3 has-text-centered">
        {steps.map((stepName, idx) => (
          <span
            key={idx}
            style={{
              display: "inline-block",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              margin: "0 6px",
              background: idx === currentStep ? "green" : "#666",
              cursor: "pointer",
            }}
            onClick={() => setCurrentStep(idx)}
            title={stepName}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ResumeStepper;