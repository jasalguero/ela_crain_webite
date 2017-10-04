import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter basename="web">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
// registerServiceWorker();
