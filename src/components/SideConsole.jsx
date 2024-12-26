import React, { useState } from 'react';

function SideConsole() {
  const [lines] = useState([
    "Initializing Portfolio ...",
    "Loading Projects ...",
    "Loading Resume Stepper ...",
    "System Ready!",
    "> Explore and click through everything!"
  ]);

  return (
    <div className="side-console">
      <h2 style={{ fontFamily: "'Press Start 2P', cursive", marginBottom: '1rem' }}>Console</h2>
      {lines.map((line, idx) => (
        <div key={idx} className="console-line">{line}</div>
      ))}
    </div>
  );
}

export default SideConsole;
