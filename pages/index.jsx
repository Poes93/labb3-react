import React from 'react';
import { createRoot } from 'react-dom';
import App from '../pages/_app.jsx';
import '../styles/index.css';  

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
