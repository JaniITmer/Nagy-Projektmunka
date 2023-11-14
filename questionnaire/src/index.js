import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './pages/register';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const regisztralas= ReactDOM.createRoot(document.getElementById('regisztracio'));
regisztralas.render(
<React.StrictMode>
    <Register />
  </React.StrictMode>


)
reportWebVitals();
