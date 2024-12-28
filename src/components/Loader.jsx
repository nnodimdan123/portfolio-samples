import React, { useEffect } from "react";

function Loader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1000); 
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="loader-container">
      <h1 className="loader-text">Daniel Nnodim</h1>
    </div>
  );
}

export default Loader;
