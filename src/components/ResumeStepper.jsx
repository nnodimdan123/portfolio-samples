import React, { useState } from 'react';
import resumeData from '../data/resumeData';

function ResumeStepper() {
  const steps = [
    "Summary",
    "Experience",
    "Education",
    "Skills & Certifications"
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };
  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div>
            <h3 className="is-size-4">Summary</h3>
            <p style={{ whiteSpace: 'pre-line' }}>
              {resumeData.summary}
            </p>
          </div>
        );
      case 1:
        return (
          <div>
            <h3 className="is-size-4">Experience</h3>
            {resumeData.experience.map((exp, idx) => (
              <div 
                key={idx} 
                style={{ borderBottom: '1px solid #444', marginBottom: '1rem', paddingBottom: '0.5rem' }}
              >
                <strong>{exp.company}</strong> - <em>{exp.role}</em><br />
                <span>{exp.dateRange}</span><br />
                {exp.location && <span>{exp.location}</span>}<br />
                {exp.description && (
                  <p style={{ marginTop: '0.5rem', whiteSpace: 'pre-line' }}>
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="is-size-4">Education</h3>
            {resumeData.education.map((edu, idx) => (
              <div 
                key={idx}
                style={{ borderBottom: '1px solid #444', marginBottom: '1rem', paddingBottom: '0.5rem' }}
              >
                <strong>{edu.institution}</strong><br />
                <em>{edu.degree}</em><br />
                <span>{edu.dateRange}</span>
              </div>
            ))}
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="is-size-4">Skills & Certifications</h3>
            <div className="columns">
              <div className="column">
                <h4 className="is-size-5">Top Skills</h4>
                <ul>
                  {resumeData.topSkills.map((skill, idx) => (
                    <li key={idx} style={{ listStyleType: 'circle', marginLeft: '1rem' }}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="column">
                <h4 className="is-size-5">Certifications</h4>
                <ul>
                  {resumeData.certifications.map((cert, idx) => (
                    <li key={idx} style={{ listStyleType: 'circle', marginLeft: '1rem' }}>
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
      <h2 className="title is-size-3 has-text-centered mb-4">Resume</h2>

      <div className="step-content">
        {renderStepContent()}
      </div>

      <div className="step-buttons">
        <button className="button is-small is-dark" onClick={handlePrev}>Prev</button>
        <button className="button is-small is-info" onClick={handleNext}>Next</button>
      </div>

      {/* Step Dots */}
      <div className="mt-3 has-text-centered">
        {steps.map((stepName, idx) => (
          <span 
            key={idx}
            style={{
              display: 'inline-block',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              margin: '0 5px',
              background: idx === currentStep ? 'cyan' : '#666',
              cursor: 'pointer'
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