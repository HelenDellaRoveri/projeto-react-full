import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './main/App.jsx'; // Use o caminho relativo correto
import registerServiceWorker from './registerServiceWorker.js';
import 'bootstrap/dist/css/bootstrap.min.css'; // ou seu CSS personalizado


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

registerServiceWorker();
