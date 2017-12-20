import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWrapper from './AppWrapper';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter basename="">
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
);
// registerServiceWorker();
