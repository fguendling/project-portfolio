import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import AOS from 'aos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Initialize AOS (Animate on scroll library)
AOS.init({
});
;
