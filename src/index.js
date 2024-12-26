import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bulma/css/bulma.min.css';  // Bulma
import './App.css';               // Custom overrides
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);