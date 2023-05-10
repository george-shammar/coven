import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CreateProfile from './CreateProfile';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CreateProfile />
  </React.StrictMode>
);

